/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import Teachers from "../Teachers/Teachers";
const Ourteacher = () => {
  return (
    <div>
      <Helmet>
        <title>M.C.P | Teachers</title>
      </Helmet>
      <div className="teacher__banner py-32 2xl:py-52 bg-no-repeat bg-cover bg-top">
        <h1 className="text-4xl font-bold text-center text-white font-mono">
          Our All Favourite Teacher's
        </h1>
      </div>
      <Teachers></Teachers>
    </div>
  );
};

export default Ourteacher;
