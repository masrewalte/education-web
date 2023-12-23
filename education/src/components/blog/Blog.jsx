import React from "react";
import "./Blog.css";
import BlogCard from "./BlogCard";
import Back from "../common/Back/Back";

const Blog = () => {
  return (
    <>
      <Back title="Blog Posts" />
      <section className="blog padding">
        <div className="container grid2">
          <BlogCard />
        </div>
      </section>
    </>
  );
};

export default Blog;
