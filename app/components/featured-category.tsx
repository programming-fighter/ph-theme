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
import { EIGHTEEN, SEVENTEEN, TWELVE } from "../consts";
import FeaturedSixteen from "./(featured-category)/featuredcat-sixteen";
import FeaturedSeventeen from "./(featured-category)/featuredcat-seventeen";
import FeaturedEighteen from "./(featured-category)/featuredcat-eighteen";

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
    </>
  );
};

export default FeaturedCategory;
