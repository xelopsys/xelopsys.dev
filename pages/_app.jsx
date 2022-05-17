import React from "react";
import "../styles/globals.css";
import "../styles/bootstrap.min.css";
import "../styles/main.css";
import "../styles/star.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=UA-213502733-1`}
      />

      <Script strategy="lazyOnload" id="">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-213502733-1', {
        page_path: window.location.pathname,
      });
          `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
