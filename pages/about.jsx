import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
// import Link from "next/link";
import Header from "../components/Header"
// import Footer from "../components/Footer";
// import Star from "./star";

export default function About() {
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
          content="About || Jamshid Jurakulov"
        />
        <meta property="og:type" content="form" />
        <meta property="og:image" content="%PUBLIC_URL%/icon.ico" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/icon.ico" />


        <title>About | about xelopsys</title>

      </Head>

      <Header />

      <main className={styles.main1}>
        {/*<Star/>*/}
        <div className="stars"></div>
        <div className="stars1"></div>
        <div className="stars2"></div>

        <div className="container my-auto">

          <div className="row justify justify-content-center align-items-center p-3">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-3 mb-4 d-flex justify-content-center align-items-center">
              <img src="/profile.png" className={styles.photo} />

            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <h1 className="display-5" style={{ fontFamily: "regular" }}>Hope, you{`'`}re alright!</h1>
              <p className="">
                I am Jamshid Jurakulov,  known as <b>{`'`}xelopsys{`'`}</b>.  20 y.o <b>enthusiast programmer</b> and <b>entrepreneur</b> who is eager to find <b>solutions</b> to the problem.  With <b>3+</b> years of experience in Software development, I managed to accomplish different projects with <b>success</b> stories.
                <br />
                <br />
                <b style={{ fontFamily: "boldFont" }}>
                  A guy with an ambition and seeking for a {`'`}proper{`'`} way to make his life even better.
                </b>
              </p>
              <br />
              <p className={styles.quote}>
                {`'`}Make it worthy...{`'`}
              </p>
              <br />
              <p className={styles.word1}>Jamshid Jurakulov.</p>
            </div>
          </div>
        </div>


      </main>


      {/* <Footer /> */}

      <style jsx>{`
        ::selection{
            color: #8d0f0f;
            background-color: black;
            }
      `}</style>
    </div>
  );
}
