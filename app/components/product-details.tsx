"use client";
import { useParams } from "next/navigation";
import React from "react";
import Seven from "./(product-details)/seven/seven";
import Three from "./(product-details)/three/three";
import Fourteen from "./(product-details)/fourteen/fourteen";
import Twenty from "./(product-details)/twenty/twenty";
import TwentyThree from "./(product-details)/twenty-three/twentythree";
import One from "./(product-details)/one/one";
import Two from "./(product-details)/two/two";
import Four from "./(product-details)/four/four";
import Five from "./(product-details)/five/five";
import Six from "./(product-details)/six/six";
import Eight from "./(product-details)/eight/eight";
import Nine from "./(product-details)/nine/nine";
import Ten from "./(product-details)/ten/ten";
import Eleven from "./(product-details)/eleven/eleven";
import Twelve from "./(product-details)/twelve/twelve";
import useTheme from "../hooks/use-theme";
import {
  EIGHTEEN,
  FIFTEEN,
  FORTY,
  FOURTEEN,
  NINETEEN,
  SEVENTEEN,
  SIXTEEN,
  THIRTEEN,
  THIRTY,
  THIRTY_EIGHT,
  THIRTY_FIVE,
  THIRTY_FOUR,
  THIRTY_NINE,
  THIRTY_ONE,
  THIRTY_SEVEN,
  THIRTY_SIX,
  THIRTY_THREE,
  THIRTY_TWO,
  TWENTY,
  TWENTY_EIGHT,
  TWENTY_FIVE,
  TWENTY_FOUR,
  TWENTY_NINE,
  TWENTY_ONE,
  TWENTY_SEVEN,
  TWENTY_SIX,
  TWENTY_THREE,
  TWENTY_TWO,
} from "../consts";
import Thirteen from "./(product-details)/thirteen/thirteen";
import Details from "./(product-details)/three/details";
import DetailsFifteen from "./(product-details)/fifteen/details-fifteen";
import Fifteen from "./(product-details)/fifteen/fifteen";
import Sixteen from "./(product-details)/sixteen/sixteen";
import Seventeen from "./(product-details)/seventeen/seventeen";
import Eighteen from "./(product-details)/eighteen/eighteen";
import Nineteen from "./(product-details)/nineteen/nineteen";

const ProductDetails = () => {
  const { productID: product_id, slug } = useParams();
  const { design } = useTheme();

  console.log("design", design?.single_product_page);

  return (
    <>
      {design?.single_product_page === "one" && (
        <One data={{ product_id, slug }} />
      )}
      {design?.single_product_page === "two" && (
        <Two data={{ product_id, slug }} />
      )}
      {design?.single_product_page === "three" && (
        <Three data={{ product_id, slug }} />
      )}
      {design?.single_product_page === "four" && (
        <Four data={{ product_id, slug }} />
      )}
      {design?.single_product_page === "five" && (
        <Five data={{ product_id, slug }} />
      )}
      {design?.single_product_page === "six" && (
        <Six data={{ product_id, slug }} />
      )}
      {design?.single_product_page === "seven" && (
        <Seven data={{ product_id, slug }} />
      )}
      {design?.single_product_page === "eight" && (
        <Eight data={{ product_id, slug }} />
      )}
      {design?.single_product_page === "nine" && (
        <Nine data={{ product_id, slug }} />
      )}
      {design?.single_product_page === "ten" && (
        <Ten data={{ product_id, slug }} />
      )}
      {design?.single_product_page === "eleven" && (
        <Eleven data={{ product_id, slug }} />
      )}
      {design?.single_product_page === "twelve" && (
        <Twelve data={{ product_id, slug }} />
      )}
      {design?.single_product_page === THIRTEEN && (
        <Thirteen data={{ product_id, slug }} />
      )}
      {design?.single_product_page === FOURTEEN && (
        <Fourteen data={{ product_id, slug }} />
      )}
      {design?.single_product_page === FIFTEEN && (
        <Fifteen data={{ product_id, slug }} />
      )}
      {design?.single_product_page === SIXTEEN && (
        <Sixteen data={{ product_id, slug }} />
      )}
      {design?.single_product_page === SEVENTEEN && (
        <Seventeen data={{ product_id, slug }} />
      )}
      {design?.single_product_page === EIGHTEEN && (
        <Eighteen data={{ product_id, slug }} />
      )}
      {design?.single_product_page === NINETEEN && (
        <Nineteen data={{ product_id, slug }} />
      )}
      {design?.single_product_page === TWENTY && (
        <Twenty data={{ product_id, slug }} />
      )}
      {design?.single_product_page === TWENTY_ONE && (
        <Nine data={{ product_id, slug }} />
      )}
      {design?.single_product_page === TWENTY_TWO && (
        <Ten data={{ product_id, slug }} />
      )}
      {design?.single_product_page === TWENTY_THREE && (
        <TwentyThree data={{ product_id, slug }} />
      )}
      {design?.single_product_page === TWENTY_FOUR && (
        <Twelve data={{ product_id, slug }} />
      )}
      {design?.single_product_page === TWENTY_FIVE && (
        <One data={{ product_id, slug }} />
      )}
      {design?.single_product_page === TWENTY_SIX && (
        <Two data={{ product_id, slug }} />
      )}
      {design?.single_product_page === TWENTY_SEVEN && (
        <Three data={{ product_id, slug }} />
      )}
      {design?.single_product_page === TWENTY_EIGHT && (
        <Four data={{ product_id, slug }} />
      )}
      {design?.single_product_page === TWENTY_NINE && (
        <Five data={{ product_id, slug }} />
      )}
      {design?.single_product_page === THIRTY && (
        <Six data={{ product_id, slug }} />
      )}
      {design?.single_product_page === THIRTY_ONE && (
        <Seven data={{ product_id, slug }} />
      )}
      {design?.single_product_page === THIRTY_TWO && (
        <Eight data={{ product_id, slug }} />
      )}
      {design?.single_product_page === THIRTY_THREE && (
        <Nine data={{ product_id, slug }} />
      )}
      {design?.single_product_page === THIRTY_FOUR && (
        <Ten data={{ product_id, slug }} />
      )}
      {design?.single_product_page === THIRTY_FIVE && (
        <Eleven data={{ product_id, slug }} />
      )}
      {design?.single_product_page === THIRTY_SIX && (
        <Twelve data={{ product_id, slug }} />
      )}
      {design?.single_product_page === THIRTY_SEVEN && (
        <One data={{ product_id, slug }} />
      )}
      {design?.single_product_page === THIRTY_EIGHT && (
        <Two data={{ product_id, slug }} />
      )}
      {design?.single_product_page === THIRTY_NINE && (
        <Three data={{ product_id, slug }} />
      )}
      {design?.single_product_page === FORTY && (
        <Four data={{ product_id, slug }} />
      )}
    </>
  );
};

export default ProductDetails;
