import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

interface CreateBlogProps {}

const CreateBlog = (props: CreateBlogProps) => {
  const nav = useNavigate();

  const [formData, setFormData] = React.useState({
    title: "",
    content: "",
    authorid: 2,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const msg = await res.json();
      if (res.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Blog Post Created",
          text: "Your blog post has successfully been created!",
        });
        nav("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while creating your post.",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

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
      <h1 className="create-title">Create a Blog Post</h1>
      <form className="container">
        <input
          className="form-control"
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          className="form-control content"
          type="text"
          name="content"
          placeholder="Whats this blog about?"
          value={formData.content}
          onChange={handleChange}
        />
        <button className="btn btn-primary" onClick={handleClick}>
          POST
        </button>
      </form>
    </>
  );
};

export default CreateBlog;
