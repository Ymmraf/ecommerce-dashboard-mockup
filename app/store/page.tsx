"use client";

import Footer from "../ui/Footer";
import Breadcrumbs from "../ui/Breadcrumbs";
import ProductCard from "../ui/ProductCard";
import Filter from "../ui/store/Filter";
import { Suspense } from "react";
import { getDecimal } from "../utils/getDecimal";
import { useState, useEffect } from "react";
import { ProductCardSkeleton } from "../ui/Skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import FilterDesktop from "../ui/store/FilterDesktop";
import { StoreFilter, StoreProductInfomation } from "@/type";
import { FilterObject } from "@/type";

export default function Store() {
  const [initialData, setinitialData] = useState<any>();
  const [sideFilter, setSideFilter] = useState<boolean>(false);
  const [display, setDisplay] = useState<StoreProductInfomation[]>([]);
  const [filterQuantity, setFilterQuantity] = useState<number>(0)
  const [currentFilter, setCurrentFilter] = useState<StoreFilter>({
    type: "",
    state: "",
    price: ""
  });

  console.log('This is it')
  
  function handleClickFilter(filter : FilterObject) {
    if(!currentFilter[filter.filter]) {
      setCurrentFilter({
        ...currentFilter,
        [filter.filter] : filter.value
      })
      setFilterQuantity(quantity => quantity+1)
    } else if (currentFilter[filter.filter]) {
      if(currentFilter[filter.filter] == filter.value) {
        setCurrentFilter({
          ...currentFilter,
          [filter.filter] : ""
        })
        setFilterQuantity(quantity => quantity-1)
      } else if (currentFilter[filter.filter] != filter.value) {
        setCurrentFilter({
          ...currentFilter,
          [filter.filter] : filter.value
        })
      }
    }
  }

  function filterAndSort() {
    setDisplay(display => initialData)

    if(currentFilter.type) {
      setDisplay(display => display.filter(product => product.type == currentFilter.type))
    }

    if(currentFilter.state == "discount") {
      setDisplay(display => display.filter(product => product.discount > 0))
    } else if (currentFilter.state == "new") {
      setDisplay(display => display.filter(product => product.new == true))
    }

    if (currentFilter.price == "asc") {
      setDisplay(display => display.toSorted(
        (a, b) => a.price * (1 - a.discount) - b.price * (1 - b.discount)
      ));
    } else if (currentFilter.price == "desc") {
      setDisplay((display) => display.toSorted(
        (a, b) => b.price * (1 - b.discount) - a.price * (1 - a.discount)
      ));
    }
  }

  useEffect(() => {
    if(!initialData) {
      fetchAllProducts();
    }

    if(display.length) {
      filterAndSort()
    }
    
  }, [currentFilter]);

  function toggleSideFilter() {
    setSideFilter(() => !sideFilter);
  }

  async function fetchAllProducts() {
    const allProduct = await fetch("/store/api");
    const json = await allProduct.json();
    setinitialData(json.res.rows);
    setDisplay(json.res.rows);
  }

  return (
    <>
      <div className="lg:flex lg:min-h-[70vh] 2xl:min-h-[80vh]">
        <FilterDesktop 
          currentFilter={currentFilter}
          handleClickFilter={handleClickFilter}
        />
        <main className="w-11/12 mx-auto lg:mr-8">
          <Breadcrumbs nav={["Store"]} />
          <h1 className="text-coal text-3xl font-semibold">All products</h1>

          <button
            onClick={toggleSideFilter}
            className="text-coal px-4 py-2 text-xl w-full text-left hover:bg-darkcream flex justify-between my-8 rounded-xl duration-300 lg:hidden"
          >
            <div className="font-semibold opacity-90">
              Filter({filterQuantity}) <FontAwesomeIcon className="size-4" icon={faFilter} />
            </div>
            <div className="font-regular">
              Show {display.length} {display.length > 1 ? "goods" : "good"}
            </div>
          </button>
          
          <div
            className="text-coal px-4 py-2 text-xl w-full text-left hidden justify-between my-8 rounded-xl duration-300 lg:flex" 
          >
            <div className="font-semibold opacity-90">
              Filter({filterQuantity}) <FontAwesomeIcon className="size-4" icon={faFilter} />
            </div>
            <div className="font-regular">
              Show {display.length} {display.length > 1 ? "goods" : "good"}
            </div>
          </div>

          <Filter
            state={sideFilter}
            toggle={toggleSideFilter}
            currentFilter={currentFilter}
            handleClickFilter={handleClickFilter}
          />
          <section className="grid grid-cols-2 gap-x-2 gap-y-6 mt-8 md:grid-cols-3 xl:grid-cols-4">
            <Suspense fallback={<ProductCardSkeleton />}>
              {display.map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  price={getDecimal(product.price, product.discount)}
                  img={`/fruits/${product.name.toLowerCase().replace(' ', '-')}.jpg`}
                  rating={product.rating}
                  originalPrice={getDecimal(product.price)}
                  href={`/store/${product.name.toLowerCase()}`}
                />
              ))}
            </Suspense>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
