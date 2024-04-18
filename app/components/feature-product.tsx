import React from "react";
import FeatureProductFive from "@/components/(feature-product)/feature-product-five";
import FeatureProductFour from "./(feature-product)/feature-product-four";

const FeatureProduct = ({ feature_product, theme, design, store_id }: any) => {
  console.log(design, "d");
  return (
    <>
      {theme === "two" && (
        <FeatureProductFour
          feature_product={feature_product}
          design={design}
          store_id={store_id}
        />
      )}
    </>
  );
};

export default FeatureProduct;
