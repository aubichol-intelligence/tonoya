{/*import BlogCard from './BlogCard';

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



// src/components/BlogGrid.jsx
import React from "react";
//import { useNavigate } from "react-router-dom";
import blogs from "../data/pictures";
import "./BlogList.css";

const BlogGrid = () => {
  //const navigate = useNavigate();

  return (
    <div className="grid-container">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="blog-card"
          //onClick={() => navigate(blog.link)}
        >
          <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
          <div className="blog-content">
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-description">{blog.short_description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;*/}


import React from "react";
import Link from "next/link";
import "./BlogList.css";

type BlogPost = {
  imageUrl: string;
  title: string;
  id: string;
  short_description: string;
  content: string;
  author: string;
};

type BlogListProps = {
  posts: BlogPost[]; // Define the type of the posts prop
};

const BlogGrid: React.FC<BlogListProps> = ({ posts }) => {
  const defaultImage = "https://i.ibb.co/28NtxhS/Blog-Picture1.jpg"; // Path to your default image

  return (
    <div className="grid-container">
      {posts.map((blog) => {
        // Extract image URLs from blog content
        const imageUrls = [...blog.content.matchAll(/<img[^>]+src="([^">]+)"/g)].map(
          (match) => match[1]
        );

        // Use the first extracted image, blog.imageUrl, or the default image
        const imageSrc = imageUrls[0] || blog.imageUrl || defaultImage;

        return (
          <div key={blog.id} className="blog-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt={blog.title}
              className="blog-image"
            // onError={(e) => {
            //   // Fallback to the default image if the image fails to load
            //   (e.target as HTMLImageElement).src = defaultImage;
            // }}
            />

            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>

              <p className="blog-description">{blog.short_description}</p>

              <Link href={`/blog/${blog.id}`}>
                <button className="read-more-button">Read More</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogGrid;


