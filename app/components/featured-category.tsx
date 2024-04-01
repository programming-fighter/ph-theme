"use client";
import dynamic from "next/dynamic";
import DefaultFeaturedCategory from "@/components/(featured-category)/featured-default";
import FeaturedOne from "./(featured-category)/featuredcat-one";
import FeaturedTwo from "./(featured-category)/featuredcat-two";
import FeaturedThree from "./(featured-category)/featuredcat-three";
import FeaturedFour from "./(featured-category)/featuredcat-four";
import FeaturedSix from "./(featured-category)/featuredcat-six";
import FeaturedSeven from "./(featured-category)/featuredcat-seven";
// const DynamicFeaturedSix = dynamic(
//   () => import("./(featured-category)/featuredcat-six")
// );
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
    </>
  );
};

export default FeaturedCategory;
