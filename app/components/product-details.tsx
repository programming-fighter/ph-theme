"use client";
import { useParams } from "next/navigation";
import React from "react";
import Seven from "./(product-details)/seven/seven";
import Three from "./(product-details)/three/three";
import Fourteen from "./(product-details)/fourteen/fourteen";
import Twenty from "./(product-details)/twenty/twenty";
import TwentyThree from "./(product-details)/twenty-three/twentythree";
import One from "./(product-details)/one/one";
import Two from "./(product-details)/two/two";
import Four from "./(product-details)/four/four";
import Five from "./(product-details)/five/five";

const ProductDetails = () => {
  const { productID: product_id, slug } = useParams();

  return (
    <div>
      <Two data={{ product_id, slug }} />
    </div>
  );
};

export default ProductDetails;
