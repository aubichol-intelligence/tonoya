import Link from 'next/link';
// import { Helmet, HelmetProvider } from 'react-helmet-async';
import Head from 'next/head';
// import blogPosts from '../../../components/data/blogs.json';
import blogPosts from '../../../components/data/pictures';
// import Image from 'next/image';
import "./Blog.css";
import parse from 'html-react-parser';
import BlogOverview from "../../blogSum1/page"

type Params = Promise<{ slug: string }>

// Generate metadata dynamically
export async function generateMetadata(props: { params: Params }) {
    const params = await props.params
    const slug = params.slug

    const response = await fetch(`https://tonoyabd.com/api/v1/blog/getslug/${slug}`, {
        method: 'GET',
        headers: {
            Authorization: process.env.API_TOKEN || '', // Use environment variable for the token
        },
    });

    if (!response.ok) {
        return {
            title: 'Post Not Found',
            description: 'The requested blog post could not be found.',
        };
    }

    const post = await response.json();
    // console.log(post);

    return {
        title: post.meta_title || post.title || 'Untitled',
        description: post.meta_description?.slice(0, 150) + '...' || post.short_description?.slice(0, 150) + '...' || 'No description available.',
    };
}

// Dynamic blog post page
// export default async function Page({ params }: { params: { slug: string } }) {
export default async function Page(props: { params: Params }) {
    const params = await props.params
    const slug = params.slug

    // const response = await fetch(`https://tonoyabd.com/api/v1/blog/get/${slug}`, {
    //     method: 'GET',
    //     headers: {
    //         Authorization: process.env.API_TOKEN || '',
    //     },
    // });
    const response = await fetch(`https://tonoyabd.com/api/v1/blog/getslug/${slug}`, { cache: 'no-store' }) // Ensure fresh data fetch for dynamic pages);

    if (!response.ok) {
        return (
            <div>
                <h2>Post not found</h2>
                <Link href="/blog">Back to Blog</Link>
            </div>
        );
    }

    const post = await response.json();
    // console.log(post);

    // const defaultImageUrl = "https://i.ibb.co/28NtxhS/Blog-Picture1.jpg"; // Ensure this file exists in the public folder.
    // const imageUrl = post.imageUrl || defaultImageUrl;

    return (
        // <HelmetProvider>
        <div style={{ paddingTop: "0.1rem", backgroundColor: "#68d689" }}>
            {/* <Helmet> */}
            <Head>
                <title>{post.title}</title>
            </Head>
            {/* </Helmet> */}

            <div className="blog-page">
                {/* Header Section */}
                <header className="blog-header">
                    <h1 className="blog-title">{post.title}</h1>
                    {/* <p className="blog-subtitle">Season 1 | Where the Heart Is</p> */}

                    {/* <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }} > */}
                    <div>
                        <p className="blog-subtitle"><span className='text-bold'>Date:</span> {post.created_at.split(" ")[0]}</p>
                        <p className="blog-subtitle"><span className='text-bold'>Author:</span> {post.author}</p>
                        <p className="blog-subtitle"><span className='text-bold'>Tags:</span> {post.tags?.length > 0 ? post.tags.join(", ") : "N/A"}</p>
                    </div>
                    {/* <div style={{ display: "flex", justifyContent: "center" }} >
                            <Link href="/blog">Back</Link>
                        </div> */}
                    {/* </div> */}
                </header>

                <div style={{ display: "flex", justifyContent: "center" }} >
                    <div className='prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl outline-none' >
                        {post?.content && parse(post?.content)}
                    </div>
                </div>

                {/* <div
                    dangerouslySetInnerHTML={{ __html: post?.content }}
                    style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}
                /> */}

                <div style={{ display: "flex", justifyContent: "center" }} >
                    <Link href="/blog" style={{ backgroundColor: "#68d689" }}>Back to Blog List</Link>
                </div>


                {/* Footer */}
                {/* <footer className="blog-footer">
                    <p className="footer-note">© 2024 Blog Page. All rights reserved.</p>
                </footer> */}
            </div>

            <BlogOverview from="blog" />
        </div>
        // </HelmetProvider>
    );
}

// Generate static params for SSG
export async function generateStaticParams(): Promise<{ slug: string }[]> {
    // const posts = await fetch('https://.../posts').then((res) => res.json())

    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

// export const config = {
//     dynamicParams: false,
// };
