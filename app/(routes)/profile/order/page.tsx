"use client";
import OrderComponent from "@/app/components/order-component";
import React from "react";
import { useSelector } from "react-redux";
import Login from "../../login/page";

const OrderPage = () => {
  const { user } = useSelector((state: any) => state.auth);

  if (user?.verify) {
    return <OrderComponent />;
  } else {
    return <Login />;
  }
};

export default OrderPage;
