import httpReq from "@/app/utils/http/axios/http.service";

export const getProductDetails = async (updatedData: any) => {
  return await httpReq.post("/product-details", updatedData);
};

export const getRelatedProducts = async (id: any) => {
  return await httpReq.post("related-product", { id });
};
