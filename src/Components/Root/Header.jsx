import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Headroom from "react-headroom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEye, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";
import LogoutButton from "../../assets/Logout.png";
import { FaRegHandPointRight } from "react-icons/fa";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
    .then(() => {
      toast.warn("Account LoggOut Successfull");
    })
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">Our School</NavLink>
      </li>
      <li>
        <NavLink to="/teachers">Our Teacher</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {!user && (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );
  return (
    <Headroom>
      <header className="">
        <nav className="navbar mx-auto container">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <Link className="flex items-center gap-1" to="/">
              <img className="logo__main" src={Logo} alt="" />
              <h4 className="font-mono text-nowrap font-semibold text-slate-600 first-letter:text-yellow-500">
                M.C.P High School
              </h4>
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          {user && (
            <div className="md:navbar-end sm:navbar-end">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="ml-5">
                  <img
                    className="w-[50px] rounded-full"
                    src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg"
                    alt=""
                  />
                </div>
              <ToastContainer></ToastContainer>
                <div
                  tabIndex={0}
                  className="menu dropdown-content z-[1] p-4 shadow bg-yellow-100 rounded-box border-b-4  border-yellow-500 w-[auto] mt-4"
                >
                  <img
                    className="w-[100px] rounded-full mx-auto border border-yellow-500 p-1 object-cover"
                    src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg"
                    alt=""
                  />
                  <h4 className="text-black text-center text-xl text-nowrap font-semibold">
                    {user?.displayName}
                  </h4>
                  <h5 className="font-semibold text-center text-slate-500 mb-3 mt-1">
                    {user?.email}
                  </h5>
                  <button className="btn btn-warning  ">
                    View Profile <FaEye></FaEye>
                  </button>
                  <div className="">
                    <Link className="my-3 text-slate-500 flex justify-center  items-center gap-2">
                      <FaRegHandPointRight></FaRegHandPointRight> Announcement
                    </Link>
                  </div>
                  <div className="flex justify-between mt-4">
                    <Link className="text-2xl text-yellow-500 hover:text-yellow-700 duration-500">
                      {" "}
                      <FaFacebook></FaFacebook>{" "}
                    </Link>
                    <Link className="text-2xl text-yellow-500 hover:text-yellow-700 duration-500">
                      {" "}
                      <FaLinkedin></FaLinkedin>{" "}
                    </Link>
                    <Link className="text-2xl text-yellow-500 hover:text-yellow-700 duration-500">
                      {" "}
                      <FaTwitter></FaTwitter>{" "}
                    </Link>
                    <Link className="text-2xl text-yellow-500 hover:text-yellow-700 duration-500">
                      {" "}
                      <FaInstagram></FaInstagram>{" "}
                    </Link>
                    <Link className="text-2xl text-yellow-500 hover:text-yellow-700 duration-500">
                      {" "}
                      <FaYoutube></FaYoutube>{" "}
                    </Link>
                  </div>
                  <div className="mt-4">
                    <span onClick={handleLogOut} className="cursor-pointer ">
                      <img
                        className="w-[50px] mx-auto border-dashed border-blue-300 rounded-full p-1"
                        src={LogoutButton}
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </Headroom>
  );
};

export default Header;
