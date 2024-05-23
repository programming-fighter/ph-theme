"use client";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";
import HomePage from "./components/home";
// const HomePage = React.lazy(() => import("./components/home"));

export default function Home() {
  function cleanDomain(domain: any) {
    // Remove the protocol (http:// or https://)
    domain = domain.replace(/^(https?:\/\/)/, "");

    // Remove any trailing slash
    domain = domain.replace(/\/$/, "");

    return domain;
  }

  const domain = window.location.host;

  console.log(domain);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage domain={domain} />
    </Suspense>
  );
}
