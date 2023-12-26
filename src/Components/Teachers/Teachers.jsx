/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Teacher from "./Teacher";

const Teachers = () => {
  const [Teachers, setTeachers] = useState([]);
  const [showAll, setShowAll] = useState(8);
  useEffect(() => {
    fetch("Teachers-Data.json")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);
  return (
    <div className="py-20">
      <div className="text-center">
        <h5 className="underline text-[#ffd900] font-bold text-xl font-mono mb-1">Our Teacher's</h5>
        <h2 className=" mb-5 text-3xl font-bold text-black">
          Explore Experienced Teacher's
        </h2>
      </div>
      <div className="grid container gap-8 mx-auto  2xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2  sm:grid-cols-1">
        {Teachers.slice(0, showAll).map((teacher) => (
          <Teacher key={teacher.id} teacher={teacher}></Teacher>
        ))}
      </div>
      <div className="flex justify-center my-5">
        <div className={showAll === Teachers.length && "hidden"}>
          <button
            onClick={() => setShowAll(Teachers.length)}
            className="btn btn-warning"
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
