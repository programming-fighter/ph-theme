"use client";
import DefaultFeaturedCategory from "@/components/(featured-category)/featured-default";
import FeaturedOne from "./(featured-category)/featuredcat-one";
import FeaturedTwo from "./(featured-category)/featuredcat-two";
import FeaturedThree from "./(featured-category)/featuredcat-three";

const FeaturedCategory = ({
  theme,
  category,
  design,
  store_id,
  product,
}: any) => {
  console.log(theme, "theme from featured category");
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
    </>
  );
};

export default FeaturedCategory;
