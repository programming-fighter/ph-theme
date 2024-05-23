import axios from "axios";
import React from "react";
import Hero from "./hero";
import FeaturedCategory from "./featured-category";
import PromoBottom from "./promo-bottom";
import Product from "./product";
import NewArrival from "./new-arrival";
import BestSellerProduct from "./best-seller-product";
import FeatureProduct from "./feature-product";
import Testimonial from "./testimonial";
import Promo from "./promo";

interface Navigation {
  name: string;
  href: string;
}

interface GetComponentProps {
  component:
    | "header"
    | "hero_slider"
    | "feature_category"
    | "banner"
    | "product"
    | "feature_product"
    | "banner_bottom"
    | "best_seller_product"
    | "new_arrival"
    | "testimonial"
    | "footer";
  data: any;
}

const navigation: Navigation[] = [
  { name: "Product", href: "/" },
  { name: "Features", href: "/" },
  { name: "Marketplace", href: "/" },
  { name: "Company", href: "/" },
];

const HomePage = async ({ domain }: any) => {
  const res = await axios.post(
    "https://admin.ebitans.com/api/v1/" + "getsubdomain/name",
    {
      name: domain,
    }
  );

  const { layout, design, page, menu } = res.data;

  console.log("hellow orld");

  return (
    <>
      <div
        className={`${
          design?.template_id === "34" ? "bg-thirty-one" : "bg-white"
        } mx-auto`}
      >
        {layout &&
          layout.map((item: any, index: number) => (
            <GetComponent data={res.data} key={index} component={item} />
          ))}
      </div>
    </>
  );
};

const GetComponent = ({ component, data }: GetComponentProps) => {
  const {
    headersetting,
    menu,
    slider,
    category,
    banner,
    product,
    best_sell_product,
    feature_product,
    testimonials,
    design,
    store_id,
    brand,
    page,
  } = data;

  switch (component) {
    // case "header":
    //   return (
    //     <Header
    //       headerSetting={headersetting}
    //       menu={menu}
    //       navigation={navigation}
    //       theme={design?.header}
    //     />
    //   );
    case "hero_slider":
      return (
        <Hero slider={slider} theme={design?.hero_slider} design={design} />
      );
    case "feature_category":
      return (
        <FeaturedCategory
          theme={design?.feature_category}
          category={category}
          design={design}
          product={product}
          store_id={store_id}
        />
      );
    case "banner":
      return (
        <Promo
          design={design}
          store_id={store_id}
          theme={design?.banner}
          banner={banner}
        />
      );
    case "banner_bottom":
      return (
        <PromoBottom
          theme={design?.banner_bottom}
          banner={banner}
          brand={brand}
        />
      );
    case "product":
      return (
        <Product
          theme={design?.product}
          design={design}
          store_id={store_id}
          product={product}
          best_sell_product={best_sell_product}
          feature_product={feature_product}
          category={category}
          headerSetting={headersetting}
        />
      );
    case "new_arrival":
      return (
        <NewArrival
          product={product}
          theme={design?.new_arrival}
          design={design}
          store_id={store_id}
          category={category}
        />
      );
    case "best_seller_product":
      return (
        <BestSellerProduct
          theme={design?.best_sell_product}
          best_sell_product={best_sell_product}
          design={design}
          store_id={store_id}
          product={product}
          banner={banner}
        />
      );
    case "feature_product":
      return (
        <FeatureProduct
          theme={design?.feature_product}
          feature_product={feature_product}
          design={design}
          store_id={store_id}
          product={product}
          banner={banner}
        />
      );
    case "testimonial":
      return (
        <Testimonial
          testimonials={testimonials}
          theme={design?.testimonial}
          design={design}
        />
      );
    // case "footer":
    //   return (
    //     <Footer
    //       theme={design?.footer}
    //       headerSetting={headersetting}
    //       category={category}
    //       design={design}
    //       store_id={store_id}
    //       menu={menu}
    //       page={page}
    //     />
    //   );
  }
};

export default HomePage;
