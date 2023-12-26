/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Blog from "./Blog";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("Dummy-Blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="py-20 blogs__container">
      <div className="text-center">
        <h5 className="underline text-[#ffd900] font-bold text-xl font-mono mb-1">
          Our Blog's
        </h5>
        <h2 className=" mb-5 text-3xl font-bold text-black">
          Explore Popular Blog's
        </h2>
      </div>
      <div className="container mx-auto grid gap-8 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {blogs.slice(0, 9).map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
      <div className="flex justify-center my-5">
        <Link to="/blogs">
          <button className="btn btn-warning">See All Blog's</button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
