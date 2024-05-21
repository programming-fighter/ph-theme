"use client";
import React from "react";
import useTheme from "../hooks/use-theme";
import { useParams } from "next/navigation";
import CategorySeven from "./(category)/category-seven";
import CategoryThree from "./(category)/category-three";

const Category: React.FC = () => {
  const { design } = useTheme();
  const { id } = useParams();

  return (
    <>
      {design?.shop_page === "seven" ? (
        <CategorySeven data={id} />
      ) : (
        <CategoryThree data={id} />
      )}
    </>
  );
};

export default Category;
