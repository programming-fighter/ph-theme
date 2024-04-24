import Register from "@/app/components/register";
import useTheme from "@/app/hooks/use-theme";
import axios from "axios";
import React from "react";

const Signup = async () => {
  const res = await axios.post(
    "https://admin.ebitans.com/api/v1/" + "getsubdomain/name",
    {
      name: "siam.localhost:3000",
    }
  );

  console.log("server");

  const { design } = res.data;

  console.log("design", design);
  return <Register theme={design?.login_page} />;
};

export default Signup;
