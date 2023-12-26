import PropTypes from "prop-types";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const { title, image_url, description } = blog;
  return (
    <div data-aos="fade-right" className=" rounded blog">
      <div className="overflow-hidden">
        <img
          className="w-[100%] h-[200px] duration-500"
          src={image_url}
          alt=""
        />
      </div>
      <div className="shadow bg-white">
        <Link>
          <h1 className="text-2xl p-2 text-slate-600 font-semibold duration-500">
            {title}
          </h1>
        </Link>
        <p className="px-2 font-serif">{description}</p>
        <div className="border-t mt-3 p-2 flex justify-between items-center">
          <p>Date : 15 June 2023</p>
          <p>By Guest Admin</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
