"use client";
import React from "react";
import Seven from "./(shops)/seven/seven";
import Eight from "./(shops)/eight/eight";
import One from "./(shops)/one/one";
import Two from "./(shops)/two/two";
import Three from "./(shops)/three/three";
import Four from "./(shops)/four/four";
import Five from "./(shops)/five/five";
import Six from "./(shops)/six/six";
import Nine from "./(shops)/nine/nine";
import Ten from "./(shops)/ten/ten";
import Twelve from "./(shops)/twelve/twelve";
import Thirteen from "./(shops)/thirteen/thirteen";
import Fourteen from "./(shops)/fourteen/fourteen";
import Sixteen from "./(shops)/sixteen/sixteen";
import Seventeen from "./(shops)/seventeen/seventeen";
import Eighteen from "./(shops)/eighteen/eighteen";
import Nineteen from "./(shops)/nineteen/nineteen";
import Twenty from "./(shops)/twenty/twenty";
import TwentyOne from "./(shops)/twenty-one/twenty-one";
import Twentytwo from "./(shops)/twentytwo/twenty-two";
import TwentyThree from "./(shops)/twenty-three/twenty-three";
import TwentyFour from "./(shops)/twenty-four/twenty-four";
import TwentyFive from "./(shops)/twenty-five/twenty-five";
import TwentySix from "./(shops)/twenty-six/twenty-six";
import TwentySeven from "./(shops)/twenty-seven/twenty-seven";
import TwentyEight from "./(shops)/twenty-eight/twenty-eight";
import TwentyNine from "./(shops)/twenty-nine/twenty-nine";
import Thirty from "./(shops)/thirty/thirty";
import ThirtyThree from "./(shops)/thirty-three/thirty-three";
import ThirtyFour from "./(shops)/thirty-four/thirty-four";
import ThirtyFive from "./(shops)/thirty-five/thirty-five";
import ThirtySix from "./(shops)/thirty-six/thirty-six";
import ThirtySeven from "./(shops)/thirty-seven/thirty-seven";
import ThirtyEight from "./(shops)/thirty-eight/thirty-eight";
import ThirtyNine from "./(shops)/thirty-nine/thirty-nine";
import Forty from "./(shops)/forty/forty";
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
