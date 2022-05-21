import React, { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
// import Typical from "react-typical";
import Header from "../components/Header"
// import Footer from "../components/Footer"
// import Star from "./star"
// import { Button } from '@material-ui/core/Button';
// import { FcLike } from "react-icons/fc";
import css from "../styles/blog.module.css"
import axios from "axios";
// import Image from "next/image";

// const file = `process.env`

export async function getStaticProps() {

    // const res = await fetch(`${process.env.STRAPI_API}`)
    const res = await axios.get(`${process.env.STRAPI_API}?populate=img`)
    // const data = await res.json()
    const posts = await res.data.data
    // console.log(posts)

    return {
        props: {
            posts,
            // thumb
        }
    }
}

export default function Blog({ posts }) {
    // const Img = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    return (
        <div className={styles.container}>
            <Head>

                <meta charSet="utf-8" />
                <link rel="icon" href="%PUBLIC_URL%/icon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="Everything about IT and news"
                />
                <meta
                    property="og:title"
                    content="Blog || Jamshid Jurakulov"
                />
                <meta property="og:type" content="form" />
                <meta property="og:image" content="%PUBLIC_URL%/icon.ico" />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/icon.ico" />


                <title>Blog | blog page</title>

            </Head>
            <Header />


            <main>
                {/* <div className="stars"></div>
                <div className="stars1"></div>
                <div className="stars2"></div> */}


                <div className={styles.bigBar}>
                    <div className={styles.postsBar}>
                        {/* <h1 className="display-4 ">
                            For now, blog page is building
                        </h1>
                        <p className="lead mb-5">
                            See it soon!
                        </p> */}
                        {posts && posts.map((post) =>

                            <Link href={`/${post.attributes.slug}`} key={post.id} passHref >
                                <a key={post.id} style={{ margin: "20px 0 40px 0" }}>
                                    <div className={css.imgWrapper} key={post.id}>
                                        <img src={`https://strapi-ced7b.ondigitalocean.app${post.attributes.img.data.attributes.url}`} alt="" />
                                        <div className={css.overlay}>
                                            <h2>{post.attributes.title}</h2>
                                            <p>{post.attributes.content.slice(0, 50) + "..."}</p>
                                        </div>
                                    </div>
                                </a>

                            </Link>

                        )}
                    </div>
                </div>




            </main >









            <style jsx>{`

        ::selection{
            color: #8d0f0f;
            background-color: black;
            }
  
        
      `}</style>


        </div >
    )
}



