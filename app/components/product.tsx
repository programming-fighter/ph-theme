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

import DefaultProduct from "@/app/components/(product)/product-default";
import ProductOne from "./(product)/product-one";
import ProductTwo from "./(product)/product-two";
import ProductThree from "./(product)/product-three";
import ProductFour from "./(product)/product-four";
import ProductFive from "./(product)/product-five";
import ProductTwenty from "./(product)/product-twenty";
import ProductEleven from "./(product)/product-eleven";
import ProductFourteen from "./(product)/product-fourteen";
import { SIXTEEN } from "../consts";
import ProductSixteen from "./(product)/product-sixteen";

const Product = ({
  product,
  best_sell_product,
  feature_product,
  store_id,
  design,
  theme,
  category,
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
    </>
  );
};

export default Product;
