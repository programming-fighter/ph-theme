import dynamic from "next/dynamic";
import HeroDefault from "@/components/(hero)/hero-default";
import HeroOne from "@/components/(hero)/hero-one";
import HeroTwo from "@/components/(hero)/hero-two";
import HeroThree from "@/components/(hero)/hero-three";
import HeroFour from "./(hero)/hero-four";
import HeroFive from "./(hero)/hero-five";

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
  console.log(slider, "slider");
  return (
    <>
      {theme === "one" && <DynamicHeroOne slider={slider} />}
      {theme === "two" && <HeroTwo slider={slider} design={design} />}
      {theme === "three" && <HeroThree slider={slider} design={design} />}
      {theme === "four" && <HeroFour slider={slider} />}
      {theme === "five" && <HeroFive slider={slider} />}
      {theme === "default" && <DynamicHeroDefault slider={slider} />}
    </>
  );
};

export default Hero;
