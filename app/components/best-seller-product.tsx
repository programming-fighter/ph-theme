"use client";
import React from "react";
import BestSellerSeven from "@/components/(best-seller)/best-seller-seven";
import BestSellerFive from "./(best-seller)/best-seller-five";
import BestSellerSix from "./(best-seller)/best-seller-six";
import BestSellerEight from "./(best-seller)/best-seller-eight";
import BestSellerNine from "./(best-seller)/best-seller-nine";
import BestSellerTen from "./(best-seller)/best-seller-ten";
import BestSellerThirteen from "./(best-seller)/best-seller-thirteen";
import BestSellerSixteen from "./(best-seller)/best-seller-sixteen";
import BestSellerSeventeen from "./(best-seller)/best-seller-seventeen";
import BestSellerNineteen from "./(best-seller)/best-seller-nineteen";
import BestSellerTwentyOne from "./(best-seller)/best-seller-twentyone";
import BestSellerTwentyTwo from "./(best-seller)/best-seller-twentytwo";

const BestSellerProduct = ({
  best_sell_product,
  theme,
  design,
  store_id,
  product,
  headerSetting,
}: any) => {
  console.log(theme, "t");
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
      {theme === "eleven" && (
        <BestSellerTen
          best_sell_product={best_sell_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "twelve" && (
        <BestSellerTen
          best_sell_product={best_sell_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "thirteen" && (
        <BestSellerThirteen
          best_sell_product={best_sell_product}
          store_id={store_id}
        />
      )}
      {theme === "sixteen" && (
        <BestSellerSixteen
          best_sell_product={best_sell_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "seventeen" && (
        <BestSellerSeventeen
          best_sell_product={best_sell_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "nineteen" && (
        <BestSellerNineteen
          best_sell_product={best_sell_product}
          store_id={store_id}
        />
      )}
      {theme === "twentyone" && (
        <BestSellerTwentyOne
          best_sell_product={best_sell_product}
          design={design}
          store_id={store_id}
          headerSetting={headerSetting}
        />
      )}
      {theme === "twentytwo" && (
        <BestSellerTwentyTwo product={product} store_id={store_id} />
      )}
    </>
  );
};

export default BestSellerProduct;
