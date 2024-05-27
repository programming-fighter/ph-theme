"use client";
import HeaderDefault from "@/components/(headers)/header-default";
import HeaderOne from "./(headers)/header-one/header-one";
import HeaderTwo from "./(headers)/header-two/header-two";
import HeaderThree from "./(headers)/header-three/header-three";
import HeaderFour from "./(headers)/header-four/header-four";
import HeaderFive from "./(headers)/header-five/header-five";
import HeaderSix from "./(headers)/header-six/header-six";
import HeaderSeven from "./(headers)/header-seven/header-seven";
import HeaderEight from "./(headers)/header-eight/header-eight";
import HeaderNine from "./(headers)/header-nine/header-nine";
import HeaderTen from "./(headers)/header-ten/header-ten";
import HeaderEleven from "./(headers)/header-eleven/header-eleven";
import HeaderTwelve from "./(headers)/header-twelve/header-twelve";
import HeaderThirteen from "./(headers)/header-thirteen/header-thirteen";
import HeaderFourteen from "./(headers)/header-fourteen/header-fourteen";
import HeaderFifteen from "./(headers)/header-fifteen/header-fifteen";
import HeaderSixteen from "./(headers)/header-sixteen/header-sixteen";
import HeaderSeventeen from "./(headers)/header-seventeen/header-seventeen";
import HeaderEighteen from "./(headers)/header-eighteen/header-eighteen";
import HeaderNineteen from "./(headers)/header-nineteen/header-nineteen";
import HeaderTwenty from "./(headers)/header-twenty/header-twenty";
import HeaderTwentyOne from "./(headers)/header-twentyone/header-twentyone";
import HeaderTwentyTwo from "./(headers)/header-twentytwo/header-twentytwo";
import HeaderTwentyThree from "./(headers)/header-twentythree/header-twentythree";
import HeaderTwentyFour from "./(headers)/header-twentyfour/header-twentyfour";
import HeaderTwentyFive from "./(headers)/header-twentyfive/header-twentyfive";
import HeaderTwentySix from "./(headers)/header-twentysix/header-twentysix";
import HeaderTwentySeven from "./(headers)/header-twentyseven/header-twentyseven";
import HeaderTwentyEight from "./(headers)/header-twentyeight/header-twentyeight";
import HeaderTwentyNine from "./(headers)/header-twentynine/header-twentynine";
import HeaderThirty from "./(headers)/header-thirty/header-thirty";
import HeaderThirtyOne from "./(headers)/header-thirtyone/header-thirtyone";
import HeaderThirtyThree from "./(headers)/header-thirtythree/header-thirtythree";
import HeaderThirtyFour from "./(headers)/header-thirtyfour/header-thirtyfour";
import HeaderThirtyFive from "./(headers)/header-thirtyfive/header-thirtyfive";
import HeaderThirtySix from "./(headers)/header-thirtysix/header-thirtysix";
import HeaderThirtyEight from "./(headers)/header-thirtyeight/header-thirtyeight";
import HeaderThirtySeven from "./(headers)/header-thirtyseven/header-thirtyseven";
import HeaderThirtyNine from "./(headers)/header-thirtynine/header-thirtynine";
import HeaderForty from "./(headers)/header-forty/header-forty";
import useTheme from "../hooks/use-theme";

// test

const Header = () => {
  const { design } = useTheme();

  console.log(design, "design from header");

  return <p>Hello world</p>;

  // return (
  //   <>
  //     {design?.header === "default" && <HeaderDefault />}
  //     {design?.header === "one" && <HeaderOne />}
  //     {design?.header === "two" && <HeaderTwo />}
  //     {design?.header === "three" && <HeaderThree />}
  //     {design?.header === "four" && <HeaderFour />}
  //     {design?.header === "five" && <HeaderFive />}
  //     {design?.header === "six" && <HeaderSix />}
  //     {design?.header === "seven" && <HeaderSeven />}
  //     {design?.header === "eight" && <HeaderEight />}
  //     {design?.header === "nine" && <HeaderNine />}
  //     {design?.header === "ten" && <HeaderTen />}
  //     {design?.header === "eleven" && <HeaderEleven />}
  //     {design?.header === "twelve" && <HeaderTwelve />}
  //     {design?.header === "thirteen" && <HeaderThirteen />}
  //     {design?.header === "fourteen" && <HeaderFourteen />}
  //     {design?.header === "fifteen" && <HeaderFifteen />}
  //     {design?.header === "sixteen" && <HeaderSixteen />}
  //     {design?.header === "seventeen" && <HeaderSeventeen />}
  //     {design?.header === "eighteen" && <HeaderEighteen />}
  //     {design?.header === "nineteen" && <HeaderNineteen />}
  //     {design?.header === "twenty" && <HeaderTwenty />}
  //     {design?.header === "twentyone" && <HeaderTwentyOne />}
  //     {design?.header === "twentytwo" && <HeaderTwentyTwo />}
  //     {design?.header === "twentythree" && <HeaderTwentyThree />}
  //     {design?.header === "twentyfour" && <HeaderTwentyFour />}
  //     {design?.header === "twentyfive" && <HeaderTwentyFive />}
  //     {design?.header === "twentysix" && <HeaderTwentySix />}
  //     {design?.header === "twentyseven" && <HeaderTwentySeven />}
  //     {design?.header === "twentyeight" && <HeaderTwentyEight />}
  //     {design?.header === "twentynine" && <HeaderTwentyNine />}
  //     {design?.header === "thirty" && <HeaderThirty />}
  //     {design?.header === "thirtyone" && <HeaderThirtyOne />}
  //     {design?.header === "thirtythree" && <HeaderThirtyThree />}
  //     {design?.header === "thirtyfour" && <HeaderThirtyFour />}
  //     {design?.header === "thirtyfive" && <HeaderThirtyFive />}
  //     {design?.header === "thirtysix" && <HeaderThirtySix />}
  //     {design?.header === "thirtyseven" && <HeaderThirtySeven />}
  //     {design?.header === "thirtyeight" && <HeaderThirtyEight />}
  //     {design?.header === "thirtynine" && <HeaderThirtyNine />}
  //     {design?.header === "forty" && <HeaderForty />}
  //   </>
  // );
};

export default Header;
