import React from "react";
import HomePage from "./components/home";
import { headers } from "next/headers";
import axios from "axios";
import getUrl from "./utils/get-url";
import { getSubdomainName } from "@/lib";

export default async function Home() {
  const url = getUrl();

  const data = await getSubdomainName(url);
  const { layout, design } = data;

  return <HomePage layoutx={layout} queryDatax={data} design={design} />;
}
