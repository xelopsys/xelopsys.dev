import Link from "next/link"
import Head from "next/head"
import Header from "../components/Header"
// import Footer from "../components/Footer"
// import styles from "../../styles/Home.module.css"
import css from "../styles/blog.module.css"
import axios from "axios"

const file = `process.env`

export default function Post({ id, blogPost, date }) {
    const url = `https://xelopsys.uz`
    return (
        <div className="h-100">
            <Head >
                <title>Blog content</title>
                <meta name="description" content={blogPost.content} />
                <meta property="og:title" content={blogPost.title} />
                {/* <meta property="og:description" content={blogPost.description} /> */}
                {/* <meta property="og:image" content={blogPost.image} /> */}
                <meta property="og:url" content={`https://xelopsys.com/blog/${id}`} />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Xelopsys" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:locale:alternate" content="en_US" />
                {/* <meta property="og:locale:alternate" content="en_US" /> */}

            </Head>
            <Header />
            <div className={css.blogPost} style={blogPost.url ? { height: "max-content" } : { height: "max-content" }}>
                <div className={css.post}>
                    <p>{date}</p>
                    <h1>{blogPost.title}</h1>
                    <p>{blogPost.content}</p>
                    {blogPost.url ?
                        <iframe src={`${blogPost.url}`} className={css.iframe} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        : null}
                    <br />
                    {blogPost.website &&
                        <p> Here is official website {'->'}
                            <a href={`${blogPost.website}`}>{blogPost.title}</a>
                        </p>
                    }
                    {blogPost.social &&
                        <p> Here is socials {'->'}
                            <a href={`${blogPost.social}`}>{blogPost.title}</a>
                        </p>
                    }
                    <Link href="/blog" passHref key={id}>
                        <a>
                            {true && `<-all posts`}
                        </a>
                    </Link>
                </div>


            </div>
            {/* <Footer style={false} /> */}
            <style jsx>{`
        ::selection{
            color: #8d0f0f;
            background-color: black;
            }
  
        
      `}</style>
        </div>
    )
}



export async function getStaticPaths() {
    const res = await axios.get(process.env.STRAPI_API)
    const data = res.data

    const paths = data.data.map(post => ({
        params: {
            slug: post.attributes.slug
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { slug } = params

    const res = await axios.get(`${process.env.STRAPI_API}`)
    const findOne = res.data
    const result = findOne.data.find(post => post.attributes.slug === slug)

    const blogPost = result.attributes

    const id = result.id

    const date = blogPost.createdAt.split('T')[0].split('-')
    const getData = (date) => {
        const dateString = new Date(date)
        return dateString.toDateString()
    }
    // console.log(getData(date))
    return {
        props: {
            id,
            blogPost,
            date: getData(date)
        }
    }

}