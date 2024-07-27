"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import OrderComponent from "@/components/order-component";
import { useRouter } from "next/navigation";

const OrderPage = () => {
  const router = useRouter();
  const { user } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (!user?.verify) {
      router.push("/login"); // Navigate to login page if conditions are not met
    }
  }, [user, router]);

  if (user?.verify) {
    return <OrderComponent />;
  }
};

export default OrderPage;
