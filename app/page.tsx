import React from "react";
import HomePage from "./components/home";
import { headers } from "next/headers";
import axios from "axios";

export default async function Home() {
  const headersList = headers();
  const host = headersList.get("host");
  const forwardedPath = headersList.get("x-forwarded-path") || "";
  const url = `${host}${forwardedPath}`;

  const res = await axios.post(
    "https://admin.ebitans.com/api/v1/getsubdomain/name",
    {
      name: url,
    }
  );

  const { layout, design } = res?.data;

  return <HomePage layoutx={layout} queryDatax={res?.data} design={design} />;
}
