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

// test

const Header = ({ theme }: any) => {
  return (
    <>
      {theme === "default" && <HeaderDefault />}
      {theme === "one" && <HeaderOne />}
      {theme === "two" && <HeaderTwo />}
      {theme === "three" && <HeaderThree />}
      {theme === "four" && <HeaderFour />}
      {theme === "five" && <HeaderFive />}
      {theme === "six" && <HeaderSix />}
      {theme === "seven" && <HeaderSeven />}
      {theme === "eight" && <HeaderEight />}
      {theme === "nine" && <HeaderNine />}
      {theme === "ten" && <HeaderTen />}
      {theme === "eleven" && <HeaderEleven />}
      {theme === "twelve" && <HeaderTwelve />}
      {theme === "thirteen" && <HeaderThirteen />}
      {theme === "fourteen" && <HeaderFourteen />}
      {theme === "fifteen" && <HeaderFifteen />}
      {theme === "sixteen" && <HeaderSixteen />}
      {theme === "seventeen" && <HeaderSeventeen />}
      {theme === "eighteen" && <HeaderEighteen />}
      {theme === "nineteen" && <HeaderNineteen />}
      {theme === "twenty" && <HeaderTwenty />}
      {theme === "twentyone" && <HeaderTwentyOne />}
      {theme === "twentytwo" && <HeaderTwentyTwo />}
      {theme === "twentythree" && <HeaderTwentyThree />}
      {theme === "twentyfour" && <HeaderTwentyFour />}
      {theme === "twentyfive" && <HeaderTwentyFive />}
      {theme === "twentysix" && <HeaderTwentySix />}
      {theme === "twentyseven" && <HeaderTwentySeven />}
      {theme === "twentyeight" && <HeaderTwentyEight />}
      {theme === "twentynine" && <HeaderTwentyNine />}
      {theme === "thirty" && <HeaderThirty />}
      {theme === "thirtyone" && <HeaderThirtyOne />}
      {theme === "thirtythree" && <HeaderThirtyThree />}
      {theme === "thirtyfour" && <HeaderThirtyFour />}
      {theme === "thirtyfive" && <HeaderThirtyFive />}
      {theme === "thirtysix" && <HeaderThirtySix />}
      {theme === "thirtyseven" && <HeaderThirtySeven />}
      {theme === "thirtyeight" && <HeaderThirtyEight />}
      {theme === "thirtynine" && <HeaderThirtyNine />}
      {theme === "forty" && <HeaderForty />}
    </>
  );
};

export default Header;
