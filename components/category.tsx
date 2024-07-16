"use client";
import React from "react";
import CategoryThree from "./(category)/category-three";
import CategorySevenNew from "./(category)/category-seven-new";
import useTheme from "../app/hooks/use-theme";

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
