"use client";
import { useParams } from "next/navigation";
import React from "react";
import Seven from "./(product-details)/seven/seven";
import Three from "./(product-details)/three/three";
import Fourteen from "./(product-details)/fourteen/fourteen";
import Twenty from "./(product-details)/twenty/twenty";
import TwentyThree from "./(product-details)/twenty-three/twentythree";

const ProductDetails = () => {
  const { productID: product_id, slug } = useParams();

  return (
    <div>
      <TwentyThree data={{ product_id, slug }} />
    </div>
  );
};

export default ProductDetails;
