"use client";
import { useParams } from "next/navigation";
import React from "react";
import Seven from "./(product-details)/seven/seven";

const ProductDetails = () => {
  const { productID: product_id, slug } = useParams();

  return (
    <div>
      <Seven data={{ product_id, slug }} />
    </div>
  );
};

export default ProductDetails;
