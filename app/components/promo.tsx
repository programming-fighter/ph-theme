import React from "react";
import DefaultPromo from "@/components/(promotions)/promo-default";
import PromoOne from "./(promotions)/promo-one";
import PromoTwo from "./(promotions)/promo-two";
import PromoThree from "./(promotions)/promo-three";

const Promo = ({ banner, theme }: any) => {
  return (
    <>
      {theme === "default" && <DefaultPromo banner={banner} />}
      {theme === "one" && <PromoOne banner={banner} />}
      {theme === "two" && <PromoTwo banner={banner} />}
      {theme === "three" && <PromoThree banner={banner} />}
    </>
  );
};

export default Promo;
