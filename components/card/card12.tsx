"use client";
import { productImg } from "@/site-settings/siteUrl";
import { getPrice } from "@/utils/get-price";
import { getCampaign } from "@/utils/http/get-campaign";
import { getCampaignProduct } from "@/utils/http/get-campaign-product";
import Taka from "@/utils/taka";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Card12 = ({ item, store_id }: any) => {
  const [camp, setCamp] = useState<any>(null);

  const productGetPrice = getPrice(
    item.regular_price,
    item.discount_price,
    item.discount_type
  );
  const campPrice = getPrice(
    productGetPrice,
    parseInt(camp?.discount_amount),
    camp?.discount_type
  );

  useEffect(() => {
    async function handleCampaign() {
      try {
        const response: any = await getCampaignProduct(item, store_id);
        if (!response?.error) {
          setCamp(response);
        } // the API response object
      } catch (error) {
        console.error(error);
      }
    }

    handleCampaign();
  }, [item, store_id]);

  return (
    <>
      <div className="max-w-sm bg-white rounded hover:rounded-xl hover:shadow-md  dark:border-gray-700 hover:-translate-y-2 transition-all duration-300 ease-linear">
        <div>
          <Link href={"/product/" + item?.id + "/" + item?.slug}>
            <img
              src={productImg + item.image[0]}
              className=" h-auto rounded-t-lg min-w-[100%] "
              alt="Mountain"
            />
          </Link>
        </div>

        <Link href={"/product/" + item?.id + "/" + item?.slug}>
          <div className="p-5 font-seven">
            <h6
              className="text-base text-gray-800 font-bold"
              style={{
                height: "30px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                width: "130px",
                textOverflow: "ellipsis",
              }}
            >
              {item?.name.charAt(0).toUpperCase() + item?.name.slice(1)}
            </h6>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4">
              <div className="text-base font-semibold">
                <Taka />{" "}
                {camp?.status === "active" ? campPrice : productGetPrice}
              </div>
              <div className="line-through text-gray-400 text-sm">
                {camp?.status !== "active" &&
                (item.discount_type === "no_discount" ||
                  item.discount_price === "0.00") ? (
                  " "
                ) : (
                  <p>
                    <Taka />
                    {Math.trunc(item.regular_price)}
                  </p>
                )}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card12;
