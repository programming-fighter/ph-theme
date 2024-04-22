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
      {/*   headerSetting,
  menu,
  category,
  page,
  store_id, */}

      {theme === "eight" && (
        <FooterEight
          category={category}
          page={page}
          headerSetting={headerSetting}
          store_id={store_id}
          menu={menu}
        />
      )}
    </>
  );
};

export default Footer;
