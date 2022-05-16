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
        <title>Web</title>
        <meta property="og:title" content="Web" key="title" />

      </Head>
      <Header />


      <main className={styles.main}>
        <div className="stars"></div>
        <div className="stars1"></div>
        <div className="stars2"></div>


        <div className="container-fluid">
          <p className={styles.word}>Web development</p>
          <div className="row w-100 d-flex flex-wrap justify-content-center align-items-center align-content-center p-0 m-0">


            <div className="p-card shadow h-auto col-xs-12 col-sm-12 col-md-5 col-lg-3 mx-auto my-3">
              <img src="/project1.webp" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Azia House uz</h5>
                <p className="card-text">
                  I was contributor in this project as a frontend developer.
                  Unfortunately, this site is not working now.
                </p>
              </div>
            </div>

            <div className="p-card shadow h-auto col-xs-12 col-sm-12 col-md-5 col-lg-3 mx-auto my-3">
              <img src="/project2.webp" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Billion step uz</h5>
                <p className="card-text">
                  Second project with my bro , as a frontend developer.
                  Unfortunately, this site is not working now.
                </p>
              </div>
            </div>

            <div className="p-card shadow h-auto col-xs-12 col-sm-12 col-md-5 col-lg-3 mx-auto my-3">
              <img src="/project3.webp" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">IT TECHNO PARK</h5>
                <p className="card-text">
                  Official website of IT TECHNO PARK study center. The author is me....
                </p>
                <p className="card-text">
                  <a href="https://it-technopark.netlify.app/" target="_blank" rel="noreferrer">
                    <button className="btn w-100">
                      IT Techno Park Karshi
                    </button>
                  </a>
                </p>
              </div>
            </div>


          </div>

          <div className="row w-100 d-flex flex-wrap justify-content-center align-items-center align-content-center p-0 m-0">
            <div className="shadow h-auto col-xs-12 col-sm-12 col-md-5 col-lg-3 p-card mx-auto my-3">
              <img src="/project4.webp" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">OLTIN VODIY milliy taomlari</h5>
                <p className="card-text">
                  Official website of national restaurant. Made in menu-website style. Easy to load and attractive.
                </p>
                <p className="card-text">
                  <a href="https://oltinvodiy.netlify.app/" target="_blank" rel="noreferrer">
                    <button className="btn w-100">
                      Oltin Vodiy taomlari
                    </button>
                  </a>

                </p>
              </div>
            </div>

            <div className="shadow h-auto col-xs-12 col-sm-12 col-md-5 col-lg-3 p-card mx-auto my-3">
              {/* <img src="/project4.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">IT TECHNO PARK</h5>
                <p className="card-text">
                  Official website of IT TECHNO PARK study center. The author is me....
                </p>
                <p className="card-text">
                   <a href="https://oltinvodiy.netlify.app/" target="_blank">
                   <button className="btn">
                     Oltin Vodiy taomlari
                   </button>
                     </a>

                </p>
              </div> */}
            </div>

            <div className="shadow h-auto col-xs-12 col-sm-12 col-md-5 col-lg-3 p-card mx-auto my-3">
              {/* <img src="/project4.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">IT TECHNO PARK</h5>
                <p className="card-text">
                  Official website of IT TECHNO PARK study center. The author is me....
                </p>
                <p className="card-text">
                   <a href="https://oltinvodiy.netlify.app/" target="_blank">
                   <button className="btn">
                     Oltin Vodiy taomlari
                   </button>
                     </a>

                </p>
              </div> */}
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