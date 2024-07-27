"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import OrderComponent from "@/components/order-component";

const OrderPage = () => {
  // const router = useRouter();
  const { user } = useSelector((state: any) => state.auth);

  // useEffect(() => {
  //   if (!user?.verify) {
  //     router.push("/login");
  //   }
  // }, [user, router]);

  if (user?.verify) {
    return <OrderComponent />;
  }
};

export default OrderPage;
