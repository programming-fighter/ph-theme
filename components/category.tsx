"use client";
import React from "react";
import CategoryThree from "./_category-page/category/category-three";
import CategorySevenNew from "./_category-page/category/category-seven-new";
import useTheme from "@/hooks/use-theme";

const SubCategoryComponent = () => {
  const { design } = useTheme();
  return (
    <>
      {design?.shop_page === "seven" && <CategorySevenNew />}
      {design?.shop_page === "default" && <CategoryThree />}
    </>
  );
};

export default SubCategoryComponent;
