import React from "react";

import NewArrivalProductSeven from "@/components/(new-arrival)/new-arrival-product-seven";
import NewArrivalProductFive from "./(new-arrival)/new-arrival-product-five";
import NewArrivalProductSix from "./(new-arrival)/new-arrival-product-six";
import NewArrivalProductsEight from "./(new-arrival)/new-arrival-product-eight";

const NewArrival = ({ product, theme, design, store_id }: any) => {
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
    </>
  );
};

export default NewArrival;
