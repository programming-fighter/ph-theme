import React from "react";
import BestSellerSeven from "@/components/(best-seller)/best-seller-seven";
import BestSellerFive from "./(best-seller)/best-seller-five";
import BestSellerSix from "./(best-seller)/best-seller-six";

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
      {/* <BestSellerSeven best_sell_product={best_sell_product} />; */}
    </>
  );
};

export default BestSellerProduct;
