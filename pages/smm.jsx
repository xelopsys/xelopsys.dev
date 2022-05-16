import React from "react";
import Head from "next/head";
// import Link from "next/link";
import styles from "../styles/Home.module.css";
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Web() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SMM</title>
        <meta property="og:title" content="SMM" key="title" />

      </Head>
      <Header />


      <main className={styles.main}>
        <div className="stars"></div>
        <div className="stars1"></div>
        <div className="stars2"></div>


        <div className="container-fluid h-100">
          <p className={styles.word}>Social Media Marketing</p>
          <div className="row w-100 d-flex flex-wrap justify-content-center align-items-center align-content-center p-0 m-0">


            <div className="p-card shadow h-auto col-xs-12 col-sm-12 col-md-5 col-lg-3 mx-auto my-3">
              <img src="/smm1.webp" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Dilorom Raimxojayeva</h5>
                <p className="card-text">
                  Personal Brand
                </p>
                <p className="card-text">
                  <a href="https://www.instagram.com/dilorom_raimxojayeva/" target="_blank" rel="noreferrer">
                    <button className="btn w-100">
                      Instagram
                    </button>
                  </a>
                </p>
              </div>
            </div>

            <div className="p-card shadow h-auto col-xs-12 col-sm-12 col-md-5 col-lg-3 mx-auto my-3">
              <img src="/smm3.webp" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Gigant Group</h5>
                <p className="card-text">
                  Construction and Building Company
                </p>
                <p className="card-text">
                  <a href="https://www.instagram.com/gigantgroup.uz/" target="_blank" rel="noreferrer">
                    <button className="btn w-100">
                      Instagram
                    </button>
                  </a>
                </p>
              </div>
            </div>

            <div className="p-card shadow h-auto col-xs-12 col-sm-12 col-md-5 col-lg-3 mx-auto my-3">
              <img src="/smm2.webp" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Casebook.uz</h5>
                <p className="card-text">
                  Online Book shop
                </p>
                <p className="card-text">
                  <a href="https://www.instagram.com/casebook.uz/" target="_blank" rel="noreferrer">
                    <button className="btn w-100">
                      Instagram
                    </button>
                  </a>
                </p>
              </div>
            </div>


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
  )
}