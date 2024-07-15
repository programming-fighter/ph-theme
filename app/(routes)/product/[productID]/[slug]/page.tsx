import ProductDetails from "@/app/components/product-details";
import React from "react";
import axios from "axios";
import { headers } from "next/headers";
import getUrl from "@/app/utils/get-url";

export async function generateMetadata({
  params,
}: {
  params: { productID: string; slug: string };
}) {
  // const headersList = headers();
  // const host = headersList.get("host");
  // const forwardedPath = headersList.get("x-forwarded-path") || "";
  // const url = `${host}${forwardedPath}`;

  const url = getUrl();

  const res = await axios.post(
    "https://admin.ebitans.com/api/v1/getsubdomain/name",
    {
      name: url,
    }
  );

  const { design } = res.data;

  const data = { product_id: params.productID, store_id: design.store_id };
  const productRes = await axios.post(
    "https://admin.ebitans.com/api/v1/product-details",
    data
  );
  const { name } = productRes?.data?.product;
  return {
    title: name,
  };
}

const SingleProductDetails = async ({
  params,
}: {
  params: { productID: string; slug: string };
}) => {
  // const { productID, slug } = params;

  // const headersList = headers();
  // const host = headersList.get("host");
  // const forwardedPath = headersList.get("x-forwarded-path") || "";
  // const url = `${host}${forwardedPath}`;

  // const res = await axios.post(
  //   "https://admin.ebitans.com/api/v1/getsubdomain/name",
  //   {
  //     name: url,
  //   }
  // );

  // const { design } = res.data;
  // const data = { product_id: params.productID, store_id: design.store_id };
  // const productRes = await axios.post(
  //   "https://admin.ebitans.com/api/v1/product-details",
  //   data
  // );
  // console.log(productRes?.data?.product, "product details");

  return (
    <div>
      <ProductDetails />
    </div>
  );
};

export default SingleProductDetails;
