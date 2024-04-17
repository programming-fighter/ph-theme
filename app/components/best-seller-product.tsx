import React from "react";
import BestSellerSeven from "@/components/(best-seller)/best-seller-seven";
import BestSellerFive from "./(best-seller)/best-seller-five";
import BestSellerSix from "./(best-seller)/best-seller-six";
import BestSellerEight from "./(best-seller)/best-seller-eight";
import BestSellerNine from "./(best-seller)/best-seller-nine";
import BestSellerTen from "./(best-seller)/best-seller-ten";

const BestSellerProduct = ({
  best_sell_product,
  theme,
  design,
  store_id,
  product,
}: any) => {
  return (
    <>
      {theme === "four" && (
        <BestSellerFive
          best_sell_product={best_sell_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "five" && (
        <BestSellerFive
          best_sell_product={best_sell_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "six" && (
        <BestSellerSix product={product} design={design} store_id={store_id} />
      )}
      {theme === "seven" && (
        <BestSellerSeven best_sell_product={best_sell_product} />
      )}
      {theme === "eight" && (
        <BestSellerEight store_id={store_id} product={product} />
      )}
      {theme === "nine" && (
        <BestSellerNine
          best_sell_product={best_sell_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "ten" && (
        <BestSellerTen
          best_sell_product={best_sell_product}
          design={design}
          store_id={store_id}
        />
      )}
    </>
  );
};

export default BestSellerProduct;
