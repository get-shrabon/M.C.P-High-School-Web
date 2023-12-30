import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Headroom from "react-headroom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEye } from "react-icons/fa6";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaRegHandPointRight } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut();
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
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
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
              <h4 className="font-mono font-semibold text-slate-600 first-letter:text-yellow-500">
                M.C.P High School
              </h4>
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          {user && (
            <div>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="ml-5">
                  <img
                    className="w-[50px] rounded-full"
                    src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg"
                    alt=""
                  />
                </div>
                <div
                  tabIndex={0}
                  className="menu dropdown-content z-[1] p-2 shadow bg-yellow-100 rounded-box w-52 mt-4"
                >
                  <img
                    className="w-[100px] rounded-full mx-auto"
                    src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg"
                    alt=""
                  />
                  <h4 className="text-black text-center text-xl font-semibold">
                    {user.displayName}
                  </h4>
                  <h5 className="font-semibold text-center text-slate-500 mb-3 mt-1">
                    {user.email}
                  </h5>
                  <button className="btn btn-warning  ">
                    View Profile <FaEye></FaEye>
                  </button>
                  <div>
                    <Link className="my-3 text-slate-500 flex items-center gap-2">
                      <FaRegHandPointRight></FaRegHandPointRight> Announcement
                    </Link>
                    <span
                      onClick={handleLogOut}
                      className="flex items-center gap-1 underline hover:no-underline duration-500 cursor-pointer text-blue-700 text-[18px] font-semibold"
                    >
                      LogOut <RiLogoutCircleRLine></RiLogoutCircleRLine>
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
