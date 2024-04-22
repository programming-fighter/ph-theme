import React from "react";
import FooterDefault from "./(footers)/footer-default";
import dynamic from "next/dynamic";
import FooterOne from "./(footers)/footer-one";
import FooterTwo from "./(footers)/footer-two";
import FooterThree from "./(footers)/footer-three";
import FooterFour from "./(footers)/footer-four";
import FooterFive from "./(footers)/footer-five";
import FooterSix from "./(footers)/footer-six";
import FooterSeven from "./(footers)/footer-seven";
import FooterEight from "./(footers)/footer-eight";
import FooterNine from "./(footers)/footer-nine";
import FooterEleven from "./(footers)/footer-eleven";
import FooterTwelve from "./(footers)/footer-twelve";
import {
  EIGHTEEN,
  FOURTEEN,
  NINETEEN,
  SEVENTEEN,
  SIXTEEN,
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
import FooterThirteen from "./(footers)/footer-thirteen";
import FooterFourteen from "./(footers)/footer-fourteen";
import FooterSixteen from "./(footers)/footer-sixteen";
import FooterSeventeen from "./(footers)/footer-seventeen";
import FooterEighteen from "./(footers)/footer-eighteen";
import FooterNineteen from "./(footers)/footer-nineteen";
import FooterTwenty from "./(footers)/footer-twenty";
import FooterTwentyOne from "./(footers)/footer-twentyone";
import FooterTwentyTwo from "./(footers)/footer-twentytwo";
import FooterTwentyThree from "./(footers)/footer-twentythree";
import FooterTwentyFour from "./(footers)/footer-twentyfour";
import FooterTwentyFive from "./(footers)/footer-twentyfive";
import FooterTwentySix from "./(footers)/footer-twentysix";
import FooterTwentySeven from "./(footers)/footer-twentyseven";
import FooterTwentyNine from "./(footers)/footer-twentynine";
import FooterThirty from "./(footers)/footer-thirty";
import FooterThirtyFour from "./(footers)/footer-thirtyfour";
import FooterThirtyFive from "./(footers)/footer-thirtyfive";
import FooterThirtySix from "./(footers)/footer-thirtysix";
import FooterThirtySeven from "./(footers)/footer-thirtyseven";
import FooterForty from "./(footers)/footer-forty";
const DynamicFooterDefault = dynamic(
  () => import("@/components/(footers)/footer-default"),
  {
    ssr: false,
  }
);
const DynamicFooterFive = dynamic(
  () => import("@/components/(footers)/footer-five"),
  {
    ssr: false,
  }
);

const DynamicFooterNine = dynamic(
  () => import("@/components/(footers)/footer-nine"),
  {
    ssr: false,
  }
);
const DynamicFooterTwelve = dynamic(
  () => import("@/components/(footers)/footer-twelve"),
  {
    ssr: false,
  }
);
const DynamicFooterTwentyFour = dynamic(
  () => import("@/components/(footers)/footer-twentyfour"),
  {
    ssr: false,
  }
);

const DynamicFooterThirtyEight = dynamic(
  () => import("@/components/(footers)/footer-thirtyeight"),
  {
    ssr: false,
  }
);

const DynamicFooterForty = dynamic(
  () => import("@/components/(footers)/footer-forty"),
  {
    ssr: false,
  }
);

const Footer = ({
  theme,
  headerSetting,
  category,
  design,
  store_id,
  menu,
  page,
}: any) => {
  return (
    <>
      {theme === "default" && (
        <DynamicFooterDefault
          headerSetting={headerSetting}
          category={category}
        />
      )}

      {theme === "one" && (
        <FooterOne
          headerSetting={headerSetting}
          category={category}
          design={design}
          store_id={store_id}
          menu={menu}
          page={page}
        />
      )}

      {theme === "two" && (
        <FooterTwo
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
        />
      )}

      {theme === "three" && (
        <FooterThree
          category={category}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
        />
      )}
      {theme === "four" && (
        <FooterFour
          page={page}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
        />
      )}

      {theme === "five" && (
        <DynamicFooterFive
          category={category}
          design={design}
          page={page}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
        />
      )}

      {theme === "six" && (
        <FooterSix
          category={category}
          design={design}
          page={page}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
        />
      )}

      {theme === "seven" && (
        <FooterSeven
          category={category}
          design={design}
          page={page}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
        />
      )}

      {theme === "eight" && (
        <FooterEight
          category={category}
          page={page}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
        />
      )}

      {theme === "nine" && (
        <DynamicFooterNine
          category={category}
          design={design}
          page={page}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
        />
      )}

      {theme === "ten" && (
        <DynamicFooterNine
          category={category}
          design={design}
          page={page}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
        />
      )}

      {theme === "eleven" && (
        <FooterEleven
          category={category}
          design={design}
          page={page}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
        />
      )}

      {theme === "twelve" && (
        <DynamicFooterTwelve
          category={category}
          design={design}
          page={page}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
        />
      )}

      {theme === THIRTEEN && (
        <FooterThirteen
          category={category}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
        />
      )}

      {theme === FOURTEEN && (
        <FooterFourteen
          design={design}
          category={category}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
          page={page}
        />
      )}

      {theme === SIXTEEN && (
        <FooterSixteen
          design={design}
          category={category}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
          page={page}
        />
      )}
      {theme === SEVENTEEN && (
        <FooterSeventeen
          design={design}
          category={category}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
          page={page}
        />
      )}
      {theme === EIGHTEEN && (
        <FooterEighteen
          design={design}
          category={category}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
          page={page}
        />
      )}
      {theme === NINETEEN && (
        <FooterNineteen
          design={design}
          category={category}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
          page={page}
        />
      )}

      {theme === TWENTY && (
        <FooterTwenty
          design={design}
          category={category}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
          page={page}
        />
      )}

      {theme === TWENTY_ONE && (
        <FooterTwentyOne
          design={design}
          category={category}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
          page={page}
        />
      )}
      {theme === TWENTY_TWO && (
        <FooterTwentyTwo
          design={design}
          category={category}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
          page={page}
        />
      )}
      {theme === TWENTY_THREE && (
        <FooterTwentyThree
          design={design}
          category={category}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
          page={page}
        />
      )}

      {theme === TWENTY_FOUR && (
        <DynamicFooterTwentyFour
          design={design}
          category={category}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
          page={page}
        />
      )}

      {theme === TWENTY_FIVE && (
        <FooterTwentyFive
          design={design}
          category={category}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
          page={page}
        />
      )}
      {theme === TWENTY_SIX && (
        <FooterTwentySix
          design={design}
          category={category}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
          page={page}
        />
      )}
      {theme === TWENTY_SEVEN && (
        <FooterTwentySeven headerSetting={headerSetting} />
      )}
      {theme === TWENTY_EIGHT && (
        <FooterTwentySeven headerSetting={headerSetting} />
      )}
      {theme === TWENTY_NINE && (
        <FooterTwentyNine
          design={design}
          category={category}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
          page={page}
        />
      )}

      {theme === THIRTY && (
        <FooterThirty
          design={design}
          category={category}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
          page={page}
        />
      )}

      {theme === THIRTY_ONE && (
        <FooterThirty
          design={design}
          category={category}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
          page={page}
        />
      )}

      {theme === THIRTY_THREE && (
        <FooterThirty
          design={design}
          category={category}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
          page={page}
        />
      )}

      {theme === THIRTY_FOUR && (
        <FooterThirtyFour
          design={design}
          category={category}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
          page={page}
        />
      )}

      {theme === THIRTY_FIVE && (
        <FooterThirtyFive
          design={design}
          category={category}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
          page={page}
        />
      )}

      {theme === THIRTY_SIX && (
        <FooterThirtySix
          design={design}
          category={category}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
          page={page}
        />
      )}
      {theme === THIRTY_SEVEN && (
        <FooterThirtySeven
          design={design}
          category={category}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
          page={page}
        />
      )}

      {theme === THIRTY_EIGHT && (
        <DynamicFooterThirtyEight
          design={design}
          category={category}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
          page={page}
        />
      )}

      {theme === THIRTY_NINE && (
        <DynamicFooterThirtyEight
          design={design}
          category={category}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
          page={page}
        />
      )}

      {theme === "forty" && (
        <DynamicFooterForty
          design={design}
          category={category}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
          page={page}
        />
      )}
    </>
  );
};

export default Footer;
