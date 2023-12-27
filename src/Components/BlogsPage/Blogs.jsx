/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogBanner from "./BlogBanner";
import { Helmet } from "react-helmet-async";


const Blogs = () => {
  const [blogs , setBlog] = useState([])
  const [showAll , setShowAll] = useState(6)
   useEffect(() => {
     fetch("Dummy-Blog.json")
       .then((res) => res.json())
       .then((data) => setBlog(data));
   }, []);
  return (
    <div>
      <Helmet>
        <title>M.C.P | Blogs</title>
      </Helmet>
      <BlogBanner></BlogBanner>
      <div className="blogs__container py-20">
        <div className="text-center">
          <h5 className="underline text-[#ffd900] font-bold text-xl font-mono mb-1">
            Our Blog's
          </h5>
          <h2 className=" mb-5 text-3xl font-bold text-black">
            Explore Popular Blog's
          </h2>
        </div>
        <div className="container mx-auto grid gap-8 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {blogs.slice(0, showAll).map((blog) => (
            <div key={blog.id}>
              <div data-aos="fade-right" className=" rounded blog">
                <div className="overflow-hidden">
                  <img
                    className="w-[100%] h-[200px] duration-500"
                    src={blog.image_url}
                    alt=""
                  />
                </div>
                <div className="shadow bg-white">
                  <Link>
                    <h1 className="text-2xl p-2 text-slate-600 font-semibold duration-500">
                      {blog.title}
                    </h1>
                  </Link>
                  <p className="px-2 font-serif">{blog.description}</p>
                  <div className="border-t mt-3 p-2 flex justify-between items-center">
                    <p>Date : 15 June 2023</p>
                    <p>By Guest Admin</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-5">
          <div className={showAll === blogs.length && "hidden"}>
            <button
              onClick={() => setShowAll(blogs.length)}
              className="btn btn-warning"
            >
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;