import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Teacher = ({ teacher }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const { teacher_name, teacher_category, image_url, id } = teacher;
  return (
    <div data-aos="fade-left" className="text-center">
      <div className="bg-info py-5">
        <img
          className="rounded-full p-5 shadow-md mx-auto w-[150px] h-[150px] object-cover"
          src={image_url}
          alt=""
        />
      </div>
      <div className="shadow p-5">
        <h1 className="text-2xl font-semibold text-slate-800">
          {teacher_name}
        </h1>
        <p className="my-2 font-mono text-slate-500">{teacher_category}</p>
        <Link to={`/singleTeacher/${id}`}>
          <button className="btn btn-info">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Teacher;
Teacher.propTypes = {
  teacher: PropTypes.object.isRequired,
};
