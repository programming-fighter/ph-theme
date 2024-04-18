import React from "react";
import FeatureProductFive from "@/components/(feature-product)/feature-product-five";
import FeatureProductFour from "./(feature-product)/feature-product-four";
import FeatureProductSix from "./(feature-product)/feature-product-six";
import FeatureProductSeven from "./(feature-product)/feature-product-seven";
import FeatureProductNine from "./(feature-product)/feature-product-nine";
import FeatureProductEight from "./(feature-product)/feature-product-eight";
import FeatureProductTwelve from "./(feature-product)/feature-product-twelve";
import FeatureProductThirteen from "./(feature-product)/feature-product-thirteen";
import FeatureProductSixteen from "./(feature-product)/feature-product-sixteen";
import FeatureProductSeventeen from "./(feature-product)/feature-product-seventeen";
import FeatureProductEighteen from "./(feature-product)/feature-product-eighteen";
import FeatureProductNineteen from "./(feature-product)/feature-product-nineteen";
import FeatureProductTwenty from "./(feature-product)/feature-product-twenty";
import FeatureProductTwentyOne from "./(feature-product)/feature-product-twentyone";
import FeatureProductTwentyTwo from "./(feature-product)/feature-product-twentytwo";
import FeatureProductTwentyThree from "./(feature-product)/feature-product-twentythree";
import FeatureProductTwentyFour from "./(feature-product)/feature-product-twentyfour";
import FeatureProductTwentyFive from "./(feature-product)/feature-product-twentyfive";
import FeatureProductTwentySix from "./(feature-product)/feature-product-twentysix";
import FeatureProductTwentySeven from "./(feature-product)/feature-product-twentyseven";
import FeatureProductTwentyEight from "./(feature-product)/feature-product-twentyeight";
import FeatureProductTwentyNine from "./(feature-product)/feature-product-twentynine";
import FeatureProductThirty from "./(feature-product)/feature-product-thirty";
import FeatureProductThirtyThree from "./(feature-product)/feature-product-thirtythree";
import FeatureProductThirtyFour from "./(feature-product)/feature-product-thirtyfour";
import FeatureProductThirtyFive from "./(feature-product)/feature-product-thirtyfive";
import FeatureProductThirtySix from "./(feature-product)/feature-product-thirtysix";

const FeatureProduct = ({
  feature_product,
  theme,
  design,
  store_id,
  product,
  banner,
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
      {theme === "eighteen" && (
        <FeatureProductEighteen
          feature_product={feature_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "nineteen" && (
        <FeatureProductNineteen
          feature_product={feature_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "twenty" && (
        <FeatureProductTwenty
          feature_product={feature_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "twentyone" && (
        <FeatureProductTwentyOne
          feature_product={feature_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "twentytwo" && <FeatureProductTwentyTwo product={product} />}
      {theme === "twentythree" && (
        <FeatureProductTwentyThree
          feature_product={feature_product}
          design={design}
        />
      )}
      {theme === "twentyfour" && (
        <FeatureProductTwentyFour
          feature_product={feature_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "twentyfive" && (
        <FeatureProductTwentyFive
          feature_product={feature_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "twentysix" && (
        <FeatureProductTwentySix
          feature_product={feature_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "twentyseven" && (
        <FeatureProductTwentySeven
          feature_product={feature_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "twentyeight" && (
        <FeatureProductTwentyEight
          feature_product={feature_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "twentynine" && (
        <FeatureProductTwentyNine
          feature_product={feature_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "thirty" && (
        <FeatureProductThirty
          feature_product={feature_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "thirtyone" && (
        <FeatureProductThirty
          feature_product={feature_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "thirtythree" && (
        <FeatureProductThirtyThree
          feature_product={feature_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "thirtyfour" && (
        <FeatureProductThirtyFour
          feature_product={feature_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "thirtyfive" && (
        <FeatureProductThirtyFive
          banner={banner}
          feature_product={feature_product}
          design={design}
          store_id={store_id}
        />
      )}
      {theme === "thirtysix" && (
        <FeatureProductThirtySix
          feature_product={feature_product}
          design={design}
          store_id={store_id}
        />
      )}
    </>
  );
};

export default FeatureProduct;
