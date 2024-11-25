import Link from 'next/link';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// import { notFound } from 'next/navigation'; // To handle 404 pages
import blogPosts from '../../../components/data/blogs.json';
import Image from 'next/image';
import "./page.module.css";
import img from "../../../../public/coupleImage.jpg";
import { notFound } from 'next/navigation';

// interface Params {
//     slug: string;
// }
type Params = { slug: string };

// Generate metadata dynamically
export async function generateMetadata({ params }: { params: Params }) {
    const { slug } = await params;
    const post = blogPosts.find((post) => post.id === slug);

    return {
        title: post ? post.title : 'Post Not Found',
        description: post ? post.excerpt : 'The requested blog post could not be found.',
    };
}

// Dynamic blog post page
export default async function BlogPostPage({ params }: { params: Params }) {
    const { slug } = await params;

    // Find the blog post
    const post = blogPosts.find((post) => post.id === slug);

    if (!post) {
        notFound();
        // notFound();
        // return null; // This is unreachable due to `notFound()`, but satisfies TypeScript
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>Individual Blog Page</title>
            </Helmet>

        <div className="blog-page">
            {/* Header Section */}
            <header className="blog-header">
                <h1 className="blog-title">{post.title}</h1>
                <p className="blog-subtitle">Season 1 | Where the Heart Is</p>
                <p>Author: {post.author}</p>
            </header>

            {/* Hero Image Section */}
            <div className="blog-hero">
                <Image
                    // src="../../../../public/file.svg"
                    src={img}
                    alt="Blog Image"
                    priority
                    // layout="responsive"   // Make sure the image scales
                    width={800}
                    height={400}
                    className="hero-image"
                />
            </div>

            {/* Content Section */}
            <article className="blog-content">
                {/* <hr /> */}
                <p>{post.content}</p>
                <hr />
                <p>
                    Nestled in the heart of their Chennai home, Dipika and Dinesh share an
                    abode filled with stories, emotions, and memories. Each corner reflects
                    their vibrant personalities and cherished moments.
                </p>
                <p>
                    Their home is more than a structure; it’s a canvas of life where love,
                    passion, and dreams converge. From intricately designed interiors to
                    stunning outdoor spaces, it speaks of their journey.
                </p>
            </article>

            <Link href="/blog">Back to Blog</Link>

            {/* Footer */}
            <footer className="blog-footer">
                <p className="footer-note">© 2024 Blog Page. All rights reserved.</p>
            </footer>
        </div>
        </HelmetProvider>

    );
}

// Generate static params for SSG
// export async function generateStaticParams() {
export async function generateStaticParams(): Promise<{ slug: string }[]> {
    return blogPosts.map((post) => ({
        slug: post.id,
    }));
}

// export const config = {
//     dynamicParams: false,
// };
