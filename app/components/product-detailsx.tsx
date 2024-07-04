"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
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

import DetailsFifteen from "./(product-details)/fifteen/details-fifteen";
import Fifteen from "./(product-details)/fifteen/fifteen";
import Sixteen from "./(product-details)/sixteen/sixteen";
import Seventeen from "./(product-details)/seventeen/seventeen";
import Eighteen from "./(product-details)/eighteen/eighteen";
import Nineteen from "./(product-details)/nineteen/nineteen";
import TwentyOne from "./(product-details)/twenty-one/twenty-one";
import TwentyTwo from "./(product-details)/twenty-two/twentytwo";
import TwentyFour from "./(product-details)/twenty-four/twenty-four";
import TwentyFive from "./(product-details)/twenty-five/twenty-five";
import TwentySix from "./(product-details)/twenty-six/twenty-six";
import TwentySeven from "./(product-details)/twenty-seven/twenty-seven";
import TwentyEight from "./(product-details)/twenty-eight/twenty-eight";
import TwentyNine from "./(product-details)/twenty-nine/twenty-nine";
import Thirty from "./(product-details)/thirty/thirty";
import ThirtyThree from "./(product-details)/thirty-three/thirty-three";
import ThirtyFour from "./(product-details)/thirty-four/thirty-four";
import ThirtyFive from "./(product-details)/thirty-five/thirty-five";
import ThirtySix from "./(product-details)/thirty-six/thirty-six";
import ThirtySeven from "./(product-details)/thirty-seven/thirty-seven";
import ThirtyEight from "./(product-details)/thirty-eight/thirty-eight";
import ThirtyNine from "./(product-details)/thirty-nine/thirty-nine";
import Forty from "./(product-details)/forty/forty";

export interface UpdateData {
  product_id: string;
  store_id: number;
  slug: string;
}

const ProductDetailsX = () => {
  const { productID: product_id, slug } = useParams<{
    productID: string;
    slug: string;
  }>();
  const { design, store_id } = useTheme();

  console.log({ product_id, slug, store_id }, "productID");

  const [updatedData, setUpdatedData] = useState<UpdateData>({
    product_id: "",
    store_id: 0,
    slug: "",
  });

  useEffect(() => {
    setUpdatedData({ product_id, store_id, slug });
  }, [product_id, store_id, slug]);

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
        <Seven updatedData={updatedData} data={{ product_id, slug }} />
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
        <TwentyOne data={{ product_id, slug }} />
      )}
      {design?.single_product_page === TWENTY_TWO && (
        <TwentyTwo data={{ product_id, slug }} />
      )}
      {design?.single_product_page === TWENTY_THREE && (
        <TwentyThree data={{ product_id, slug }} />
      )}
      {design?.single_product_page === TWENTY_FOUR && (
        <TwentyFour data={{ product_id, slug }} />
      )}
      {design?.single_product_page === TWENTY_FIVE && (
        <TwentyFive data={{ product_id, slug }} />
      )}
      {design?.single_product_page === TWENTY_SIX && (
        <TwentySix data={{ product_id, slug }} />
      )}
      {design?.single_product_page === TWENTY_SEVEN && (
        <TwentySeven data={{ product_id, slug }} />
      )}
      {design?.single_product_page === TWENTY_EIGHT && (
        <TwentyEight data={{ product_id, slug }} />
      )}
      {design?.single_product_page === TWENTY_NINE && (
        <TwentyNine data={{ product_id, slug }} />
      )}
      {design?.single_product_page === THIRTY && (
        <Thirty data={{ product_id, slug }} />
      )}
      {design?.single_product_page === THIRTY_THREE && (
        <ThirtyThree data={{ product_id, slug }} />
      )}
      {design?.single_product_page === THIRTY_FOUR && (
        <ThirtyFour data={{ product_id, slug }} />
      )}
      {design?.single_product_page === THIRTY_FIVE && (
        <ThirtyFive data={{ product_id, slug }} />
      )}
      {design?.single_product_page === THIRTY_SIX && (
        <ThirtySix data={{ product_id, slug }} />
      )}
      {design?.single_product_page === THIRTY_SEVEN && (
        <ThirtySeven data={{ product_id, slug }} />
      )}
      {design?.single_product_page === THIRTY_EIGHT && (
        <ThirtyEight data={{ product_id, slug }} />
      )}
      {design?.single_product_page === THIRTY_NINE && (
        <ThirtyNine data={{ product_id, slug }} />
      )}
      {design?.single_product_page === FORTY && (
        <Forty data={{ product_id, slug }} />
      )}
    </>
  );
};

export default ProductDetailsX;
