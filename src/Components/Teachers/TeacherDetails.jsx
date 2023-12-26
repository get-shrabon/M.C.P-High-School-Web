import { useLoaderData, useParams } from "react-router-dom";

const TeacherDetails = () => {
  const Teacher = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const teacher = Teacher.find((teacher) => teacher.id === idInt);
  const { teacher_name, teacher_category, image_url, short_description } =
    teacher;
  return (
    <div className="singlePageBG py-20 2xl:py-32">
      <div className="container mx-auto shadow-lg bg-white w-2/3 lg:p-20 lg:flex md:flex sm:flex-none sm:p-5 gap-5">
        <div className="">
          <img className="w-100 mx-auto" src={image_url} alt="" />
        </div>
        <div className="">
          <p className=" font-semibold text-2xl text-slate-500">
            {teacher_category}
          </p>
          <h1 className="text-4xl my-2 font-semibold text-slate-800">
            {teacher_name}
          </h1>
          <p className=" font-mono text-slate-500">{short_description}</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;
