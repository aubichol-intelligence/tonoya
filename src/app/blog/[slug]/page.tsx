import Link from 'next/link';
// import { Helmet, HelmetProvider } from 'react-helmet-async';
import Head from 'next/head';
// import blogPosts from '../../../components/data/blogs.json';
import blogPosts from '../../../components/data/pictures';
// import Image from 'next/image';
import "./Blog.css";
import parse from 'html-react-parser';

type Params = Promise<{ slug: string }>

// Generate metadata dynamically
export async function generateMetadata(props: { params: Params }) {
    const params = await props.params
    const slug = params.slug

    const response = await fetch(`https://tonoyabd.com/api/v1/blog/get/${slug}`, {
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
    const response = await fetch(`https://tonoyabd.com/api/v1/blog/get/${slug}`);

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
        <>
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

                    <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }} >
                        <p className="blog-subtitle">Author: {post.author}</p>
                        <div style={{ display: "flex", justifyContent: "center" }} >
                            <Link href="/blog">Back</Link>
                        </div>
                    </div>
                </header>

                {/* Hero Image Section */}
                {/* <div className="blog-hero">
                    <Image
                        // src="../../../../public/file.svg"
                        src={imageUrl}
                        alt="Blog Image"
                        priority
                        layout="responsive"   // Make sure the image scales
                        width={600}
                        height={200}
                        className="hero-image"
                    />
                </div> */}

                {/* Content Section */}
                {/* <article className="blog-content">
                    <p>{post.content}</p>
                    <hr />
                    <p>
                        Nestled in the heart of their Chennai home, Dipika and Dinesh share an
                        abode filled with stories, emotions, and memories. Each corner reflects
                        their vibrant personalities and cherished moments.
                    </p>
                    <p>
                        Their home is more than a structure; it is a canvas of life where love,
                        passion, and dreams converge. From intricately designed interiors to
                        stunning outdoor spaces, it speaks of their journey.
                    </p>
                </article> */}

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
                    <Link href="/blog">Back to Blog List</Link>
                </div>


                {/* Footer */}
                {/* <footer className="blog-footer">
                    <p className="footer-note">© 2024 Blog Page. All rights reserved.</p>
                </footer> */}
            </div>
        </>
        // </HelmetProvider>
    );
}

// Generate static params for SSG
export async function generateStaticParams(): Promise<{ slug: string }[]> {
    // const posts = await fetch('https://.../posts').then((res) => res.json())

    return blogPosts.map((post) => ({
        slug: post.id,
    }));
}

// export const config = {
//     dynamicParams: false,
// };
