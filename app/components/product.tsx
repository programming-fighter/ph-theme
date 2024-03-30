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

const Product = ({ product }: any) => {
  return <DynamicDefaultProduct product={product} />;
};

export default Product;
