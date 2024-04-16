import axios from "axios";
import Header from "@/components/header";
import Hero from "@/components/hero";
import FeaturedCategory from "@/components/featured-category";
import Promo from "@/components/promo";
import PromoBottom from "@/components/promo-bottom";
import Product from "@/components/product";
import NewArrival from "@/components/new-arrival";
import BestSellerProduct from "@/components/best-seller-product";
import FeatureProduct from "@/components/feature-product";
import Testimonial from "@/components/testimonial";

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

export default async function Home() {
  const res = await axios.post(
    "https://admin.ebitans.com/api/v1/" + "getsubdomain/name",
    {
      name: "siam.localhost:3000",
    }
  );

  const { layout, design } = res.data;

  return (
    <div
      className={`${
        design?.template_id === "34" ? "bg-thirty-one" : "bg-white"
      }`}
    >
      {layout &&
        layout.map((item: any, index: number) => (
          <GetComponent data={res.data} key={index} component={item} />
        ))}
    </div>
  );
}

const GetComponent = ({ component, data }: GetComponentProps) => {
  const {
    headerSetting,
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
  } = data;

  switch (component) {
    case "header":
      return (
        <Header
          headerSetting={headerSetting}
          menu={menu}
          navigation={navigation}
        />
      );
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
      return <PromoBottom banner={banner} />;
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
          headerSetting={headerSetting}
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
      return <BestSellerProduct best_sell_product={best_sell_product} />;
    case "feature_product":
      return <FeatureProduct feature_product={feature_product} />;
    case "testimonial":
      return <Testimonial testimonials={testimonials} />;
  }
};
