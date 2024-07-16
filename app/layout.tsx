import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "react-toastify/dist/ReactToastify.css";
import AppWrapper from "./app-wrapper";
import { headers } from "next/headers";
import axios from "axios";
import getUrl from "./utils/get-url";
import { getSubdomainName } from "@/lib";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eBitans",
  description: "A Frontend Developer Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const url = getUrl();
  const { design, headersetting } = await getSubdomainName(url);

  return (
    <html lang="en">
      <body className={`${inter.className} lg2 `}>
        <AppWrapper headerSetting={headersetting} design={design}>
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
