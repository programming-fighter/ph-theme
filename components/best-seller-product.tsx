"use client";
import React from "react";

import BestSellerFive from "./_homepage/best-seller/best-seller-five";
import BestSellerSix from "./_homepage/best-seller/best-seller-six";
import BestSellerEight from "./_homepage/best-seller/best-seller-eight";
import BestSellerNine from "./_homepage/best-seller/best-seller-nine";
import BestSellerTen from "./_homepage/best-seller/best-seller-ten";
import BestSellerThirteen from "./_homepage/best-seller/best-seller-thirteen";
import BestSellerSixteen from "./_homepage/best-seller/best-seller-sixteen";
import BestSellerSeventeen from "./_homepage/best-seller/best-seller-seventeen";
import BestSellerNineteen from "./_homepage/best-seller/best-seller-nineteen";
import BestSellerTwentyOne from "./_homepage/best-seller/best-seller-twentyone";
import BestSellerTwentyTwo from "./_homepage/best-seller/best-seller-twentytwo";
import BestSellerTwentyThree from "./_homepage/best-seller/best-seller-twentythree";
import BestSellerTwentyFour from "./_homepage/best-seller/best-seller-twentyfour";
import BestSellerTwentyFive from "./_homepage/best-seller/best-seller-twentyfive";
import BestSellerTwentySix from "./_homepage/best-seller/best-seller-twentysix";
import BestSellerTwentySeven from "./_homepage/best-seller/best-seller-twentyseven";
import BestSellerTwentyEight from "./_homepage/best-seller/best-seller-twentyeight";
import BestSellerTwentyNine from "./_homepage/best-seller/best-seller-twentynine";
import BestSellerThirty from "./_homepage/best-seller/best-seller-thirty";
import BestSellerThirtyThree from "./_homepage/best-seller/best-seller-thirtythree";
import BestSellerThirtyFour from "./_homepage/best-seller/best-seller-thirtyfour";
import BestSellerThirtyFive from "./_homepage/best-seller/best-seller-thirtyfive";
import BestSellerThirtySix from "./_homepage/best-seller/best-seller-thirtysix";
import BestSellerThirtySeven from "./_homepage/best-seller/best-seller-thirtyseven";
import BestSellerThirtyEight from "./_homepage/best-seller/best-seller-thirtyeight";
import BestSellerThirtyNine from "./_homepage/best-seller/best-seller-thritynine";
import BestSellerSeven from "./_homepage/best-seller/best-seller-seven";

const BestSellerProduct = ({
  best_sell_product,
  theme,
  design,
  store_id,
  product,
  headerSetting,
  banner,
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
      {theme === "twentythree" && (
        <BestSellerTwentyThree
          best_sell_product={best_sell_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "twentyfour" && (
        <BestSellerTwentyFour
          best_sell_product={best_sell_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "twentyfive" && (
        <BestSellerTwentyFive
          best_sell_product={best_sell_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "twentysix" && (
        <BestSellerTwentySix
          best_sell_product={best_sell_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "twentyseven" && (
        <BestSellerTwentySeven
          best_sell_product={best_sell_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "twentyeight" && (
        <BestSellerTwentyEight
          best_sell_product={best_sell_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "twentynine" && (
        <BestSellerTwentyNine
          best_sell_product={best_sell_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "thirty" && (
        <BestSellerThirty
          best_sell_product={best_sell_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "thirtyone" && (
        <BestSellerThirty
          best_sell_product={best_sell_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "thirtythree" && (
        <BestSellerThirtyThree
          best_sell_product={best_sell_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "thirtyfour" && (
        <BestSellerThirtyFour
          best_sell_product={best_sell_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "thirtyfive" && (
        <BestSellerThirtyFive
          best_sell_product={best_sell_product}
          design={design}
          store_id={store_id}
          banner={banner}
        />
      )}
      {theme === "thirtysix" && (
        <BestSellerThirtySix
          best_sell_product={best_sell_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "thirtyseven" && (
        <BestSellerThirtySeven
          best_sell_product={best_sell_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "thirtyeight" && (
        <BestSellerThirtyEight
          best_sell_product={best_sell_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "thirtynine" && (
        <BestSellerThirtyNine
          best_sell_product={best_sell_product}
          design={design}
          store_id={store_id}
        />
      )}
    </>
  );
};

export default BestSellerProduct;
