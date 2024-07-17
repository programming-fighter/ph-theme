"use client";
import React from "react";
import Seven from "@/components/_shop-page/shops/seven/seven";
import Eight from "@/components/_shop-page/shops/eight/eight";
import One from "@/components/_shop-page/shops/one/one";
import Two from "@/components/_shop-page/shops/two/two";
import Three from "@/components/_shop-page/shops/three/three";
import Four from "@/components/_shop-page/shops/four/four";
import Five from "@/components/_shop-page/shops/five/five";
import Six from "@/components/_shop-page/shops/six/six";
import Nine from "@/components/_shop-page/shops/nine/nine";
import Ten from "@/components/_shop-page/shops/ten/ten";
import Twelve from "@/components/_shop-page/shops/twelve/twelve";
import Thirteen from "@/components/_shop-page/shops/thirteen/thirteen";
import Fourteen from "@/components/_shop-page/shops/fourteen/fourteen";
import Sixteen from "@/components/_shop-page/shops/sixteen/sixteen";
import Seventeen from "@/components/_shop-page/shops/seventeen/seventeen";
import Eighteen from "@/components/_shop-page/shops/eighteen/eighteen";
import Nineteen from "@/components/_shop-page/shops/nineteen/nineteen";
import Twenty from "@/components/_shop-page/shops/twenty/twenty";
import TwentyOne from "@/components/_shop-page/shops/twenty-one/twenty-one";
import Twentytwo from "@/components/_shop-page/shops/twentytwo/twenty-two";
import TwentyThree from "@/components/_shop-page/shops/twenty-three/twenty-three";
import TwentyFour from "@/components/_shop-page/shops/twenty-four/twenty-four";
import TwentyFive from "@/components/_shop-page/shops/twenty-five/twenty-five";
import TwentySix from "@/components/_shop-page/shops/twenty-six/twenty-six";
import TwentySeven from "@/components/_shop-page/shops/twenty-seven/twenty-seven";
import TwentyEight from "@/components/_shop-page/shops/twenty-eight/twenty-eight";
import TwentyNine from "@/components/_shop-page/shops/twenty-nine/twenty-nine";
import Thirty from "@/components/_shop-page/shops/thirty/thirty";
import ThirtyThree from "@/components/_shop-page/shops/thirty-three/thirty-three";
import ThirtyFour from "@/components/_shop-page/shops/thirty-four/thirty-four";
import ThirtyFive from "@/components/_shop-page/shops/thirty-five/thirty-five";
import ThirtySix from "@/components/_shop-page/shops/thirty-six/thirty-six";
import ThirtySeven from "@/components/_shop-page/shops/thirty-seven/thirty-seven";
import ThirtyEight from "@/components/_shop-page/shops/thirty-eight/thirty-eight";
import ThirtyNine from "@/components/_shop-page/shops/thirty-nine/thirty-nine";
import Forty from "@/components/_shop-page/shops/forty/forty";
import useTheme from "@/hooks/use-theme";

const ShopComponent = () => {
  const { design } = useTheme();

  return (
    <>
      {design?.shop_page === "default" && <One data={{}} />}
      {design?.shop_page === "one" && <One data={{}} />}
      {design?.shop_page === "two" && <Two data={{}} />}
      {design?.shop_page === "three" && <Three data={{}} />}
      {design?.shop_page === "four" && <Four data={{}} />}
      {design?.shop_page === "five" && <Five data={{}} />}
      {design?.shop_page === "six" && <Six data={{}} />}
      {design?.shop_page === "seven" && <Seven data={{}} />}
      {design?.shop_page === "eight" && <Eight data={{}} />}
      {design?.shop_page === "nine" && <Nine data={{}} />}
      {design?.shop_page === "ten" && <Ten data={{}} />}
      {design?.shop_page === "eleven" && <Eight data={{}} />}
      {design?.shop_page === "twelve" && <Twelve data={{}} />}
      {design?.shop_page === "thirteen" && <Thirteen data={{}} />}
      {design?.shop_page === "fourteen" && <Fourteen data={{}} />}
      {design?.shop_page === "sixteen" && <Sixteen data={{}} />}
      {design?.shop_page === "seventeen" && <Seventeen data={{}} />}
      {design?.shop_page === "eighteen" && <Eighteen data={{}} />}
      {design?.shop_page === "nineteen" && <Nineteen data={{}} />}
      {design?.shop_page === "twenty" && <Twenty data={{}} />}
      {design?.shop_page === "twentyone" && <TwentyOne data={{}} />}
      {design?.shop_page === "twentytwo" && <Twentytwo data={{}} />}
      {design?.shop_page === "twentythree" && <TwentyThree data={{}} />}
      {design?.shop_page === "twentyfour" && <TwentyFour data={{}} />}
      {design?.shop_page === "twentyfive" && <TwentyFive data={{}} />}
      {design?.shop_page === "twentysix" && <TwentySix data={{}} />}
      {design?.shop_page === "twentyseven" && <TwentySeven data={{}} />}
      {design?.shop_page === "twentyeight" && <TwentyEight data={{}} />}
      {design?.shop_page === "twentynine" && <TwentyNine data={{}} />}
      {design?.shop_page === "thirty" && <Thirty data={{}} />}
      {design?.shop_page === "thirtyone" && <Thirty data={{}} />}
      {design?.shop_page === "thirtythree" && <ThirtyThree data={{}} />}
      {design?.shop_page === "thirtyfour" && <ThirtyFour data={{}} />}
      {design?.shop_page === "thirtyfive" && <ThirtyFive data={{}} />}
      {design?.shop_page === "thirtysix" && <ThirtySix data={{}} />}
      {design?.shop_page === "thirtyseven" && <ThirtySeven data={{}} />}
      {design?.shop_page === "thirtyeight" && <ThirtyEight data={{}} />}
      {design?.shop_page === "thirtynine" && <ThirtyNine data={{}} />}
      {design?.shop_page === "forty" && <Forty data={{}} />}
    </>
  );
};

export default ShopComponent;
