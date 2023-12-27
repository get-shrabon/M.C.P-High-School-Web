/* eslint-disable react/no-unescaped-entities */
import Teachers from "../Teachers/Teachers";
const Ourteacher = () => {
  return (
    <div>
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
