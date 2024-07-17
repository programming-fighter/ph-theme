import Register from "@/components/register";
import useTheme from "@/hooks/use-theme";
import axios from "axios";
import React from "react";

const Signup = async () => {
  // const res = await axios.post(
  //   "https://admin.ebitans.com/api/v1/" + "getsubdomain/name",
  //   // {
  //   //   name: "siam.localhost:3000",
  //   // }
  //   {
  //     name: window.location.host,
  //   }
  // );
  // const { design } = res.data;

  return <Register />;
};

export default Signup;
