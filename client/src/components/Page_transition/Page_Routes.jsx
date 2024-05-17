import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "../../page/Home/Home";
import About from "../../page/About/About";
import Blog from "../../page/Blog/Blog";
import Contact from "../../page/Contact/Contact";
import Services_page from "../../page/Services/Services_page";

export const Page_Routes = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/services" element={<Services_page />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
