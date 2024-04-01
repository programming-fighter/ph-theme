"use client";
import DefaultFeaturedCategory from "@/components/(featured-category)/featured-default";
import FeaturedOne from "./(featured-category)/featuredcat-one";
import FeaturedTwo from "./(featured-category)/featuredcat-two";

const FeaturedCategory = ({ theme, category, design }: any) => {
  return (
    <>
      {theme === "default" && <DefaultFeaturedCategory category={category} />}
      {theme === "one" && <FeaturedOne category={category} design={design} />}
      {theme === "two" && <FeaturedTwo category={category} design={design} />}
    </>
  );
};

export default FeaturedCategory;
