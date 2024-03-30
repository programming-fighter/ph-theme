import { productImg } from "@/app/site-settings/siteUrl";
import Taka from "@/app/utils/taka";
import Link from "next/link";
import React from "react";

const Card12 = ({ item }: any) => {
  return (
    <div className="max-w-sm bg-white rounded hover:rounded-xl hover:shadow-md dark:bg-gray-800 dark:border-gray-700 hover:-translate-y-2 transition-all duration-300 ease-linear">
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
          {/* <p className='text-sm capitalize text-gray-500' style={{ height: '30px', overflow: 'hidden', whiteSpace: 'nowrap', width: '130px', textOverflow: 'ellipsis' }}>{item?.category .charAt(0).toUpperCase() + item?.category .slice(1)}</p> */}
          <div className="flex flex-wrap items-center gap-y-1 gap-x-4">
            <div className="text-base font-semibold">
              <Taka />
              {/* {camp?.status === "active" ? campPrice : productGetPrice} */}
            </div>
            <div className="line-through text-gray-400 text-sm">
              {/* {camp?.status !== "active" &&
              (item.discount_type === "no_discount" ||
                item.discount_price === "0.00") ? (
                " "
              ) : (
                <p>
                  <Taka />
                  {Math.trunc(item.regular_price)}
                </p>
              )} */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card12;
