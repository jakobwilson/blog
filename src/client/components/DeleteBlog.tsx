import React from "react";

const DeleteBlog = ({ blogId, onDelete }) => {
  const handleDelete = () => {
   
    onDelete(blogId);
  };

  return (
    <button onClick={handleDelete}>
      Delete Blog
    </button>
  );
};

export default DeleteBlog;