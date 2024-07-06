// "use client";
import React from "react";
import useTheme from "../hooks/use-theme";
import { useParams } from "next/navigation";
import CategorySeven from "./(category)/category-seven";
import CategoryThree from "./(category)/category-three";
import CategorySevenNew from "./(category)/category-seven-new";

const Category = ({ design, id, category }: any) => {
  return (
    <>
      {design?.shop_page === "seven" && (
        <CategorySevenNew data={id} category={category} />
      )}
      {design?.shop_page === "default" && <CategoryThree data={id} />}
    </>
  );
};

export default Category;
