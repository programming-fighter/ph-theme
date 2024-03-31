import dynamic from "next/dynamic";
import HeroDefault from "@/components/(hero)/hero-default";
import HeroOne from "@/components/(hero)/hero-one";
import HeroTwo from "@/components/(hero)/hero-two";
import HeroThree from "@/components/(hero)/hero-three";
import HeroFour from "./(hero)/hero-four";
import HeroFive from "./(hero)/hero-five";
import HeroSix from "./(hero)/hero-six";
import {
  EIGHT,
  EIGHTEEN,
  ELEVEN,
  FOURTEEN,
  NINE,
  NINETEEN,
  SEVEN,
  SEVENTEEN,
  SIXTEEN,
  TEN,
  THIRTEEN,
  TWELVE,
  TWENTY,
  TWENTY_ONE,
  TWENTY_THREE,
  TWENTY_TWO,
} from "../consts";
import HeroSeven from "./(hero)/hero-seven";
import HeroEight from "./(hero)/hero-eight";
import HeroNine from "./(hero)/hero-nine";
import HeroTen from "./(hero)/hero-ten";
import HeroEleven from "./(hero)/hero-eleven";
import HeroTwelve from "./(hero)/hero-twelve";
import HeroThirteen from "./(hero)/hero-thirteen";
import HeroFourteen from "./(hero)/hero-fourteen";
import HeroSixteen from "./(hero)/hero-sixteen";
import HeroSeventeen from "./(hero)/hero-seventeen";
import HeroEighteen from "./(hero)/hero-eighteen";
import HeroNineteen from "./(hero)/hero-nineteen";
import HeroTwentyOne from "./(hero)/hero-tweenty";
import HeroTwentyTwo from "./(hero)/hero-tweent-two";
import HeroTwentyThree from "./(hero)/hero-twenty-three";

const DynamicHeroDefault = dynamic(
  () => import("@/components/(hero)/hero-default"),
  {
    ssr: false,
    loading: () => <HeroDefault />,
  }
);

const DynamicHeroOne = dynamic(() => import("@/components/(hero)/hero-one"), {
  ssr: false,
  loading: () => <HeroOne />,
});

const Hero = ({ slider, theme, design }: any) => {
  console.log(design, "slider");
  return (
    <>
      {theme === "one" && <DynamicHeroOne slider={slider} />}
      {theme === "two" && <HeroTwo slider={slider} design={design} />}
      {theme === "three" && <HeroThree slider={slider} design={design} />}
      {theme === "four" && <HeroFour slider={slider} />}
      {theme === "five" && <HeroFive slider={slider} />}
      {theme === "six" && <HeroSix slider={slider} design={design} />}
      {theme === SEVEN && <HeroSeven slider={slider} design={design} />}
      {theme === EIGHT && <HeroEight slider={slider} />}
      {theme === NINE && <HeroNine slider={slider} design={design} />}
      {theme === TEN && <HeroTen slider={slider} design={design} />}
      {theme === ELEVEN && <HeroEleven slider={slider} design={design} />}
      {theme === TWELVE && <HeroTwelve slider={slider} design={design} />}
      {theme === THIRTEEN && <HeroThirteen slider={slider} />}
      {theme === FOURTEEN && <HeroFourteen slider={slider} design={design} />}
      {theme === SIXTEEN && <HeroSixteen slider={slider} design={design} />}
      {theme === SEVENTEEN && <HeroSeventeen slider={slider} design={design} />}
      {theme === EIGHTEEN && <HeroEighteen slider={slider} />}
      {theme === NINETEEN && <HeroNineteen slider={slider} design={design} />}
      {theme === TWENTY && <HeroTwentyOne slider={slider} design={design} />}
      {theme === TWENTY_ONE && (
        <HeroTwentyOne slider={slider} design={design} />
      )}
      {theme === TWENTY_TWO && (
        <HeroTwentyTwo slider={slider} design={design} />
      )}
      {theme === TWENTY_THREE && (
        <HeroTwentyThree slider={slider} design={design} />
      )}
      {theme === "default" && <DynamicHeroDefault slider={slider} />}
    </>
  );
};

export default Hero;
