import HeroDefault from "@/components/(hero)/hero-default";
import HeroEight from "@/components/(hero)/hero-eight";
import HeroEighteen from "@/components/(hero)/hero-eighteen";
import HeroEleven from "@/components/(hero)/hero-eleven";
import HeroFive from "@/components/(hero)/hero-five";
import HeroFour from "@/components/(hero)/hero-four";
import HeroFourteen from "@/components/(hero)/hero-fourteen";
import HeroNine from "@/components/(hero)/hero-nine";
import HeroNineteen from "@/components/(hero)/hero-nineteen";
import HeroOne from "@/components/(hero)/hero-one";
import HeroSeven from "@/components/(hero)/hero-seven";
import HeroSeventeen from "@/components/(hero)/hero-seventeen";
import HeroSix from "@/components/(hero)/hero-six";
import HeroSixteen from "@/components/(hero)/hero-sixteen";
import HeroTen from "@/components/(hero)/hero-ten";
import HeroThirteen from "@/components/(hero)/hero-thirteen";
import HeroThirtyEight from "@/components/(hero)/hero-thirty-eight";
import HeroThirtyFive from "@/components/(hero)/hero-thirty-five";
import HeroThirtyFour from "@/components/(hero)/hero-thirty-four";
import HeroThirtyNine from "@/components/(hero)/hero-thirty-nine";
import HeroThirtyOne from "@/components/(hero)/hero-thirty-one";
import HeroThirtySeven from "@/components/(hero)/hero-thirty-seven";
import HeroThirtySix from "@/components/(hero)/hero-thirty-six";
import HeroThirtyThree from "@/components/(hero)/hero-thirty-three";
import HeroThree from "@/components/(hero)/hero-three";
import HeroThirty from "@/components/(hero)/hero-thrity";
import HeroTwentyTwo from "@/components/(hero)/hero-tweent-two";
import HeroTwentyOne from "@/components/(hero)/hero-tweenty";
import HeroTwelve from "@/components/(hero)/hero-twelve";
import HeroTwentyEight from "@/components/(hero)/hero-twenty-eight";
import HeroTwentyFive from "@/components/(hero)/hero-twenty-five";
import HeroTwentyFour from "@/components/(hero)/hero-twenty-four";
import HeroTwentyNine from "@/components/(hero)/hero-twenty-nine";
import HeroTwentySeven from "@/components/(hero)/hero-twenty-seven";
import HeroTwentySix from "@/components/(hero)/hero-twenty-six";
import HeroTwentyThree from "@/components/(hero)/hero-twenty-three";
import HeroTwo from "@/components/(hero)/hero-two";
import dynamic from "next/dynamic";
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
} from "@/app/consts";

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
