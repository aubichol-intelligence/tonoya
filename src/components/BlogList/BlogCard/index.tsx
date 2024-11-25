import Link from 'next/link';

const BlogCard = ({ post }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '16px' }}>
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <Link href={`/blog/${post.id}`}>
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;