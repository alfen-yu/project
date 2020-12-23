import React from "react";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
// import "../NewsStyles.css";
import NewsCard from "../NewsCard";

function News() {
  return (
    <div className="news-container">
      <div>
        <NewsCard />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default News;
