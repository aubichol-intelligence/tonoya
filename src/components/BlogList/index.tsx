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


// src/components/BlogGrid.jsx
import React from "react";
import blogs from "../data/pictures";
import "./BlogList.css";

const BlogGrid = () => {
  return (
    <div className="grid-container">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-card">

          
            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
          

          
          <div className="blog-content">
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-description">{blog.short_description}</p>
            <button className="read-more-button">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;

