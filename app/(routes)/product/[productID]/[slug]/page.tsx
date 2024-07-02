import { Metadata } from "next";
import ProductDetails from "@/app/components/product-details";
import React from "react";

export const metadata: Metadata = {
  title: "product details",
  description: "A Frontend Developer Portfolio",
  icons: {
    icon: "/images/eBitans.png",
  },
};

const SingleProductDetails = () => {
  return (
    <div>
      <ProductDetails />
    </div>
  );
};

export default SingleProductDetails;
