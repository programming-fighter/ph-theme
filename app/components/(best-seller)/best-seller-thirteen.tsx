"use client";
// created by iazadur
import React from "react";
import { SwiperSlide } from "swiper/react";
import SectionHeadingThirteen from "../(section-heading)/section-heading-thirteen";
import GridSliderThirteen from "../(slider)/grid-slider/grid-slider-thirteen";
import Card20 from "../(card)/card20";

const BestSellerThirteen = ({ best_sell_product, store_id }: any) => {
  const prev = "bestseller_productThirteen_prev";
  const next = "bestseller_productThirteen_next";

  return (
    <div className="bg-white ">
      <div className="sm:container px-5 sm:py-10 py-5">
        <SectionHeadingThirteen prev={prev} next={next} title={"Best Seller"} />
        <GridSliderThirteen
          prevEl={prev}
          nextEl={next}
          breakpoints={{
            40: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            750: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          grid={{ rows: 3 }}
          className={"h-[380px] mt-2 md:my-12"}
        >
          {best_sell_product?.slice(0, 20).map((item: any) => (
            <SwiperSlide className="swiperjs_grid_three" key={item?.id}>
              <Card20 item={item} store_id={store_id} />
            </SwiperSlide>
          ))}
        </GridSliderThirteen>
      </div>
    </div>
  );
};

export default BestSellerThirteen;
