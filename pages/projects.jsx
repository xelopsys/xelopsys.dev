import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Header from "../components/Header"
import Footer from "../components/Footer"
// import Star from "./star"

export default function Projects() {
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
          content="Projects || Jamshid Jurakulov"
        />
        <meta property="og:type" content="form" />
        <meta property="og:image" content="%PUBLIC_URL%/icon.ico" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/icon.ico" />


        <title>Project | projects' page</title>

      </Head>
      <Header />

      <main className={styles.main}>

        <div className="stars"></div>
        <div className="stars1"></div>
        <div className="stars2"></div>

        <div className="container-fluid">
          <div className="row w-100 h-100 d-flex flex-wrap justify-content-center align-items-center">
            <Link href="/web">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 project text-center">
                <h1 className="display-5 text-center">Web development</h1>
                <p>Projects</p>
              </div>
            </Link>

            <Link href="/smm">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 project text-center">
                <h1 className="display-5 text-center">Social Media Marketing</h1>
                <p>Projects</p>
              </div>
            </Link>
          </div>
        </div>





      </main>


      <Footer />
      <style jsx>{`
        ::selection{
            color: #8d0f0f;
            background-color: black;
}
        button{
          color: #ffdbc5;
          
          
        }
        button:hover{
          color: #ffdbc5;
          background-color: black;
        }
      `}</style>
    </div>
  );
}
