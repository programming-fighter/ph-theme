import React from "react";
import dynamic from "next/dynamic";
const NewArrivalProductNineDynamic = dynamic(
  () => import("@/components/(new-arrival)/new-arrival-product-nine"),
  {
    ssr: false,
    loading: NewArrivalProductNine,
  }
);

import NewArrivalProductSeven from "@/components/(new-arrival)/new-arrival-product-seven";
import NewArrivalProductFive from "./(new-arrival)/new-arrival-product-five";
import NewArrivalProductSix from "./(new-arrival)/new-arrival-product-six";
import NewArrivalProductsEight from "./(new-arrival)/new-arrival-product-eight";
import { NINE, TEN, TWELVE } from "../consts";
import NewArrivalProductNine from "./(new-arrival)/new-arrival-product-nine";
import NewArrivalProductTen from "./(new-arrival)/new-arrival-product-ten";
import NewArrivalProductTwelve from "./(new-arrival)/new-arrival-product-twelve";
import NewArrivalProductThirteen from "./(new-arrival)/new-arrival-product-thirteen";
import NewArrivalProductThirteeen from "./(new-arrival)/new-arrival-product-thirteen";

const NewArrival = ({ product, theme, design, store_id, category }: any) => {
  console.log(theme, "new arrival");
  return (
    <>
      {theme === "default" && <NewArrivalProductFive product={product} />}
      {theme === "two" && <NewArrivalProductFive product={product} />}
      {theme === "three" && <NewArrivalProductFive product={product} />}
      {theme === "four" && <NewArrivalProductFive product={product} />}
      {theme === "five" && <NewArrivalProductFive product={product} />}
      {theme === "six" && (
        <NewArrivalProductSix
          product={product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "seven" && (
        <NewArrivalProductSeven product={product} store_id={store_id} />
      )}
      {theme === "eight" && (
        <NewArrivalProductsEight product={product} design={design} />
      )}
      {theme === NINE && (
        <NewArrivalProductNineDynamic product={product} design={design} />
      )}
      {theme === TEN && (
        <NewArrivalProductTen
          category={category}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === TWELVE && (
        <NewArrivalProductTwelve
          product={product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "thirteen" && (
        <NewArrivalProductThirteeen
          product={product}
          design={design}
          store_id={store_id}
        />
      )}
    </>
  );
};

export default NewArrival;
