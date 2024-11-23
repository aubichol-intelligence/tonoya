import Link from 'next/link';
import blogPosts from '../../../components/data/blogs.json';

interface Params {
    slug: string;
}

export default function BlogPostPage({ params }: { params: Params }) {
    const { slug } = params;
    const post = blogPosts.find((post) => post.id === slug);

    if (!post) {
        return <h2>Post not found</h2>;
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