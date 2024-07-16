"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getPrice } from "@/utils/get-price";
import { getCampaign } from "@/utils/http/get-campaign";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { productImg } from "@/app/site-settings/siteUrl";
import BDT from "@/utils/bdt";
import Bdt from "@/utils/bdt";
import { toast } from "react-toastify";
import QuikView from "../quick-view";
import Details from "../(product-details)/three/details";
import useTheme from "@/app/hooks/use-theme";
import { addToCartList } from "@/redux/features/product.slice";
import { useDispatch } from "react-redux";

const Card39 = ({ item }: any) => {
  const { store_id } = useTheme();
  const router = useRouter();
  const [camp, setCamp] = useState<any>(null);

  const [open, setOpen] = useState(false);
  const [view, setView] = useState(false);

  const dispatch = useDispatch();
  // const navigate = useNavigate();

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
        const response: any = await getCampaign(item, store_id);
        if (!response?.error) {
          setCamp(response);
        } // the API response object
      } catch (error) {
        console.error(error);
      }
    }

    handleCampaign();
  }, [item, store_id]);

  const filterOfferProduct = (item: any) => {
    let cartItem = {};
    let productDetails = {
      id: item?.id,
      store_id,
    };
    toast("Added to Cart", {
      type: "success",
      autoClose: 1000,
    });

    axios
      .post(process.env.API_URL + "get/offer/product", productDetails)
      .then((res: any) => {
        if (!res?.error) {
          let itemRegularPrice = getPrice(
            item?.regular_price,
            item?.discount_price,
            item?.discount_type
          );
          let campaignPrice = getPrice(
            itemRegularPrice,
            parseInt(res?.discount_amount),
            res?.discount_type
          );
          if (res?.discount_amount === null) {
            cartItem = {
              cartId: uuidv4(),
              price: itemRegularPrice,
              color: null,
              size: null,
              additional_price: null,
              volume: null,
              unit: null,
              ...item,
            };
          } else {
            cartItem = {
              cartId: uuidv4(),
              price: campaignPrice,
              color: null,
              size: null,
              additional_price: null,
              volume: null,
              unit: null,
              ...item,
            };
          }
        } else {
          cartItem = {
            cartId: uuidv4(),
            price: productGetPrice,
            color: null,
            size: null,
            additional_price: null,
            volume: null,
            unit: null,
            ...item,
          };
        }
        dispatch(addToCartList({ ...cartItem }));
      });
  };

  const add_cart_item = () => {
    if (item?.variant.length !== 0) {
      router.push(`/product/${item?.id}/${item?.slug}`);
    } else {
      filterOfferProduct(item);
    }
  };

  return (
    <div className="group">
      <div className="relative border-1  ">
        <div className="w-full relative">
          <span
            className="absolute  text-white z-[1] p-1 text-sm top-3 left-3 pl-6 bottom-50 w-[80px]"
            style={{ background: "#b1a554" }}
          >
            SALE
          </span>
          <Link href={"/product/" + item?.id + "/" + item?.slug}>
            <img
              className=" transition duration-150 ease-out group-hover:ease-in h-auto min-w-full"
              src={productImg + item?.image[0]}
              alt=""
            />
          </Link>

          <div className="lg:absolute top-[50%] left-[50%] lg:-translate-x-[50%] lg:-translate-y-[50%]">
            <div
              className="lg:cursor-pointer -translate-y-14 group-hover:-translate-y-3 group-hover:opacity-100 opacity-0 duration-700 px-3 py-2 tracking-wider hover:bg-[#f7f3e3] bg-[#F1EBD1] text-[#2c291d] border border-black text-sm lg:block hidden"
              onClick={() => setOpen(!open)}
            >
              QUICK VIEW
            </div>

            <div
              onClick={add_cart_item}
              className="lg:cursor-pointer lg:translate-y-14 lg:group-hover:translate-y-3 duration-700 lg:group-hover:opacity-100 lg:opacity-0 py-2 px-3 tracking-wider hover:bg-[#f7f3e3] bg-[#F1EBD1] text-[#312e21] border border-black text-sm text-center"
            >
              ADD TO CART
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 justify-between">
        <div>
          <Link href={"/product/" + item?.id + "/" + item?.slug}>
            <h6 className="text-xl  themeTextColor truncate">{item?.name}</h6>
          </Link>
        </div>
        <div>
          <div className="flex flex-wrap gap-y-2 ">
            <div className="text-base font-semibold themeTextColor">
              <BDT
                price={camp?.status === "active" ? campPrice : productGetPrice}
              />
            </div>
            <div className="line-through themeTextColor ml-4">
              {camp?.status !== "active" &&
              (item.discount_type === "no_discount" ||
                item.discount_price === "0.00") ? (
                " "
              ) : (
                <p>
                  {" "}
                  <Bdt price={Math.trunc(item.regular_price)} />
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <QuikView open={open} setOpen={setOpen}>
        <Details data={{ product_id: item?.id }} />
      </QuikView>
    </div>
  );
};

export default Card39;
