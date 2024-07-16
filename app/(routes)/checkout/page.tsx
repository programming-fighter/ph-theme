import React from "react";
import CheckoutComponent from "./checkout-component";
import getUrl from "@/app/utils/get-url";
import { getSubdomainName } from "@/lib";
import capitalizeFirstLetter from "@/helper/capitalize-first-letter";
import { imgUrl } from "@/app/site-settings/siteUrl";

export async function generateMetadata() {
  const url = getUrl();
  const subDomainData = await getSubdomainName(url);
  const { headersetting } = subDomainData;
  const websiteName = capitalizeFirstLetter(headersetting.website_name);

  return {
    title: `${websiteName} | Checkout`,
    icons: { icon: imgUrl + headersetting.favicon },
  };
}

const CheckoutPage = () => {
  return <CheckoutComponent />;
};

export default CheckoutPage;
