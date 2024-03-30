import React from "react";
import SectionHeadingSeven from "@/app/components/(section-heading)/section-heading-seven";
import Card14 from "../(card)/card14";

const NewArrivalProductSeven = ({ product }: any) => {
  return (
    <div className="sm:container px-5 sm:py-10 py-5">
      <SectionHeadingSeven title={"New Arrivals"} subtitle={""} />
      <div className="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 gap-2 ">
        {product?.slice(0, 10).map((productData: any) => (
          <Card14 item={productData} key={productData.id} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivalProductSeven;
