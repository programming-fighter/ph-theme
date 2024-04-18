import React from "react";
import FeatureProductFive from "@/components/(feature-product)/feature-product-five";
import FeatureProductFour from "./(feature-product)/feature-product-four";
import FeatureProductSix from "./(feature-product)/feature-product-six";
import FeatureProductSeven from "./(feature-product)/feature-product-seven";

const FeatureProduct = ({
  feature_product,
  theme,
  design,
  store_id,
  product,
}: any) => {
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
      {theme === "five" && (
        <FeatureProductFive feature_product={feature_product} />
      )}
      {theme === "six" && (
        <FeatureProductSix product={product} store_id={store_id} />
      )}
      {theme === "seven" && (
        <FeatureProductSeven
          store_id={store_id}
          feature_product={feature_product}
        />
      )}
    </>
  );
};

export default FeatureProduct;
