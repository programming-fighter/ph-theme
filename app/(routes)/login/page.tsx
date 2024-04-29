"use client";
import Signin from "@/app/components/signin";
import useTheme from "@/app/hooks/use-theme";
import React from "react";

const Login = () => {
  const { design } = useTheme();
  console.log(design, "d");
  return <Signin theme={design?.login_page} />;
};

export default Login;
