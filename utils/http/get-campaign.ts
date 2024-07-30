// depricated (not working)
import axios from "axios";

export const getCampaign = async (item: any, store_id: any) => {
  if (item) {
    const offerData = {
      id: item?.id,
      store_id,
    };

    try {
      const response = await axios.post<any>(
        "https://admin.ebitans.com/api/v1/" + "get/offer/product",
        offerData
      );
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return null;
};
