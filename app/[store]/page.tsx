"use client";

import Footer from "../ui/Footer";
import { Suspense } from "react";
import Breadcrumbs from "../ui/Breadcrumbs";
import ProductCard from "../ui/ProductCard";
import { getDecimal } from "../utils/getDecimal";
import { useState, useEffect } from "react";
import { ProductCardSkeleton } from "../ui/Skeleton";
import Filter from "../ui/store/Filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export default function Store() {
  const [data, setData] = useState<any[]>([]);
  const [display, setDisplay] = useState<any[]>([]);
  const [filter, setFilter] = useState<any[]>([]);
  const [sideFilter, setSideFilter] = useState(false);

  const [type, setType] = useState("");
  const [state, setState] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  
  useEffect(() => {
    fetchAllProducts();
  }, []);

  function toggleSideFilter() {
    setSideFilter(() => !sideFilter);
  }

  async function fetchAllProducts() {
    const allProduct = await fetch("/store/api");
    const json = await allProduct.json();
    setData(json.res.rows);
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
            Filter ({filter.length}) <FontAwesomeIcon className="size-4" icon={faFilter}/>
          </div>
          <div className="font-regular">
            Show {display.length} {display.length > 1 ? "goods" : "good"}
          </div>
        </button>
        <Filter state={sideFilter} toggle={toggleSideFilter} />
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
