"use client";
import DefaultPromo from "@/components/(promotions)/promo-default";
import PromoOne from "./(promotions)/promo-one";
import PromoTwo from "./(promotions)/promo-two";
import PromoThree from "./(promotions)/promo-three";
import PromoFour from "./(promotions)/promo-four";
import PromoFive from "./(promotions)/promo-five";
import PromoSix from "./(promotions)/promo-six";
import PromoSeven from "./(promotions)/promo-seven";
import PromoTen from "./(promotions)/promo-ten";
import { EIGHT, ELEVEN, NINE, TWELVE } from "../consts";
import PromoEight from "./(promotions)/promo-eight";
import PromoNine from "./(promotions)/promo-nine";
import PromoEleven from "./(promotions)/promo-eleven";
import PromoTwelve from "./(promotions)/promo-twelve";

const Promo = ({ banner, theme, design }: any) => {
  return (
    <>
      {theme === "default" && <DefaultPromo banner={banner} />}
      {theme === "one" && <PromoOne banner={banner} />}
      {theme === "two" && <PromoTwo banner={banner} />}
      {theme === "three" && <PromoThree banner={banner} />}
      {theme === "four" && <PromoFour design={design} banner={banner} />}
      {theme === "five" && <PromoFive banner={banner} />}
      {theme === "six" && <PromoSix banner={banner} />}
      {theme === "seven" && <PromoSeven banner={banner} />}
      {theme === EIGHT && <PromoEight banner={banner} />}
      {theme === NINE && <PromoNine banner={banner} />}
      {theme === "ten" && <PromoTen banner={banner} />}
      {theme === ELEVEN && <PromoEleven design={design} banner={banner} />}
      {theme === TWELVE && <PromoTwelve banner={banner} />}
    </>
  );
};

export default Promo;
