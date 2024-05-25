"use client";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";
// import HomePage from "./components/home";
import dynamic from "next/dynamic";
const HomePage = dynamic(() => import("./components/home"));

// const HomePage = React.lazy(() => import("./components/home"));

export default function Home() {
  let domain = window.location.host;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage domain={domain} />
    </Suspense>
  );
}
