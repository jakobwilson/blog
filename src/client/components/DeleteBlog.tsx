import React from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const DeleteBlog = () => {
  const { id } = useParams();
  const handleDeleteBlog = async () => {
    const res = await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
     
    });

    if (res.ok) {
      Swal.fire("Blog Deleted", "", "success");
    } else {
      Swal.fire(
        "Error",
        "An error occurred while deleting the blog.",
        "error"
      );
    }
    console.log(`Deleting Blog with ID ${id}`);
  };


  return (
    <div>
      <h2>DeleteBlog</h2>
      <button onClick={handleDeleteBlog}>Confirm Deletion</button>
    </div>
  );
};

export default DeleteBlog;