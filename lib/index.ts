import axios from "axios";

const getSubdomainName = async (url: string) => {
  const res = await axios.post(
    "https://admin.ebitans.com/api/v1/getsubdomain/name",
    {
      name: url,
    }
  );
  return res?.data;
};

const fetchDomainData = async (url: string) => {
  const response = await fetch(
    "https://admin.ebitans.com/api/v1/getsubdomain/name",

    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: url }),
      cache: "no-cache",
    }
  );
  const data = await response.json();
  return data;
};

const getProductDetails = async ({
  store_id,
  product_id,
}: {
  store_id: number;
  product_id: string;
}) => {
  const { data } = await axios.post(
    "https://admin.ebitans.com/api/v1/product-details",
    { store_id, product_id }
  );
  const { product: productDetails } = data;
  return productDetails;
};

export { getSubdomainName, getProductDetails, fetchDomainData };
