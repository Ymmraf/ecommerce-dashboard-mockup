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

export default function Store() {
  const [initialData, setinitialData] = useState<any>("");
  const [sideFilter, setSideFilter] = useState(false);
  const [display, setDisplay] = useState<any[]>([]);
  const [filterQuantity, setFilterQuantity] = useState<number>(0)
  const [currentFilter, setCurrentFilter] = useState<any>({
    type: "",
    state: "",
    price: ""
  });

  interface FilterObject {
    filter: string 
    value: string
  }

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

    if(currentFilter.price == "asc") {
      setDisplay(display => display.sort((a,b) => {
        if(a.discount > 0 && b.discount > 0) {
          return (a.price * (1 - a.discount) - (b.price * (1 - b.discount)))
        } else if (a.discount > 0 && b.discount == 0) {
          return (a.price * (1 - a.discount)) - b.price
        } else if (b.discount > 0 && a.discount == 0) {
          return a.price - (b.price * (1 - b.discount))
        }
        return a.price - b.price
      }))
    } else if (currentFilter.price == "desc") {
      setDisplay(display => display.sort((a,b) => {
        if(a.discount > 0 && b.discount > 0) {
          return (b.price * (1 - b.discount) - (a.price * (1 - a.discount)))
        } else if (b.discount > 0 && a.discount == 0) {
          return (b.price * (1 - b.discount)) - a.price
        } else if (a.discount > 0 && b.discount == 0) {
          return b.price - (a.price * (1 - a.discount))
        }
        return b.price - a.price
      }))
    }
  }

  useEffect(() => {
    if(!initialData) {
      fetchAllProducts();
    }

    if(display.length) {
      filterAndSort()
    }
    console.log(currentFilter)
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
      <main className="w-11/12 m-auto">
        <Breadcrumbs nav={["Store"]} />
        <h1 className="text-coal text-3xl font-semibold">All products</h1>
        <button
          onClick={toggleSideFilter}
          className="text-coal px-4 py-2 text-xl w-full text-left hover:bg-darkcream flex justify-between my-8 rounded-xl duration-300"
        >
          <div className="font-semibold opacity-90">
            Filter({filterQuantity}) <FontAwesomeIcon className="size-4" icon={faFilter} />
          </div>
          <div className="font-regular">
            Show {display.length} {display.length > 1 ? "goods" : "good"}
          </div>
        </button>
        <Filter
          state={sideFilter}
          toggle={toggleSideFilter}
          currentFilter={currentFilter}
          handleClickFilter={handleClickFilter}
        />
        <section className="grid grid-cols-2 gap-x-2 gap-y-6 mt-8">
          <Suspense fallback={<ProductCardSkeleton />}>
            {display.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                price={getDecimal(product.price, product.discount)}
                img={product.img}
                rating={product.rating}
                originalPrice={getDecimal(product.price)}
                href={product.href}
              />
            ))}
          </Suspense>
        </section>
      </main>
      <Footer />
    </>
  );
}
