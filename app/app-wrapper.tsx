"use client";
import React, { PropsWithChildren } from "react";
import ThemeProvider from "./hooks/theme-provider";
import { Provider } from "react-redux";
import store, { persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Header from "./components/header";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";
import dynamic from "next/dynamic";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

// const Header = dynamic(() => import("./components/header"), { ssr: false });
// const Footer = dynamic(() => import("./components/footer"));

const AppWrapper = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Header />
            {children}
            <Footer />
            <ToastContainer position="top-right" newestOnTop />
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default AppWrapper;
