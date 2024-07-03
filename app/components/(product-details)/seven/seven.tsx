"use client";
import { motion, AnimatePresence } from "framer-motion";
import { SwiperSlide } from "swiper/react";
import Details from "./details";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { profileImg } from "@/app/site-settings/siteUrl";
import Rate from "@/app/utils/rate";
import moment from "moment";
import SectionHeadingSeven from "../../(section-heading)/section-heading-seven";
import Arrow from "@/app/utils/arrow";
import SliderFive from "../../(slider)/slider-five";
import Card12 from "../../(card)/card12";
import { UpdateData } from "../../product-details";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getProductDetails, getRelatedProducts, getReviews } from "./apis";

interface Props {
  data: any;
  updatedData: UpdateData;
}

const Seven = ({ data, updatedData }: Props) => {
  const {
    data: productDetailsData,
    isLoading: isProductDetailsLoading,
    isError: isProductDetailsError,
  } = useQuery({
    queryKey: ["pd-7"],
    queryFn: () => getProductDetails(updatedData),
    enabled: !!updatedData.slug && !!updatedData.store_id,
  });

  const {
    data: relatedProducts,
    isLoading: isRelatedProductLoading,
    isError: isRelatedProductError,
  } = useQuery({
    queryKey: ["rp-7"],
    queryFn: () => getRelatedProducts(updatedData?.product_id),
    enabled: !!updatedData.slug && !!updatedData.store_id,
  });

  const {
    data: reviews,
    isLoading: isReviewsLoading,
    isError: isReviewsError,
  } = useQuery({
    queryKey: ["rv-7"],
    queryFn: () => getReviews(updatedData),
    enabled: !!updatedData.slug && !!updatedData.store_id,
  });

  if (isProductDetailsLoading || isRelatedProductLoading || isReviewsLoading)
    return <p>loading</p>;

  const datax = {
    product: productDetailsData?.product,
    variant: productDetailsData?.variant,
    vrcolor: productDetailsData?.vrcolor,
  };

  return (
    <div className="container px-5">
      {productDetailsData?.product ? (
        <>
          <Details data={data} datax={datax}>
            <div className="h-[1px] bg-gray-300 w-full "></div>
            <div className="flex flex-col space-y-3 font-seven">
              <div className="flex items-center gap-x-3 py-3">
                <div className="font-semibold text-[#212121] font-seven">
                  Availability:
                </div>
                <div className="text-sm">
                  {productDetailsData?.product?.quantity !== "0" ? (
                    <p>
                      <span className="font-medium">
                        {productDetailsData?.product?.quantity}
                      </span>{" "}
                      <span className="text-green-500">In Stock!</span>
                    </p>
                  ) : (
                    <span className="text-red-600">Out of Stock!</span>
                  )}
                </div>
              </div>
              <p className="text-sm text-[#5a5a5a] font-seven">
                <span className="font-semibold text-[#212121] font-seven">
                  SKU:
                </span>{" "}
                {productDetailsData?.product?.SKU}
              </p>
              <p className="text-sm text-[#5a5a5a] font-seven">
                <span className="font-semibold text-[#212121] font-seven">
                  Category:
                </span>{" "}
                {productDetailsData?.product?.category}
              </p>
              {productDetailsData?.product?.tags && (
                <p className="text-sm text-[#5a5a5a] font-seven">
                  <span className="font-semibold text-[#212121] font-seven">
                    Tags:
                  </span>{" "}
                  {productDetailsData?.product?.tags}
                </p>
              )}
            </div>
            <div className="h-[1px] bg-gray-300 w-full "></div>
            <According
              text={"Product Details"}
              desc={productDetailsData?.product?.description}
            />
            <According text={"Customer Reviews"} desc={reviews} />
          </Details>
          {relatedProducts && <Related product={relatedProducts} />}
        </>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default Seven;

const According = ({ text, desc }: any) => {
  const [show, setShow] = useState(false);
  return (
    <AnimatePresence>
      <div
        onClick={() => setShow(!show)}
        className="flex justify-between items-center lg:cursor-pointer font-seven text-lg font-semibold"
      >
        <div className="h3 font-seven">{text}</div>
        {show ? <MinusIcon width={25} /> : <PlusIcon width={25} />}
      </div>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="font-seven"
        >
          {desc[0]?.id ? (
            <div>
              {desc.length === 0 ? (
                <div className="flex flex-1 justify-center items-center">
                  <h3 className="text-xl font-sans font-bold">
                    No Found Review
                  </h3>
                </div>
              ) : (
                desc?.map((item: any) => (
                  <UserReview key={item?.id} review={item} />
                ))
              )}
            </div>
          ) : (
            <div
              dangerouslySetInnerHTML={{ __html: desc }}
              className="apiHtml"
            ></div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const UserReview = ({ review }: any) => {
  return (
    <div className=" bg-slate-50 p-5">
      <div className="avatar">
        <div className="w-20 h-20 rounded-full">
          <img
            src={profileImg + review?.image}
            className="rounded-full h-full w-full"
            alt=""
          />
        </div>
      </div>
      <Rate className="text-base" rating={review?.rating} />
      <p className="text-xs font-semibold mt-2">{review?.name}</p>
      <p className="text-sm font-light mt-2">
        {moment(new Date(review?.cd)).format("DD/MM/YYYY")}
      </p>
      <p className="text-base font-semiBold mt-2">{review?.comment}</p>
    </div>
  );
};

const Related = ({ product }: any) => {
  const prev = "best_seller_Prev";
  const next = "best_seller_Next";
  return (
    <div className="shadow-lg py-5 sm:py-10 rounded-md bg-white px-3">
      <div className="my-5 pt-1 flex justify-between items-center">
        <SectionHeadingSeven title={"Related Products"} />
        <Arrow prevEl={prev} nextEl={next}></Arrow>
      </div>
      <div className="">
        <SliderFive prevEl={prev} nextEl={next}>
          {product?.slice(0, 10).map((item: any) => (
            <SwiperSlide key={item?.id}>
              {/* <ProductCardTwo item={item} /> */}
              <Card12 item={item} />
            </SwiperSlide>
          ))}
        </SliderFive>
      </div>
    </div>
  );
};
