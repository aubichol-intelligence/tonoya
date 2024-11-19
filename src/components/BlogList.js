import BlogCard from './BlogCard';

const BlogList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;