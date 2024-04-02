"use client";
import dynamic from "next/dynamic";
import DefaultFeaturedCategory from "@/components/(featured-category)/featured-default";
import FeaturedOne from "./(featured-category)/featuredcat-one";
import FeaturedTwo from "./(featured-category)/featuredcat-two";
import FeaturedThree from "./(featured-category)/featuredcat-three";
import FeaturedFour from "./(featured-category)/featuredcat-four";
import FeaturedSix from "./(featured-category)/featuredcat-six";
import FeaturedSeven from "./(featured-category)/featuredcat-seven";
import FeaturedEight from "./(featured-category)/featurecat-eight";
import FeaturedEleven from "./(featured-category)/featuredcat-eleven";
import FeaturedTwelve from "./(featured-category)/featuredcat-twelve";
import {
  EIGHTEEN,
  FORTY,
  NINETEEN,
  SEVENTEEN,
  THIRTY,
  THIRTY_FIVE,
  THIRTY_ONE,
  THIRTY_SEVEN,
  THIRTY_SIX,
  THIRTY_THREE,
  TWELVE,
  TWENTY,
  TWENTY_EIGHT,
  TWENTY_FIVE,
  TWENTY_ONE,
  TWENTY_SEVEN,
  TWENTY_THREE,
} from "../consts";
import FeaturedSixteen from "./(featured-category)/featuredcat-sixteen";
import FeaturedSeventeen from "./(featured-category)/featuredcat-seventeen";
import FeaturedEighteen from "./(featured-category)/featuredcat-eighteen";
import FeaturedNineteen from "./(featured-category)/featuredcat-nineteen";
import FeaturedTwenty from "./(featured-category)/featuredcat-twenty";
import FeaturedTwentyOne from "./(featured-category)/featuredcat-twentyone";
import FeaturedTwentyThree from "./(featured-category)/featuredcat-twentythree";
import FeaturedTwentyFive from "./(featured-category)/featuredcat-twentyfive";
import FeaturedTwentySix from "./(featured-category)/featuredcat-twentysix";
import FeaturedTwentySeven from "./(featured-category)/featuredcat-twentyseven";
import FeaturedTwentyEight from "./(featured-category)/featuredcat-twenty-eight";
import FeaturedThirty from "./(featured-category)/featuredcat-thirty";
import FeaturedThirtyOne from "./(featured-category)/featured-thirtyone";
import FeaturedThirtyThree from "./(featured-category)/featuredcat-thirtythree";
import FeaturedThirtyFive from "./(featured-category)/featuredcat-thirtyfive";
import FeaturedThirtySix from "./(featured-category)/featuredcat-thirtysix";
import FeaturedThirtySeven from "./(featured-category)/featuredcat-thirtyseven";

const FeaturedCategory = ({
  theme,
  category,
  design,
  store_id,
  product,
}: any) => {
  return (
    <>
      {theme === "default" && <DefaultFeaturedCategory category={category} />}
      {theme === "one" && <FeaturedOne category={category} design={design} />}
      {theme === "two" && <FeaturedTwo category={category} design={design} />}
      {theme === "three" && (
        <FeaturedThree
          category={category}
          design={design}
          store_id={store_id}
          product={product}
        />
      )}
      {theme === "four" && <FeaturedFour category={category} design={design} />}
      {theme === "six" && <FeaturedSix design={design} category={category} />}
      {theme === "seven" && <FeaturedSeven category={category} />}
      {theme === "eight" && (
        <FeaturedEight category={category} design={design} />
      )}
      {theme === "eleven" && (
        <FeaturedEleven
          store_id={store_id}
          category={category}
          design={design}
        />
      )}
      {theme === TWELVE && (
        <FeaturedTwelve category={category} design={design} />
      )}

      {theme === "sixteen" && (
        <FeaturedSixteen category={category} design={design} />
      )}
      {theme === SEVENTEEN && (
        <FeaturedSeventeen category={category} design={design} />
      )}
      {theme === EIGHTEEN && (
        <FeaturedEighteen category={category} design={design} />
      )}
      {theme === NINETEEN && <FeaturedNineteen category={category} />}
      {theme === TWENTY && <FeaturedTwenty category={category} />}
      {theme === TWENTY_ONE && <FeaturedTwentyOne category={category} />}
      {theme === TWENTY_THREE && <FeaturedTwentyThree category={category} />}
      {theme === TWENTY_FIVE && (
        <FeaturedTwentyFive category={category} design={design} />
      )}
      {theme === TWENTY_SEVEN && (
        <FeaturedTwentySeven
          category={category}
          product={product}
          design={design}
        />
      )}
      {theme === TWENTY_EIGHT && (
        <FeaturedTwentyEight category={category} design={design} />
      )}
      {theme === THIRTY && (
        <FeaturedThirty category={category} design={design} />
      )}
      {theme === THIRTY_ONE && (
        <FeaturedThirtyOne category={category} design={design} />
      )}
      {theme === THIRTY_THREE && (
        <FeaturedThirtyThree category={category} design={design} />
      )}
      {theme === THIRTY_FIVE && (
        <FeaturedThirtyFive category={category} design={design} />
      )}

      {theme === THIRTY_SIX && (
        <FeaturedThirtySix category={category} design={design} />
      )}

      {theme === THIRTY_SEVEN && (
        <FeaturedThirtySeven category={category} design={design} />
      )}
    </>
  );
};

export default FeaturedCategory;
