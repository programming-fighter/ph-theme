"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Hero from "./hero";
import FeaturedCategory from "./featured-category";
import PromoBottom from "./promo-bottom";
import Product from "./product";
import NewArrival from "./new-arrival";
import BestSellerProduct from "./best-seller-product";
import FeatureProduct from "./feature-product";
import Testimonial from "./testimonial";
import Promo from "./promo";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/localstorage";
import { LoaderOne, LoaderTwo } from "./pre-loader";

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

const HomePage = ({ domain }: any) => {
  const [theme, setTheme] = useState<any>(null);
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState<any>(null);

  const preloader = theme?.design?.preloader;

  const getTodos = async (domain: any) => {
    const res = await axios.post(
      "https://admin.ebitans.com/api/v1/getsubdomain/name",
      // { name: domain }
      {
        name: "siam.localhost:3000",
      }
    );
    return res?.data;
  };

  useEffect(() => {
    if (preloader) {
      saveToLocalStorage("loader", preloader);
    }
    const userData = getFromLocalStorage("loader");
    if (userData) {
      setData(userData);
    }
  }, [preloader]);

  const getData = async (domain: any) => {
    console.log(domain);
    const res = await axios.post(
      "https://admin.ebitans.com/api/v1/getsubdomain/name",
      // {
      //   name: domain,
      // }
      {
        name: "siam.localhost:3000",
      }
    );

    return res?.data;
  };
  // const { layout, design, page, menu } = res.data;
  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const {
    data: queryData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos", domain],
    queryFn: () => getData(domain),
  });

  useEffect(() => {
    if (queryData) {
      const { layout, design, page, menu } = queryData;
      setTheme(queryData);
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    }
  }, [queryData]);

  const renderPreloader = (preloaderType: string) => {
    switch (preloaderType) {
      case "default":
      case "one":
        return <LoaderOne />;
      case "two":
        return <LoaderTwo />;
      default:
        return <div className="bg-black h-screen w-full"></div>;
    }
  };

  if (isLoading) {
    const loaderType = data || preloader || "default";
    return renderPreloader(loaderType);
  }
  if (isError) return <p>Error..</p>;
  const { layout, design, page, menu } = queryData;

  if (theme === null && !data) {
    return <div className="bg-black h-screen w-full"></div>;
  }

  if (loader && (data || preloader)) {
    return renderPreloader(data || preloader);
  }

  return (
    <>
      <div
        className={`${
          design?.template_id === "34" ? "bg-thirty-one" : "bg-white"
        } mx-auto`}
      >
        {layout &&
          layout.map((item: any, index: number) => (
            <GetComponent data={queryData} key={index} component={item} />
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
