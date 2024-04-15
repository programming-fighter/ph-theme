import React from "react";
import dynamic from "next/dynamic";
const DynamicDefaultProduct = dynamic(
  () => import("@/components/(product)/product-default"),
  {
    ssr: false,
    loading: DefaultProduct,
  }
);

import DefaultProduct from "@/app/components/(product)/product-default";
import ProductOne from "./(product)/product-one";
import ProductTwo from "./(product)/product-two";
import ProductThree from "./(product)/product-three";

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
    </>
  );
};

export default Product;
