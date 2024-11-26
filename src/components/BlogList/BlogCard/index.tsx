import Link from 'next/link';

type Post = {
  imageUrl: string,
  title: string,
  id: string,
  short_description: string,
  content: string,
  author: string
};

const BlogCard = ({ post }: { post: Post }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '16px' }}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link href={`/blog/${post.id}`}>
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;