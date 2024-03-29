import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
// import Typical from "react-typical";
import Header from "../components/Header"
// import Footer from "../components/Footer"
import Star from "./star"
import { async } from './[slug]';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>

        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/icon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Jamshid Jurakulov's official website"
        />
        <meta
          property="og:title"
          content="Enterpreneur || Jamshid Jurakulov"
        />
        <meta property="og:type" content="form" />
        <meta property="og:icon" content="%PUBLIC_URL%/profile.png" />
        <meta property="og:image" content="%PUBLIC_URL%/profile.png" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo.png" />



        <title>Xelopsys | main page</title>

      </Head>
      <Header />

      <main className={styles.main2}>


        <Star />
        <div className={styles.bigBar}>
          <div className={styles.lilBar}>
            <h1 className="display-4 " style={{ fontFamily: "regular" }}>
              Glad, to see ya!
            </h1>
            <p className="lead">
              <b className={styles.bolder}>pro{`'`}.gram.mer</b> An organism that converts caffeine into code
            </p>
            <p className="">Maybe you need a cup of coffee ma{`'`}dear?</p>
            <Link href="/about" passHref>
              <a> <i> Go read about me..{")"}</i></a>
            </Link>
          </div>
        </div>

      </main>


      {/* <Footer /> */}


      <style jsx>{`
        main {
          height: 80vh;
          width: 100%;
          color: #ffdbc5;
          }
        ::selection{
            color: #8d0f0f;
            background-color: black;
            }
  
        
      `}</style>
    </div>
  );
}
