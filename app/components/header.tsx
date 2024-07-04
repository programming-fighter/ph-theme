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

  console.log(design?.header, "header theme");

  return (
    <>
      {design?.header === "default" && <HeaderDefault />}
      {design?.header === "one" && <HeaderOne />}
      {design?.header === "two" && <HeaderTwo />}
      {design?.header === "three" && <HeaderThree />}
      {design?.header === "four" && <HeaderFour />}
      {design?.header === "five" && <HeaderFive />}
      {design?.header === "six" && <HeaderSix />}
      {design?.header === "seven" && <HeaderSeven />}
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

export default Header;

// import React, { Suspense, lazy } from "react";
// import useTheme from "../hooks/use-theme";

// // Lazy loading each header component
// const LazyHeaderDefault = lazy(
//   () => import("@/components/(headers)/header-default")
// );
// const LazyHeaderOne = lazy(() => import("./(headers)/header-one/header-one"));
// const LazyHeaderTwo = lazy(() => import("./(headers)/header-two/header-two"));
// const LazyHeaderThree = lazy(
//   () => import("./(headers)/header-three/header-three")
// );
// const LazyHeaderFour = lazy(
//   () => import("./(headers)/header-four/header-four")
// );
// const LazyHeaderFive = lazy(
//   () => import("./(headers)/header-five/header-five")
// );
// const LazyHeaderSix = lazy(() => import("./(headers)/header-six/header-six"));
// const LazyHeaderSeven = lazy(
//   () => import("./(headers)/header-seven/header-seven")
// );
// const LazyHeaderEight = lazy(
//   () => import("./(headers)/header-eight/header-eight")
// );
// const LazyHeaderNine = lazy(
//   () => import("./(headers)/header-nine/header-nine")
// );
// const LazyHeaderTen = lazy(() => import("./(headers)/header-ten/header-ten"));
// const LazyHeaderEleven = lazy(
//   () => import("./(headers)/header-eleven/header-eleven")
// );
// const LazyHeaderTwelve = lazy(
//   () => import("./(headers)/header-twelve/header-twelve")
// );
// const LazyHeaderThirteen = lazy(
//   () => import("./(headers)/header-thirteen/header-thirteen")
// );
// const LazyHeaderFourteen = lazy(
//   () => import("./(headers)/header-fourteen/header-fourteen")
// );
// const LazyHeaderFifteen = lazy(
//   () => import("./(headers)/header-fifteen/header-fifteen")
// );
// const LazyHeaderSixteen = lazy(
//   () => import("./(headers)/header-sixteen/header-sixteen")
// );
// const LazyHeaderSeventeen = lazy(
//   () => import("./(headers)/header-seventeen/header-seventeen")
// );
// const LazyHeaderEighteen = lazy(
//   () => import("./(headers)/header-eighteen/header-eighteen")
// );
// const LazyHeaderNineteen = lazy(
//   () => import("./(headers)/header-nineteen/header-nineteen")
// );
// const LazyHeaderTwenty = lazy(
//   () => import("./(headers)/header-twenty/header-twenty")
// );
// const LazyHeaderTwentyOne = lazy(
//   () => import("./(headers)/header-twentyone/header-twentyone")
// );
// const LazyHeaderTwentyTwo = lazy(
//   () => import("./(headers)/header-twentytwo/header-twentytwo")
// );
// const LazyHeaderTwentyThree = lazy(
//   () => import("./(headers)/header-twentythree/header-twentythree")
// );
// const LazyHeaderTwentyFour = lazy(
//   () => import("./(headers)/header-twentyfour/header-twentyfour")
// );
// const LazyHeaderTwentyFive = lazy(
//   () => import("./(headers)/header-twentyfive/header-twentyfive")
// );
// const LazyHeaderTwentySix = lazy(
//   () => import("./(headers)/header-twentysix/header-twentysix")
// );
// const LazyHeaderTwentySeven = lazy(
//   () => import("./(headers)/header-twentyseven/header-twentyseven")
// );
// const LazyHeaderTwentyEight = lazy(
//   () => import("./(headers)/header-twentyeight/header-twentyeight")
// );
// const LazyHeaderTwentyNine = lazy(
//   () => import("./(headers)/header-twentynine/header-twentynine")
// );
// const LazyHeaderThirty = lazy(
//   () => import("./(headers)/header-thirty/header-thirty")
// );
// const LazyHeaderThirtyOne = lazy(
//   () => import("./(headers)/header-thirtyone/header-thirtyone")
// );
// const LazyHeaderThirtyThree = lazy(
//   () => import("./(headers)/header-thirtythree/header-thirtythree")
// );
// const LazyHeaderThirtyFour = lazy(
//   () => import("./(headers)/header-thirtyfour/header-thirtyfour")
// );
// const LazyHeaderThirtyFive = lazy(
//   () => import("./(headers)/header-thirtyfive/header-thirtyfive")
// );
// const LazyHeaderThirtySix = lazy(
//   () => import("./(headers)/header-thirtysix/header-thirtysix")
// );
// const LazyHeaderThirtyEight = lazy(
//   () => import("./(headers)/header-thirtyeight/header-thirtyeight")
// );
// const LazyHeaderThirtySeven = lazy(
//   () => import("./(headers)/header-thirtyseven/header-thirtyseven")
// );
// const LazyHeaderThirtyNine = lazy(
//   () => import("./(headers)/header-thirtynine/header-thirtynine")
// );
// const LazyHeaderForty = lazy(
//   () => import("./(headers)/header-forty/header-forty")
// );

// const Header = () => {
//   const { design } = useTheme();

//   const renderHeaderComponent = () => {
//     switch (design?.header) {
//       case "default":
//         return <LazyHeaderDefault />;
//       case "one":
//         return <LazyHeaderOne />;
//       case "two":
//         return <LazyHeaderTwo />;
//       case "three":
//         return <LazyHeaderThree />;
//       case "four":
//         return <LazyHeaderFour />;
//       case "five":
//         return <LazyHeaderFive />;
//       case "six":
//         return <LazyHeaderSix />;
//       case "seven":
//         return <LazyHeaderSeven />;
//       case "eight":
//         return <LazyHeaderEight />;
//       case "nine":
//         return <LazyHeaderNine />;
//       case "ten":
//         return <LazyHeaderTen />;
//       case "eleven":
//         return <LazyHeaderEleven />;
//       case "twelve":
//         return <LazyHeaderTwelve />;
//       case "thirteen":
//         return <LazyHeaderThirteen />;
//       case "fourteen":
//         return <LazyHeaderFourteen />;
//       case "fifteen":
//         return <LazyHeaderFifteen />;
//       case "sixteen":
//         return <LazyHeaderSixteen />;
//       case "seventeen":
//         return <LazyHeaderSeventeen />;
//       case "eighteen":
//         return <LazyHeaderEighteen />;
//       case "nineteen":
//         return <LazyHeaderNineteen />;
//       case "twenty":
//         return <LazyHeaderTwenty />;
//       case "twentyone":
//         return <LazyHeaderTwentyOne />;
//       case "twentytwo":
//         return <LazyHeaderTwentyTwo />;
//       case "twentythree":
//         return <LazyHeaderTwentyThree />;
//       case "twentyfour":
//         return <LazyHeaderTwentyFour />;
//       case "twentyfive":
//         return <LazyHeaderTwentyFive />;
//       case "twentysix":
//         return <LazyHeaderTwentySix />;
//       case "twentyseven":
//         return <LazyHeaderTwentySeven />;
//       case "twentyeight":
//         return <LazyHeaderTwentyEight />;
//       case "twentynine":
//         return <LazyHeaderTwentyNine />;
//       case "thirty":
//         return <LazyHeaderThirty />;
//       case "thirtyone":
//         return <LazyHeaderThirtyOne />;
//       case "thirtythree":
//         return <LazyHeaderThirtyThree />;
//       case "thirtyfour":
//         return <LazyHeaderThirtyFour />;
//       case "thirtyfive":
//         return <LazyHeaderThirtyFive />;
//       case "thirtysix":
//         return <LazyHeaderThirtySix />;
//       case "thirtyseven":
//         return <LazyHeaderThirtySeven />;
//       case "thirtyeight":
//         return <LazyHeaderThirtyEight />;
//       case "thirtynine":
//         return <LazyHeaderThirtyNine />;
//       case "forty":
//         return <LazyHeaderForty />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       {renderHeaderComponent()}
//     </Suspense>
//   );
// };

// export default Header;

// "use client";
// import React, { Suspense, lazy } from "react";
// import useTheme from "../hooks/use-theme";

// // Lazy load header components
// const componentsMap: any = {
//   default: lazy(() => import("@/components/(headers)/header-default")),
//   one: lazy(() => import("./(headers)/header-one/header-one")),
//   two: lazy(() => import("./(headers)/header-two/header-two")),
//   three: lazy(() => import("./(headers)/header-three/header-three")),
//   four: lazy(() => import("./(headers)/header-four/header-four")),
//   five: lazy(() => import("./(headers)/header-five/header-five")),
//   six: lazy(() => import("./(headers)/header-six/header-six")),
//   seven: lazy(() => import("./(headers)/header-seven/header-seven")),
//   eight: lazy(() => import("./(headers)/header-eight/header-eight")),
//   nine: lazy(() => import("./(headers)/header-nine/header-nine")),
//   ten: lazy(() => import("./(headers)/header-ten/header-ten")),
//   eleven: lazy(() => import("./(headers)/header-eleven/header-eleven")),
//   twelve: lazy(() => import("./(headers)/header-twelve/header-twelve")),
//   thirteen: lazy(() => import("./(headers)/header-thirteen/header-thirteen")),
//   fourteen: lazy(() => import("./(headers)/header-fourteen/header-fourteen")),
//   fifteen: lazy(() => import("./(headers)/header-fifteen/header-fifteen")),
//   sixteen: lazy(() => import("./(headers)/header-sixteen/header-sixteen")),
//   seventeen: lazy(
//     () => import("./(headers)/header-seventeen/header-seventeen")
//   ),
//   eighteen: lazy(() => import("./(headers)/header-eighteen/header-eighteen")),
//   nineteen: lazy(() => import("./(headers)/header-nineteen/header-nineteen")),
//   twenty: lazy(() => import("./(headers)/header-twenty/header-twenty")),
//   twentyone: lazy(
//     () => import("./(headers)/header-twentyone/header-twentyone")
//   ),
//   twentytwo: lazy(
//     () => import("./(headers)/header-twentytwo/header-twentytwo")
//   ),
//   twentythree: lazy(
//     () => import("./(headers)/header-twentythree/header-twentythree")
//   ),
//   twentyfour: lazy(
//     () => import("./(headers)/header-twentyfour/header-twentyfour")
//   ),
//   twentyfive: lazy(
//     () => import("./(headers)/header-twentyfive/header-twentyfive")
//   ),
//   twentysix: lazy(
//     () => import("./(headers)/header-twentysix/header-twentysix")
//   ),
//   twentyseven: lazy(
//     () => import("./(headers)/header-twentyseven/header-twentyseven")
//   ),
//   twentyeight: lazy(
//     () => import("./(headers)/header-twentyeight/header-twentyeight")
//   ),
//   twentynine: lazy(
//     () => import("./(headers)/header-twentynine/header-twentynine")
//   ),
//   thirty: lazy(() => import("./(headers)/header-thirty/header-thirty")),
//   thirtyone: lazy(
//     () => import("./(headers)/header-thirtyone/header-thirtyone")
//   ),
//   thirtythree: lazy(
//     () => import("./(headers)/header-thirtythree/header-thirtythree")
//   ),
//   thirtyfour: lazy(
//     () => import("./(headers)/header-thirtyfour/header-thirtyfour")
//   ),
//   thirtyfive: lazy(
//     () => import("./(headers)/header-thirtyfive/header-thirtyfive")
//   ),
//   thirtysix: lazy(
//     () => import("./(headers)/header-thirtysix/header-thirtysix")
//   ),
//   thirtyseven: lazy(
//     () => import("./(headers)/header-thirtyseven/header-thirtyseven")
//   ),
//   thirtyeight: lazy(
//     () => import("./(headers)/header-thirtyeight/header-thirtyeight")
//   ),
//   thirtynine: lazy(
//     () => import("./(headers)/header-thirtynine/header-thirtynine")
//   ),
//   forty: lazy(() => import("./(headers)/header-forty/header-forty")),
// };

// const Header = () => {
//   const { design } = useTheme();

//   const RenderComponent = componentsMap[design?.header] || null;

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       {RenderComponent && <RenderComponent />}
//     </Suspense>
//   );
// };

// export default Header;
