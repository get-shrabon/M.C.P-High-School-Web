/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import boyImage from "../../assets/login-page-image.png";
import { FaFacebook, FaGoogle } from "react-icons/fa6";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)
  };
  return (
    <div className="login__container bg-no-repeat bg-center bg-cover py-20 2xl:py-32">
      <div className="container w-[fit-content] p-10 rounded bg-white shadow-lg mx-auto grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1">
        <div className="shadow-lg rounded p-5">
          <form onSubmit={handleLogin}>
            <h2 className=" text-black font-bold text-3xl">Login</h2>
            <p className="mb-5">
              Doesn't have an account yet?
              <Link to="/signUp" className="underline text-blue-600 font-semibold">
                Sign Up
              </Link>
            </p>
            <div>
              <p className="text-slate-500 font-semibold">Your Email Address</p>
              <input
                className="bg-transparent border-b rounded-xl border-[gold] lg:w-full sm:w-full focus:outline-none py-2 px-3 text-black"
                type="email"
                name="email"
                id=""
                placeholder="type here..."
                required
              />
            </div>
            <div className="my-3">
              <p className="text-slate-500 font-semibold">Your Password</p>
              <input
                className="bg-transparent border-b rounded-xl border-[gold] lg:w-full sm:w-full focus:outline-none py-2 px-3 text-black"
                type="password"
                name="password"
                id=""
                placeholder="type here..."
                required
              />
            </div>

            <a className="underline text-slate-500 font-semibold hover:no-underline cursor-pointer">
              Forget Password?
            </a>
            <button className="w-full btn btn-warning my-3">Login</button>
          </form>
          <div className="flex items-center gap-2 my-3">
            <div className="w-full h-[1px] bg-slate-300"></div>
            <p className="text-center text-nowrap">or login with</p>
            <div className="w-full h-[1px] bg-slate-300"></div>
          </div>
          <div className="flex justify-center gap-3">
            <button className="btn btn-outline btn-error">
              <FaGoogle></FaGoogle> Google
            </button>
            <button className="btn btn-outline btn-primary">
              <FaFacebook></FaFacebook> Facebook
            </button>
          </div>
        </div>
        <div className=" p-5">
          <img className="w-[350px] mx-auto" src={boyImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
