import dynamic from "next/dynamic";

const DynamicHeroDefault = dynamic(
  () => import("@/components/(hero)/hero-default"),
  {
    ssr: false,
    loading: () => <HeroDefault />,
  }
);

import HeroDefault from "@/app/components/(hero)/hero-default";

const Hero = ({ slider }: any) => {
  return <DynamicHeroDefault slider={slider} />;
};

export default Hero;
