// "use client";
import React from "react";
import CategoryThree from "./_category-page/category/category-three";
import CategorySevenNew from "./_category-page/category/category-seven-new";
import getUrl from "@/utils/get-url";
import { getSubdomainName } from "@/lib";
import CategoryEight from "./_category-page/category/category-eight";
import CategoryNine from "./_category-page/category/category-nine";
import CategoryTen from "./_category-page/category/category-ten";
import CategoryEleven from "./_category-page/category/category-eleven";
import CategoryTwelve from "./_category-page/category/category-twelve";
import CategoryThirteen from "./_category-page/category/category-thirteen";
import CategoryFourteen from "./_category-page/category/category-fourteen";
import CategorySixteen from "./_category-page/category/category-sixteen";
import CategorySeventeen from "./_category-page/category/category-seventeen";
import CategoryEighteen from "./_category-page/category/category-eighteen";
import CategoryNineteen from "./_category-page/category/category-nineteen";

const SubCategoryComponent = async () => {
  const url = getUrl();
  const {
    design: { shop_page },
  } = await getSubdomainName(url, "design");

  return <CategoryNineteen />;
  return (
    <>
      {shop_page === "seven" && <CategorySevenNew />}
      {shop_page === "eight" && <CategoryEight />}
      {shop_page === "nine" && <CategoryNine />}
      {shop_page === "ten" && <CategoryTen />}
      {shop_page === "eleven" && <CategoryEleven />}
      {shop_page === "twelve" && <CategoryTwelve />}
      {shop_page === "thirteen" && <CategoryThirteen />}
      {shop_page === "fourteen" && <CategoryFourteen />}
      {shop_page === "sixteen" && <CategorySixteen />}
      {shop_page === "seventeen" && <CategorySeventeen />}
      {shop_page === "eighteen" && <CategoryEighteen />}
      {shop_page === "nineteen" && <CategoryNineteen />}
    </>
  );
};

export default SubCategoryComponent;
