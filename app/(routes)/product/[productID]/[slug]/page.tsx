import type { Metadata, ResolvingMetadata } from "next";

import ProductDetails from "@/components/product-details";
import React, { cache } from "react";
import getUrl from "@/utils/get-url";
import { fetchDomainData, getProductDetails, getSubdomainName } from "@/lib";
import { imgUrl } from "@/app/site-settings/siteUrl";
import capitalizeFirstLetter from "@/helper/capitalize-first-letter";

type Props = {
  params: { productID: string; slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const url = getUrl();
  const subDomainData = await getSubdomainName(url, "design,headersetting");
  const { design, headersetting } = subDomainData;
  const product = await getProductDetails({
    store_id: design?.store_id,
    product_id: params.productID,
  });
  const { name } = product;
  const websiteName = capitalizeFirstLetter(headersetting.website_name);
  return {
    title: `${websiteName} | ${name}`,
    icons: { icon: imgUrl + headersetting.favicon },
  };
}

const SingleProductDetails = async ({ params }: Props) => {
  return (
    <div>
      <ProductDetails />
    </div>
  );
};

export default SingleProductDetails;
