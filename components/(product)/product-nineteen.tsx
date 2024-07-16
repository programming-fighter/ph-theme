import React from "react";
import SectionHeadingNineteen from "../(section-heading)/section-heading-nineteen";
import Card39 from "../(card)/card39";

const ProductNineteen = ({ product, store_id }: any) => {
  return (
    <div style={{ background: "#f2efe4" }}>
      <div className="sm:container px-5">
        <div className="py-16">
          <SectionHeadingNineteen
            title={"PRODUCT CATEGORIES"}
            subtitle={"Add products to weekly line up"}
          />
          <div className="grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-8 pt-10">
            {product?.slice(0, 9).map((data: any) => (
              <Card39 item={data} key={data?.id} store_id={store_id} />
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProductNineteen;
