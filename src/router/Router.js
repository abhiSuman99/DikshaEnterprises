import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutPage from "../pages/About";

import BlogPostDetail from "../pages/BlogPostDetails";
import BlogPage from "../pages/Blog";
import Career from "../pages/Career";
import Contact from "../pages/Contact";
import ProductSubDivision from "../pages/ProductSubDivision";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blog" element={<BlogPage/>} />
      <Route path="/blog/:id" element={<BlogPostDetail />} />
      <Route path="/career" element={<Career/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/product/:category" element={<ProductSubDivision/>} />
    </Routes>
  );
}

export default AppRoutes;
