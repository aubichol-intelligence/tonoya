import Link from 'next/link';
// import { notFound } from 'next/navigation'; // To handle 404 pages
import blogPosts from '../../../components/data/blogs.json';
// import Image from 'next/image';
// import styles from "./page.module.css";
import "./page.module.css";

// interface Params {
//     slug: string;
// }
type Params = Promise<{ slug: string }>;

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
        return (
            <div>
                <h2>Post not found</h2>
                <Link href="/blog">Back to Blog</Link>
            </div>
        );
        // notFound();
        // return null; // This is unreachable due to `notFound()`, but satisfies TypeScript
    }

    return (
        // <div>
        //     <h2>{post.title}</h2>
        //     <p>{post.content}</p>
        //     <p>Author: {post.author}</p>
        //     <Link href="/blog">Back to Blog</Link>
        // </div>
        <div className="blog-page">
            {/* Header Section */}
            <header className="blog-header">
                <h1 className="blog-title">Dipika Pallikal Karthik and Dinesh Karthik</h1>
                <p className="blog-subtitle">Season 1 | Where the Heart Is</p>
            </header>

            {/* Hero Image Section */}
            {/* <div className="blog-hero">
                <Image
                    src="/images/blog-image.jpg"
                    alt="Dipika and Dinesh Karthik"
                    width={1200}
                    height={600}
                    className="hero-image"
                />
            </div> */}

            {/* Content Section */}
            <article className="blog-content">
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

            {/* Footer */}
            <footer className="blog-footer">
                <p className="footer-note">© 2024 Blog Page. All rights reserved.</p>
            </footer>
        </div>
    );
}

// Generate static params for SSG
// export async function generateStaticParams() {

//     return blogPosts.map((post) => ({
//         // slug: post.id.toString(), // Match `[slug]` in the route
//         slug: post.id, // Match `[slug]` in the route
//     }));
// }
export async function generateStaticParams(): Promise<{ slug: string }[]> {
    return blogPosts.map((post) => ({
        slug: post.id,
    }));
}


// export const config = {
//     dynamicParams: false,
// };
