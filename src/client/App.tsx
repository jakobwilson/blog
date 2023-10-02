import * as React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./components/Home";
import BlogApp from "./components/Blogs";
import Details from "./components/Details";
import CreateBlog from "./components/CreateBlog";
import DeleteBlog from "./components/DeleteBlog";


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



export default App;
