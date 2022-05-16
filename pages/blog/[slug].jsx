import Link from "next/link"
import Head from "next/head"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
// import styles from "../../styles/Home.module.css"
import css from "../../styles/blog.module.css"


const file = `process.env`

export default function Post({ id, blogPost, date }) {
    return (
        <div className="h-100">
            <Head >
                <title>{blogPost.title}</title>
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
            <div className={css.blogPost}>
                <div className={css.post}>
                    <p>{date}</p>
                    <h1>{blogPost.title}</h1>
                    <p>{blogPost.content}</p>
                    <Link href="/blog" key={id}>
                        <a>
                            {blogPost && `<-all posts`}
                        </a>
                    </Link>
                </div>


            </div>
            <Footer />
        </div>
    )
}



export async function getStaticPaths() {
    const res = await fetch(process.env.STRAPI_API)
    const data = await res.json()

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

    const res = await fetch(`${process.env.STRAPI_API}/?slug=${slug}`)
    const data = await res.json()
    const blogPost = data.data[0].attributes
    const id = data.data[0].id
    // console.log(blogPost)
    // console.log(blogPost.attributes.createdAt.split('T')[0].split('-'))
    const date = blogPost.createdAt.split('T')[0].split('-')
    const getData = (date) => {
        const dateString = new Date(date)
        return dateString.toDateString()
    }
    console.log(getData(date))
    return {
        props: {
            id,
            blogPost,
            date: getData(date)
        }
    }

}