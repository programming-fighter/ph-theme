import React from "react";
import FeatureProductFive from "@/components/(feature-product)/feature-product-five";
import FeatureProductFour from "./(feature-product)/feature-product-four";
import FeatureProductSix from "./(feature-product)/feature-product-six";
import FeatureProductSeven from "./(feature-product)/feature-product-seven";
import FeatureProductNine from "./(feature-product)/feature-product-nine";
import FeatureProductEight from "./(feature-product)/feature-product-eight";
import FeatureProductTwelve from "./(feature-product)/feature-product-twelve";
import FeatureProductThirteen from "./(feature-product)/feature-product-thirteen";
import FeatureProductSixteen from "./(feature-product)/featuer-product-sixteen";
import FeatureProductSeventeen from "./(feature-product)/feature-product-seventeen";

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
      {theme === "nine" && (
        <FeatureProductNine feature_product={feature_product} design={design} />
      )}
      {theme === "eleven" && (
        <FeatureProductEight
          feature_product={feature_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "twelve" && (
        <FeatureProductTwelve
          feature_product={feature_product}
          design={design}
        />
      )}
      {theme === "thirteen" && (
        <FeatureProductThirteen
          feature_product={feature_product}
          store_id={store_id}
        />
      )}
      {theme === "sixteen" && (
        <FeatureProductSixteen
          feature_product={feature_product}
          design={design}
          store_id={store_id}
        />
      )}

      {theme === "seventeen" && (
        <FeatureProductSeventeen
          feature_product={feature_product}
          design={design}
          store_id={store_id}
        />
      )}
    </>
  );
};

export default FeatureProduct;
