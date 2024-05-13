"use client";
import { useParams } from "next/navigation";
import React from "react";
import Seven from "./(product-details)/seven/seven";
import Three from "./(product-details)/three/three";

const ProductDetails = () => {
  const { productID: product_id, slug } = useParams();

  return (
    <div>
      <Three data={{ product_id, slug }} />
    </div>
  );
};

export default ProductDetails;
