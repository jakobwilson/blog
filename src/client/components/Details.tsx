import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { BlogJoined } from "../../types";



  const BlogDetails = () => {
    const nav = useNavigate();
    const { id } = useParams<{ id?: string }>();
    const blogId = id ? parseInt(id, 10) : null;
    const [blog, setBlog] = useState<BlogJoined | null>(null);

    useEffect(() => {
        async function fetchBlogDetails() {
            try {
                const res = await fetch(`/api/blogs/${blogId}`);
                const blogData = await res.json();
                if (res.ok) {
                    setBlog(blogData);
                }
            } catch (err) {
                console.log(err)
            }
        }

        fetchBlogDetails();
    }, [blogId]);

    const handleDeleteBlog = async () => {
        const { isConfirmed } = await Swal.fire({
          title: "Are you sure?",
          text: "You are about to delete this Blog!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "Cancel",
        });

        if (isConfirmed) {
            const deleteres = await fetch(`/api/blogs/${blogId}`, {
              method: "DELETE",
            });
      
            if (deleteres.ok) {
              Swal.fire("Blog Deleted", "", "success");
              nav("/");
            } else {
              Swal.fire(
                "Error",
                "An error occurred while deleting the blog.",
                "error"
              );
            }
          }
        };
        const [isEditing, setIsEditing] = useState(false);
        const [editedTitle, setEditedTitle] = useState(
          blog ? blog.title : ""
        );
        const [editedContent, setEditedContent] = useState(
          blog ? blog.content : ""
        );
        const toggleEditMode = () => {
          setIsEditing(!isEditing);
        };
      
        const handleUpdateBlog = async (e:React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          try {
            const updateData = {
              title: editedTitle,
              content: editedContent,
            };
      
            const res = await fetch(`/api/blogs/${blogId}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updateData),
            });
      
            if (res.ok) {
              Swal.fire("Blog Updated", "", "success");
              setIsEditing(false);
            } else {
              Swal.fire(
                "Error",
                "An error occurred while updating the blog.",
                "error"
              );
            }
          } catch (error) {
            console.error(error);
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
      <div className={isEditing ? "" : "details"}>
      {blog ? (
        <div>
          {
            !isEditing && <div className="details-page">
              <h1 className="details-title">Blog Details</h1>
          <p>ID: {blog.id}</p>
          <p>Author: {blog.name}</p>
          <p>Title: {blog.title}</p>
          <p>Content: {blog.content}</p>
          <p>Hashtag: {blog.tag}</p>
          <p>Created: {blog._created}</p>
          </div>
          }
        
          {isEditing ? (
            <form className="edit-form">
              <input className="edit-title"
                type="text"
                name="title"
                placeholder="title"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              <input className="edit-content"
                type="text"
                name="content"
                placeholder="content"
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              />
              <div className="row">
              <button className="edit-blog-btn col" onClick={toggleEditMode}>
            Cancel 
            </button>
              <button className="edit-blog-btn" onClick={handleUpdateBlog}>Submit</button>
              
              </div>
            </form>
          ) : (
            <div>
              <p > {editedTitle}</p>
              <p > {editedContent}</p>
            </div>
          )}
          
           {!isEditing && 
           <div className="container">
          <button className="edit-blog" onClick={toggleEditMode}>
            
            {!isEditing  && "Edit" }
          </button>
             <button className="delete-blog" onClick={handleDeleteBlog}>
             Delete
           </button>
           </div>
           }
        
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
      </>
      )
  
    }

 

  export default BlogDetails;
  