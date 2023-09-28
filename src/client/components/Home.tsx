import React from "react";
import { Link } from "react-router-dom";
import "../scss/app.scss";

const Home = () => {
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
        <h1>Welcome to My Personal Blog Lab!</h1>
      </div>
      <div>
        <h2 className="summary">
          The purpose of this lab is to make a your own personal blog .. full
          stack! You'll use everything you've learned from the Database lectures
          to make a schema, connect it to your Express server, write REST API
          Endpoints to get your data, and display it all using React. Let's
          crush it!
        </h2>
        <hr />
        <ul>
          {" "}
          <p className="unordered-list">Database</p>
          <li>Create a new database named blogs.</li>
          <li>Create required tables.</li>
          <li>
            Create a stored procedure named spBlogTags to pull back the tag of a
            blog.
          </li>
          <li>Create a new user with privileges for your Blogs database.</li>
          <br />
          <p className="unordered-list">Express API</p>
          <li>Install mysql and its typings into your project.</li>
          <li>
            Make sure your project runs via npm run dev and going to
            localhost:3000/
          </li>
          <li>
            Set up your database config, and don't forget to include it in your
            .gitignore!
          </li>
          <li>Use your config object to connect to your mysql database.</li>
          <li>
            Write your DB queries and REST API Endpoints to: GET all Blogs GET
            one Blog POST a new Blog, with at least one tag PUT to edit a Blog
            DELETE to delete a blog GET all Blogtags for a blogid
          </li>
          <br />
          <p className="unordered-list">React Frontend</p>
          <li>Create a component to display all Blogs.</li>
          <li>
            Create a component to show one Blog. Add a button that links to
            another component to edit this Blog. The Edit Blog component should
            allow you to save any edits to your Blog, or delete that Blog.
          </li>
          <li>Create a component to add a new Blog post.</li>
          <li> The all Blogs component should display previews of the blog posts
            that a user can click on, which would navigate to the single Blog
            component that would display all the information of the Blog post. <br />
            Don't forget to use your blog tags at least on the single Blog
            component!</li>
        </ul>
        <Link to="/create"><div className="btn btn-primary">POST</div></Link>
      </div>
    </>
  );
};

export default Home;
