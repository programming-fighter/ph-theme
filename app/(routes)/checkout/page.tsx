"use client";
import Checkout from "@/app/components/checkout";
import React from "react";
import { useSelector } from "react-redux";
import Login from "../login/page";

const CheckoutPage = () => {
  const { user } = useSelector((state: any) => state.auth);
  console.log(user, "user");

  if (user?.verify) {
    return <Checkout />;
  } else {
    return <Login />;
  }
};

export default CheckoutPage;
