import axiosInstance from "./axios-instance";

const signUp = (store_id: any, phone: any) => {
  return axiosInstance.post("userinfo", {
    store_id,
    phone,
  });
};

const verify_phone = (otp: any, token: any) => {
  return axiosInstance.post("users/checkotp", { otp, token });
};

const authService = {
  signUp,
  verify_phone,
};

export default authService;
