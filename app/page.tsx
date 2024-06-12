"use client";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";
import HomePage from "./components/home";
import dynamic from "next/dynamic";
// const HomePage = dynamic(() => import("./components/home"));

// const HomePage = React.lazy(() => import("./components/home"));

export default function Home() {
  const domain = window.location.host;
  const cleanedDomain = domain.startsWith("www.") ? domain.slice(4) : domain;
  console.log(cleanedDomain, 'cleanedDomain');

  return <HomePage domain={cleanedDomain} />;
}
