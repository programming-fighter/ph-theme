"use client";
import Checkout from "@/app/components/checkout";
import React from "react";
import { useSelector } from "react-redux";
import Login from "../login/page";
import useTheme from "@/app/hooks/use-theme";

const CheckoutPage = () => {
  const { user } = useSelector((state: any) => state.auth);
  const { design } = useTheme();

  if (user?.verify) {
    return <Checkout theme={design?.checkout_page} />;
  } else {
    return <Login />;
  }
};

export default CheckoutPage;
