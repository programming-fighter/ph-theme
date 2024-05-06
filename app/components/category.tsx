"use client";
import React from "react";
import useTheme from "../hooks/use-theme";
import { useParams } from "next/navigation";
import CategorySeven from "./(category)/category-seven";

const Category: React.FC = () => {
  const { design } = useTheme();
  const { id } = useParams();

  return <CategorySeven data={id} />;
};

export default Category;
