import React from "react";
import "../styles/globals.css";
import "../styles/bootstrap.min.css";
import "../styles/main.css";
import "../styles/star.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
