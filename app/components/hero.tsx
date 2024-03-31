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
  THIRTY,
  THIRTY_EIGHT,
  THIRTY_FIVE,
  THIRTY_FOUR,
  THIRTY_NINE,
  THIRTY_ONE,
  THIRTY_SEVEN,
  THIRTY_SIX,
  THIRTY_THREE,
  TWELVE,
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
import HeroTwentyFour from "./(hero)/hero-twenty-four";
import HeroTwentyFive from "./(hero)/hero-twenty-five";
import HeroTwentySix from "./(hero)/hero-twenty-six";
import HeroTwentySeven from "./(hero)/hero-twenty-seven";
import HeroTwentyEight from "./(hero)/hero-twenty-eight";
import HeroTwentyNine from "./(hero)/hero-twenty-nine";
import HeroThirty from "./(hero)/hero-thrity";
import HeroThirtyOne from "./(hero)/hero-thirty-one";
import HeroThirtyThree from "./(hero)/hero-thirty-three";
import HeroThirtyFour from "./(hero)/hero-thirty-four";
import HeroThirtyFive from "./(hero)/hero-thirty-five";
import HeroThirtySix from "./(hero)/hero-thirty-six";
import HeroThirtySeven from "./(hero)/hero-thirty-seven";
import HeroThirtyEight from "./(hero)/hero-thirty-eight";
import HeroThirtyNine from "./(hero)/hero-thirty-nine";

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
      {theme === TWENTY_FOUR && (
        <HeroTwentyFour slider={slider} design={design} />
      )}
      {theme === TWENTY_FIVE && (
        <HeroTwentyFive slider={slider} design={design} />
      )}
      {theme === TWENTY_SIX && (
        <HeroTwentySix slider={slider} design={design} />
      )}
      {theme === TWENTY_SEVEN && (
        <HeroTwentySeven slider={slider} design={design} />
      )}
      {theme === TWENTY_EIGHT && (
        <HeroTwentyEight slider={slider} design={design} />
      )}
      {theme === TWENTY_NINE && (
        <HeroTwentyNine slider={slider} design={design} />
      )}
      {theme === THIRTY && <HeroThirty slider={slider} design={design} />}
      {theme === THIRTY_ONE && (
        <HeroThirtyOne slider={slider} design={design} />
      )}
      {/* no thirty two */}
      {theme === THIRTY_THREE && (
        <HeroThirtyThree slider={slider} design={design} />
      )}
      {theme === THIRTY_FOUR && (
        <HeroThirtyFour slider={slider} design={design} />
      )}
      {theme === THIRTY_FIVE && <HeroThirtyFive slider={slider} />}
      {theme === THIRTY_SIX && (
        <HeroThirtySix slider={slider} design={design} />
      )}
      {theme === THIRTY_SEVEN && (
        <HeroThirtySeven slider={slider} design={design} />
      )}
      {theme === THIRTY_EIGHT && (
        <HeroThirtyEight slider={slider} design={design} />
      )}
        {theme === THIRTY_NINE && (
        <HeroThirtyNine slider={slider} design={design} />
      )}
      {theme === "default" && <DynamicHeroDefault slider={slider} />}
    </>
  );
};

export default Hero;
