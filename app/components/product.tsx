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

const Product = ({ product, theme }: any) => {
  return (
    <>
      {theme === "default" && <DynamicDefaultProduct product={product} />}
      {theme === "one" && <ProductOne />}
    </>
  );
};

export default Product;
