"use client";
import {
  EIGHTEEN,
  FORTY,
  NINETEEN,
  SEVENTEEN,
  THIRTY,
  THIRTY_EIGHT,
  THIRTY_FIVE,
  THIRTY_NINE,
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

import DefaultFeaturedCategory from "./_homepage/featured-category/featured-default";
import FeaturedOne from "./_homepage/featured-category/featuredcat-one";
import FeaturedTwo from "./_homepage/featured-category/featuredcat-two";
import FeaturedThree from "./_homepage/featured-category/featuredcat-three";
import FeaturedFour from "./_homepage/featured-category/featuredcat-four";
import FeaturedSix from "./_homepage/featured-category/featuredcat-six";
import FeaturedSeven from "./_homepage/featured-category/featuredcat-seven";
import FeaturedEight from "./_homepage/featured-category/featurecat-eight";
import FeaturedEleven from "./_homepage/featured-category/featuredcat-eleven";
import FeaturedTwelve from "./_homepage/featured-category/featuredcat-twelve";

import FeaturedSixteen from "./_homepage/featured-category/featuredcat-sixteen";
import FeaturedSeventeen from "./_homepage/featured-category/featuredcat-seventeen";
import FeaturedEighteen from "./_homepage/featured-category/featuredcat-eighteen";
import FeaturedNineteen from "./_homepage/featured-category/featuredcat-nineteen";
import FeaturedTwenty from "./_homepage/featured-category/featuredcat-twenty";
import FeaturedTwentyOne from "./_homepage/featured-category/featuredcat-twentyone";
import FeaturedTwentyThree from "./_homepage/featured-category/featuredcat-twentythree";
import FeaturedTwentyFive from "./_homepage/featured-category/featuredcat-twentyfive";
import FeaturedTwentySix from "./_homepage/featured-category/featuredcat-twentysix";
import FeaturedTwentySeven from "./_homepage/featured-category/featuredcat-twentyseven";
import FeaturedTwentyEight from "./_homepage/featured-category/featuredcat-twenty-eight";
import FeaturedThirty from "./_homepage/featured-category/featuredcat-thirty";
import FeaturedThirtyOne from "./_homepage/featured-category/featured-thirtyone";
import FeaturedThirtyThree from "./_homepage/featured-category/featuredcat-thirtythree";
import FeaturedThirtyFive from "./_homepage/featured-category/featuredcat-thirtyfive";
import FeaturedThirtySix from "./_homepage/featured-category/featuredcat-thirtysix";
import FeaturedThirtySeven from "./_homepage/featured-category/featuredcat-thirtyseven";
import FeaturedThirtyEight from "./_homepage/featured-category/featuredcat-thirtyeight";
import FeaturedThirtyNine from "./_homepage/featured-category/featuredcat-thirtynine";
import FeaturedForty from "./_homepage/featured-category/featured-forty";

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
      {theme === THIRTY_EIGHT && (
        <FeaturedThirtyEight category={category} design={design} />
      )}
      {theme === THIRTY_NINE && (
        <FeaturedThirtyNine category={category} design={design} />
      )}
      {theme === "forty" && <FeaturedForty category={category} />}
    </>
  );
};

export default FeaturedCategory;
