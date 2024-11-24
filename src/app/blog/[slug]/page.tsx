import Link from 'next/link';
import { notFound } from 'next/navigation'; // To handle 404 pages
import blogPosts from '../../../components/data/blogs.json';

interface Params {
    slug: string;
}

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
        // return (
        //     <div>
        //         <h2>Post not found</h2>
        //         <Link href="/blog">Back to Blog</Link>
        //     </div>
        // );
        notFound();
        return null; // This is unreachable due to `notFound()`, but satisfies TypeScript
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Author: {post.author}</p>
            <Link href="/blog">Back to Blog</Link>
        </div>
    );
}

// Generate static params for SSG
export async function generateStaticParams() {

    return blogPosts.map((post) => ({
        // slug: post.id.toString(), // Match `[slug]` in the route
        slug: post.id, // Match `[slug]` in the route
    }));
}

// export const config = {
//     dynamicParams: false,
// };
