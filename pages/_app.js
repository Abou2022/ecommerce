import "@/styles/globals.css";
import "../styles/Home.module.css";
import React from "react";

import { Layout } from "@/components";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
