import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BlogJoined } from "../../types";



const BlogApp = () => {
  const [blogs, setBlogs] = useState<BlogJoined[]>([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs");
        const blogs = await res.json();
        setBlogs(blogs);
      } catch (error) {
        console.error(error);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <>
      <div className="navbar">
        <a href="/" className="home-link">
          Home
        </a>
        <Link to="/blogs" className="blog-link">
          Blogs
        </Link>
      </div>
      <div className="container">
        <h1>BLOGS</h1>
      </div>
      <ul className="container">
        {blogs.map((blog) => (
          <li key={blog.id}>
            <p className="blog-title">{blog.title}</p>
            <span>
              <div>
                <Link to={`/blogpost/${blog.id}`} className="read-more">Read More</Link>
              </div>
            </span>
          </li>
        ))}
      </ul>
      <Link to="/create"><div className="post-btn end-0 bottom-0">POST</div></Link>
    </>
  );
};

export default BlogApp;
