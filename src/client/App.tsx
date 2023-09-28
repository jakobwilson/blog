import * as React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./components/Home";
import BlogApp from "./components/Blogs";
import Details from "./components/Details";
import CreateBlog from "./components/CreateBlog";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogApp />} />
        <Route path="/blogpost/:id" element={<Details />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/delete/:id" element={<DeleteBlog />} />
      </Routes>
    </BrowserRouter>
  );
};

const DeleteBlog = () => {
  const { id } = useParams();
  const handleDeleteBlog = () => {
    console.log(`Deleting Blog with ID ${id}`);
  };
  return (
    <div>
      <h2>DeleteBlog</h2>
      <button onClick={handleDeleteBlog}>Confirm Deletion</button>
    </div>
  );
};

export default App;
