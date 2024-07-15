import ProductDetails from "@/app/components/product-details";
import React from "react";
import getUrl from "@/app/utils/get-url";
import { getProductDetails, getSubdomainName } from "@/lib";

export async function generateMetadata({
  params,
}: {
  params: { productID: string; slug: string };
}) {
  const url = getUrl();
  const subDomainData = await getSubdomainName(url);
  const { design } = subDomainData;
  const product = await getProductDetails({
    store_id: design?.store_id,
    product_id: params.productID,
  });
  const { name } = product;
  return {
    title: name,
  };
}

const SingleProductDetails = async ({
  params,
}: {
  params: { productID: string; slug: string };
}) => {
  return (
    <div>
      <ProductDetails />
    </div>
  );
};

export default SingleProductDetails;
