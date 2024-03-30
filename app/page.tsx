import axios from "axios";
import Header from "@/app/components/header";
import Hero from "@/app/components/hero";
import FeaturedCategory from "@/app/components/featured-category";
import Promo from "@/app/components/promo";
import PromoBottom from "@/app/components/promo-bottom";
import Product from "@/app/components/product";
import NewArrival from "@/app/components/new-arrival";

const navigation = [
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
  const {
    design,
    headerSetting,
    menu,
    slider,
    category,
    banner,
    product,
    new_arrival,
  } = res.data;
  console.log(design, "design 1");
  console.log(design.new_arrival, "design");
  return (
    <div
      className={`${
        design?.template_id === "34" ? "bg-thirty-one" : "bg-white"
      }`}
    >
      <Header
        headerSetting={headerSetting}
        menu={menu}
        navigation={navigation}
      />
      <Hero slider={slider} />
      <FeaturedCategory category={category} />
      <Promo banner={banner} />
      <PromoBottom banner={banner} />
      <Product product={product} />
      <NewArrival product={product} />
    </div>
  );
}
