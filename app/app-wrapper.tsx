"use client";
import React from "react";
import ThemeProvider from "./hooks/theme-provider";
import { Provider } from "react-redux";
import store, { persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Header from "./components/header";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

interface PersistGateFix extends React.Component {}

const PersistGateX = PersistGate as any as {
  new (): PersistGateFix;
};

const props: any = {
  loading: null,
  persistor: persistor,
};

const AppWrapper = ({ children }: any) => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGateX {...props}>
            <Header />
            {children}
            <Footer />
            <ToastContainer position="top-right" newestOnTop />
          </PersistGateX>
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default AppWrapper;
