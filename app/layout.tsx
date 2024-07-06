import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "react-toastify/dist/ReactToastify.css";
import AppWrapper from "./app-wrapper";
import { headers } from "next/headers";
import axios from "axios";

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

  const { design, headersetting } = res?.data;
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
