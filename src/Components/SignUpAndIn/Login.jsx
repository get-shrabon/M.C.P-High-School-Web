/* eslint-disable react/no-unescaped-entities */

import { Link, useNavigate } from "react-router-dom";
import boyImage from "../../assets/login-page-image.png";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { userLogin, googleLogIn, facebookLogin } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPass, setShowPass] = useState(null);
  const navigate = useNavigate()
  // Sign In With Google PopUp
  const handleGoogleLogIn = () => {
    googleLogIn()
      .then(() => {
        toast.success("User Loggin Successfull")
        navigate("/")
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  // Sign In With Facebook PopUp
  const handleFbLogIn = () =>{
    facebookLogin()
      .then(() => {
        toast.success("User Loggin Successfull");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    setErrorMessage("");
    setSuccessMessage("");
    {
      if (password < 6) {
        setErrorMessage("Password must be at least 6 characters long");
        return;
      } else if (!/[A-Z]/.test(password)) {
        setErrorMessage("Password must contain at least one uppercase letter");
        return;
      } else if (!/[a-z]/.test(password)) {
        setErrorMessage("Password must contain at least one lowercase letter");
        return;
      }
    }
    // Login User
    userLogin(email, password)
      .then(() => {
        toast.success(`Welcome, ${name} ! Login successful.`);
        e.target.reset()
        navigate("/")
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="login__container bg-no-repeat bg-center bg-cover py-20 2xl:py-32">
      <div className="container w-[fit-content] p-10 rounded bg-white shadow-lg mx-auto items-center grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1">
        <div className="shadow-lg rounded p-5">
          <form onSubmit={handleLogin}>
            <h2 className=" text-black font-bold font-mono text-3xl">Login</h2>
            <p className="mb-5 flex gap-2">
              Doesn't have an account yet?
              <Link
                to="/signUp"
                className="underline text-blue-600 font-semibold"
              >
                Sign Up
              </Link>
            </p>
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
            <div className="mb-3">
              <p className="text-slate-500 font-semibold">Your Full Name</p>
              <input
                className="bg-transparent border-b rounded-xl border-[gold] lg:w-full sm:w-full focus:outline-none py-2 px-3 text-black"
                type="text"
                name="name"
                id="name"
                placeholder="type here..."
                required
              />
            </div>
            <div>
              <p className="text-slate-500 font-semibold">Your Email Address</p>
              <input
                className="bg-transparent border-b rounded-xl border-[gold] lg:w-full sm:w-full focus:outline-none py-2 px-3 text-black"
                type="email"
                name="email"
                id="email"
                placeholder="type here..."
                required
              />
            </div>
            <div className="my-3">
              <p className="text-slate-500 font-semibold">Your Password</p>
              <div className="flex items-center">
                <input
                  className="bg-transparent border-b rounded-xl border-[gold] lg:w-full sm:w-full focus:outline-none py-2 px-3 text-black"
                  type={showPass ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="type here..."
                  required
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="ml-[-40px] cursor-pointer"
                >
                  {!showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
            </div>
            <div>
              {successMessage && (
                <p className="success__message text-[14px]">{successMessage}</p>
              )}
            </div>
            <div>
              {errorMessage && (
                <p className="error__message text-[14px]">{errorMessage}</p>
              )}
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
            <button
              onClick={handleGoogleLogIn}
              className="btn btn-outline btn-error"
            >
              <FaGoogle></FaGoogle> Google
            </button>
            <button
              onClick={handleFbLogIn}
              className="btn btn-outline btn-primary"
            >
              <FaFacebook></FaFacebook> Facebook
            </button>
          </div>
        </div>
        <div className=" p-5 ">
          <img className="w-[350px] h-full mx-auto" src={boyImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
