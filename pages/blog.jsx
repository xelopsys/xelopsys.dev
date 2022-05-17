import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
// import Typical from "react-typical";
import Header from "../components/Header"
import Footer from "../components/Footer"
// import Star from "./star"
// import { Button } from '@material-ui/core/Button';
// import { FcLike } from "react-icons/fc";
import css from "../styles/blog.module.css"


// const file = `process.env`

export default function Blog({ posts, thumb }) {
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
                        (
                            <Link href={`/${post.attributes.slug}`} key={post.id} passHref>
                                <a key={post.id}>
                                    <div className={css.imgWrapper} key={post.id}>
                                        <img src={`${process.env.STRAPI_URL}${thumb}`} alt="" />
                                        <div className={css.overlay}>
                                            <h2>{post.attributes.title}</h2>
                                            <p>{post.attributes.content.slice(0, 50) + "..."}</p>
                                        </div>
                                    </div>
                                </a>

                            </Link>
                        )
                        )}
                        {/* <hr /> */}


                        {/* <Link href="/">
                            <a href="">
                                Back to home
                            </a>

                        </Link> */}
                    </div>
                </div>




            </main >








            <Footer />

            <style jsx>{`

        ::selection{
            color: #8d0f0f;
            background-color: black;
            }
  
        
      `}</style>


        </div >
    )
}



export async function getStaticProps() {

    const res = await fetch(`${process.env.STRAPI_API}`)
    const img = await fetch(`${process.env.STRAPI_API}?populate=img`).then(res => res.json())
    const data = await res.json()
    const posts = data.data
    // const img = await fetch(`${process.env.STRAPI_API}?populate=img`).then(res => res.json())
    // console.log()
    const image = img.data.map(post => post.attributes.img.data.attributes.url)
    const thumb = image.toString()
    // console.log(posts[0].id)
    // console.log(posts[0].attributes.title)

    return {
        props: {
            posts,
            thumb
        }
    }
}