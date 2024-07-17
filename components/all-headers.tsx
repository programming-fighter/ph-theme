import HeaderDefault from "@/components/headers/header-default";
import HeaderOne from "@/components/headers/header-one/header-one";
import HeaderTwo from "@/components/headers/header-two/header-two";
import HeaderThree from "@/components/headers/header-three/header-three";
import HeaderFour from "@/components/headers/header-four/header-four";
import HeaderFive from "@/components/headers/header-five/header-five";
import HeaderSix from "@/components/headers/header-six/header-six";
import HeaderSeven from "@/components/headers/header-seven/header-seven";
import HeaderEight from "@/components/headers/header-eight/header-eight";
import HeaderNine from "@/components/headers/header-nine/header-nine";
import HeaderTen from "@/components/headers/header-ten/header-ten";
import HeaderEleven from "@/components/headers/header-eleven/header-eleven";
import HeaderTwelve from "@/components/headers/header-twelve/header-twelve";
import HeaderThirteen from "@/components/headers/header-thirteen/header-thirteen";
import HeaderFourteen from "@/components/headers/header-fourteen/header-fourteen";
import HeaderSixteen from "@/components/headers/header-sixteen/header-sixteen";
import HeaderSeventeen from "@/components/headers/header-seventeen/header-seventeen";
import HeaderEighteen from "@/components/headers/header-eighteen/header-eighteen";
import HeaderNineteen from "@/components/headers/header-nineteen/header-nineteen";
import HeaderTwenty from "@/components/headers/header-twenty/header-twenty";
import HeaderTwentyOne from "@/components/headers/header-twentyone/header-twentyone";
import HeaderTwentyTwo from "@/components/headers/header-twentytwo/header-twentytwo";
import HeaderTwentyThree from "@/components/headers/header-twentythree/header-twentythree";
import HeaderTwentyFour from "@/components/headers/header-twentyfour/header-twentyfour";
import HeaderTwentyFive from "@/components/headers/header-twentyfive/header-twentyfive";
import HeaderTwentySix from "@/components/headers/header-twentysix/header-twentysix";
import HeaderTwentySeven from "@/components/headers/header-twentyseven/header-twentyseven";
import HeaderTwentyEight from "@/components/headers/header-twentyeight/header-twentyeight";
import HeaderTwentyNine from "@/components/headers/header-twentynine/header-twentynine";
import HeaderThirty from "@/components/headers/header-thirty/header-thirty";
import HeaderThirtyOne from "@/components/headers/header-thirtyone/header-thirtyone";
import HeaderThirtyThree from "@/components/headers/header-thirtythree/header-thirtythree";
import HeaderThirtyFour from "@/components/headers/header-thirtyfour/header-thirtyfour";
import HeaderThirtyFive from "@/components/headers/header-thirtyfive/header-thirtyfive";
import HeaderThirtySix from "@/components/headers/header-thirtysix/header-thirtysix";
import HeaderThirtyEight from "@/components/headers/header-thirtyeight/header-thirtyeight";
import HeaderThirtySeven from "@/components/headers/header-thirtyseven/header-thirtyseven";
import HeaderThirtyNine from "@/components/headers/header-thirtynine/header-thirtynine";
import HeaderForty from "@/components/headers/header-forty/header-forty";
import HeaderFifteen from "@/components/headers/header-fifteen/header-fifteen";

const AllHeaders = ({ design, headerSetting }: any) => {
  return (
    <>
      {design?.header === "default" && <HeaderDefault />}
      {design?.header === "one" && <HeaderOne />}
      {design?.header === "two" && <HeaderTwo />}
      {design?.header === "three" && <HeaderThree />}
      {design?.header === "four" && <HeaderFour />}
      {design?.header === "five" && <HeaderFive />}
      {design?.header === "six" && <HeaderSix />}
      {design?.header === "seven" && (
        <HeaderSeven design={design} headerSetting={headerSetting} />
      )}
      {design?.header === "eight" && <HeaderEight />}
      {design?.header === "nine" && <HeaderNine />}
      {design?.header === "ten" && <HeaderTen />}
      {design?.header === "eleven" && <HeaderEleven />}
      {design?.header === "twelve" && <HeaderTwelve />}
      {design?.header === "thirteen" && <HeaderThirteen />}
      {design?.header === "fourteen" && <HeaderFourteen />}
      {design?.header === "fifteen" && <HeaderFifteen />}
      {design?.header === "sixteen" && <HeaderSixteen />}
      {design?.header === "seventeen" && <HeaderSeventeen />}
      {design?.header === "eighteen" && <HeaderEighteen />}
      {design?.header === "nineteen" && <HeaderNineteen />}
      {design?.header === "twenty" && <HeaderTwenty />}
      {design?.header === "twentyone" && <HeaderTwentyOne />}
      {design?.header === "twentytwo" && <HeaderTwentyTwo />}
      {design?.header === "twentythree" && <HeaderTwentyThree />}
      {design?.header === "twentyfour" && <HeaderTwentyFour />}
      {design?.header === "twentyfive" && <HeaderTwentyFive />}
      {design?.header === "twentysix" && <HeaderTwentySix />}
      {design?.header === "twentyseven" && <HeaderTwentySeven />}
      {design?.header === "twentyeight" && <HeaderTwentyEight />}
      {design?.header === "twentynine" && <HeaderTwentyNine />}
      {design?.header === "thirty" && <HeaderThirty />}
      {design?.header === "thirtyone" && <HeaderThirtyOne />}
      {design?.header === "thirtythree" && <HeaderThirtyThree />}
      {design?.header === "thirtyfour" && <HeaderThirtyFour />}
      {design?.header === "thirtyfive" && <HeaderThirtyFive />}
      {design?.header === "thirtysix" && <HeaderThirtySix />}
      {design?.header === "thirtyseven" && <HeaderThirtySeven />}
      {design?.header === "thirtyeight" && <HeaderThirtyEight />}
      {design?.header === "thirtynine" && <HeaderThirtyNine />}
      {design?.header === "forty" && <HeaderForty />}
    </>
  );
};

export default AllHeaders;
