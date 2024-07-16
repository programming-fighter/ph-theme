import React from "react";
import dynamic from "next/dynamic";
const DynamicDefaultProduct = dynamic(
  () => import("@/components/(product)/product-default"),
  {
    ssr: false,
    loading: DefaultProduct,
  }
);
const DynamicProductEleven = dynamic(
  () => import("@/components/(product)/product-eleven"),
  {
    ssr: false,
  }
);
const DynamicProductThirtyThree = dynamic(
  () => import("@/components/(product)/product-thirtythree"),
  {
    ssr: false,
  }
);

import DefaultProduct from "@/components/(product)/product-default";
import ProductOne from "./(product)/product-one";
import ProductTwo from "./(product)/product-two";
import ProductThree from "./(product)/product-three";
import ProductFour from "./(product)/product-four";
import ProductFive from "./(product)/product-five";
import ProductTwenty from "./(product)/product-twenty";
import ProductEleven from "./(product)/product-eleven";
import ProductFourteen from "./(product)/product-fourteen";
import { NINETEEN, SEVENTEEN, SIXTEEN, THIRTY, TWENTY } from "../app/consts";
import ProductSixteen from "./(product)/product-sixteen";
import ProductSeventeen from "./(product)/product-seventeen";
import ProductNineteen from "./(product)/product-nineteen";
import ProductTwentyOne from "./(product)/product-twentyone";
import ProductTwentyFour from "./(product)/product-twentyfour";
import ProductTwentySeven from "./(product)/product-twentyseven";
import ProductTwentyNine from "./(product)/product-twentynine";
import ProductThirty from "./(product)/product-thirty";
import ProductTwentySix from "./(product)/product-twentysix";
import ProductThirtyThree from "./(product)/product-thirtythree";
import ProductTwentyEight from "./(product)/product-twentyeight";
import ProductThirtyFour from "./(product)/product-thirtyfour";
import ProductThirtyFive from "./(product)/product-thirtyfive";
import ProductThirtySix from "./(product)/product-thirtysix";
import ProductThirtySeven from "./(product)/product-thirtyseven";
import ProductThirtyEight from "./(product)/product-thirtyeight";
import ProductThirtyNine from "./(product)/product-thirtynine";

const Product = ({
  product,
  best_sell_product,
  feature_product,
  store_id,
  design,
  theme,
  category,
  headerSetting,
}: any) => {
  return (
    <>
      {theme === "default" && <DynamicDefaultProduct product={product} />}
      {theme === "one" && (
        <ProductOne
          product={product}
          best_seller_product={best_sell_product}
          feature_product={feature_product}
          store_id={store_id}
          design={design}
        />
      )}
      {theme === "two" && (
        <ProductTwo
          category={category}
          product={product}
          best_seller_product={best_sell_product}
          feature_product={feature_product}
          store_id={store_id}
          design={design}
        />
      )}
      {theme === "three" && (
        <ProductThree store_id={store_id} design={design} product={product} />
      )}
      {theme === "four" && (
        <ProductFour store_id={store_id} design={design} product={product} />
      )}
      {theme === "five" && (
        <ProductFive store_id={store_id} design={design} product={product} />
      )}
      {theme === "seven" && (
        <ProductTwenty category={category} design={design} />
      )}
      {theme === "ten" && (
        <ProductFive store_id={store_id} design={design} product={product} />
      )}
      {theme === "eleven" && (
        <DynamicProductEleven
          product={product}
          design={design}
          best_sell_product={best_sell_product}
          feature_product={feature_product}
        />
      )}
      {theme === "fourteen" && (
        <ProductFourteen
          category={category}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === SIXTEEN && (
        <ProductSixteen product={product} design={design} store_id={store_id} />
      )}
      {theme === SEVENTEEN && (
        <ProductSeventeen
          product={product}
          design={design}
          store_id={store_id}
          category={category}
        />
      )}
      {theme === NINETEEN && (
        <ProductNineteen product={product} store_id={store_id} />
      )}
      {theme === TWENTY && (
        <ProductTwenty product={product} category={category} design={design} />
      )}
      {theme === "twentyone" && (
        <ProductTwentyOne
          design={design}
          store_id={store_id}
          headerSetting={headerSetting}
          product={product}
          category={category}
        />
      )}
      {theme === "twentyfour" && (
        <ProductTwentyFour
          product={product}
          store_id={store_id}
          design={design}
          category={category}
        />
      )}
      {theme === "twentysix" && (
        <ProductTwentySix
          design={design}
          store_id={store_id}
          category={category}
        />
      )}
      {theme === "twentyseven" && (
        <ProductTwentySeven
          category={category}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "twentyeight" && (
        <ProductTwentyEight
          product={product}
          design={design}
          store_id={store_id}
          category={category}
        />
      )}

      {theme === "twentynine" && (
        <ProductTwentyNine
          category={category}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === THIRTY && (
        <ProductThirty
          category={category}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "thirtyone" && (
        <ProductThirty
          category={category}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "thirtythree" && (
        <DynamicProductThirtyThree
          product={product}
          design={design}
          best_sell_product={best_sell_product}
          feature_product={feature_product}
        />
      )}
      {theme === "thirtyfour" && (
        <ProductThirtyFour
          product={product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "thirtyfive" && (
        <ProductThirtyFive
          product={product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "thirtysix" && (
        <ProductThirtySix
          design={design}
          store_id={store_id}
          product={product}
        />
      )}
      {theme === "thirtyseven" && (
        <ProductThirtySeven
          design={design}
          store_id={store_id}
          product={product}
        />
      )}
      {theme === "thirtyeight" && (
        <ProductThirtyEight
          category={category}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "thirtynine" && (
        <ProductThirtyNine
          category={category}
          design={design}
          store_id={store_id}
        />
      )}
    </>
  );
};

export default Product;
