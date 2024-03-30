import React from "react";
import Arrow from "@/app/utils/arrow";
import SectionHeadingFive from "@/app/components//section-heading-five";

const NewArrivalProductFive = ({ product }: any) => {
  const prev1 = "best_seller_Prev1";
  const next1 = "best_seller_Next1";

  return (
    <div className="shadow-lg sm:container px-5 sm:py-10 py-5 rounded-md">
      <div className="py-5 pt-1 flex justify-between items-center">
        <SectionHeadingFive
          title={"New Arrivals"}
          subtitle={"New arrivals products to our weekly lineup"}
        />
        <div className="pt-14 hidden sm:block">
          <Arrow prevEl={prev1} nextEl={next1}></Arrow>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalProductFive;
