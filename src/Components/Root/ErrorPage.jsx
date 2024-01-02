import { Link } from "react-router-dom";
import ErrorImg from "../../assets/error.jpg"
import { FaHome } from "react-icons/fa";
const ErrorPage = () => {
  return (
    <div className="w-full h-[100vh] bg-white flex items-center justify-center error__container">
      <div className="container mx-auto">
        <div className="text-center grid grid-cols-1 md:grid-cols-2 bg-[#FCFCFC] items-center p-10 rounded-lg">
          <img className="w-[400px] mx-auto" src={ErrorImg} alt="" />
          <div className="shadow h-full flex items-center justify-center rounded-xl">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-slate-700 first-letter:font-mono first-letter:text-red-600">
                Oops!{" "}
              </h1>
              <h1 className="text-2xl md:text-4xl font-bold font-serif text-slate-700">
                Page not Found.
              </h1>
              <h2 className="text-slate-500 text-xl font-semibold">404 Error</h2>
              <Link to={`/`}>
              <button className="btn btn-secondary mt-3 text-white"><FaHome/> Go Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
