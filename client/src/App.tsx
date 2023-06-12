import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Work from "./pages/Projects/Work";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Article from "./pages/Blog/Article";
import Carporate from "./pages/Projects/Carporate";

const App: React.FC = () => {
  return (
    <div className="web--container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/article/:userId" element={<Article />} />
        <Route path="/work/carporate" element={<Carporate />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
