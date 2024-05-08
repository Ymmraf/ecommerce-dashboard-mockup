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
  const [currentFilter, setCurrentFilter] = useState<any>({
    type: "",
    state: "",
    price: ""
  });

  const [typeFilter, setTypeFilter] = useState<any>("");
  const [stateFilter, setStateFilter] = useState<any>("");
  const [priceSort, setPriceSort] = useState<any>("");

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
    } else if (currentFilter[filter.filter]) {
      if(currentFilter[filter.filter] == filter.value) {
        setCurrentFilter({
          ...currentFilter,
          [filter.filter] : ""
        })
      } else if (currentFilter[filter.filter] != filter.value) {
        setCurrentFilter({
          ...currentFilter,
          [filter.filter] : filter.value
        })
      }
    }
  }

  function handleClickType(typeStr: string) {
    if (!typeFilter) {
      setTypeFilter(typeStr);
      setCurrentFilter({...currentFilter, type: typeStr})
    } else if (typeFilter) {
      if (typeFilter == typeStr) {
        setTypeFilter("");
        setCurrentFilter({...currentFilter, type: ""})
      } else if (typeFilter != typeStr) {
        setTypeFilter(typeStr);
        setCurrentFilter({...currentFilter, type: typeStr})
      }
    }
  }

  function handleClickState(stateStr: string) {
    if (!stateFilter) {
      setStateFilter(stateStr);
      setCurrentFilter({...currentFilter, state: stateStr})
    } else if (stateFilter) {
      if (stateFilter == stateStr) {
        setStateFilter("");
        setCurrentFilter({...currentFilter, state: ""})
      } else if (stateFilter != stateStr) {
        setStateFilter(stateStr);
        setCurrentFilter({...currentFilter, state: stateStr})
      }
    }
  }

  function handleClickPrice(priceStr: string) {
    if (!priceSort) {
      setPriceSort(priceStr);
      setCurrentFilter({...currentFilter, price: priceStr})
    } else if (priceSort) {
      if (priceSort == priceStr) {
        setPriceSort("");
        setCurrentFilter({...currentFilter, price: ""})
      } else if (priceSort != priceStr) {
        setPriceSort(priceStr);
        setCurrentFilter({...currentFilter, price: priceStr})
      }
    }
  }

  useEffect(() => {
    if(!initialData) {
      fetchAllProducts();
    }

  }, [currentFilter]);

  function filterAndSort() {
    
  }

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
            Filter ({currentFilter.length}){" "}
            <FontAwesomeIcon className="size-4" icon={faFilter} />
          </div>
          <div className="font-regular">
            Show {display.length} {display.length > 1 ? "goods" : "good"}
          </div>
        </button>
        <Filter
          state={sideFilter}
          toggle={toggleSideFilter}
          typeFilter={typeFilter}
          handleClickType={handleClickType}
          stateFilter={stateFilter}
          handleClickState={handleClickState}
          priceSort={priceSort}
          handleClickPrice={handleClickPrice}
          // nameSort={nameSort}
          // handleClickName={handleClickName}
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
              />
            ))}
          </Suspense>
        </section>
      </main>
      <Footer />
    </>
  );
}
