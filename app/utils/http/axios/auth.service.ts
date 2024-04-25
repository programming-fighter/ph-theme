import axiosInstance from "./axios-instance";

const signUp = (store_id: any, phone: any) => {
  return axiosInstance.post("userinfo", {
    store_id,
    phone,
  });
};

const authService = {
  signUp,
};

export default authService;
