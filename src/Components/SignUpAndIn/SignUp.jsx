import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { CiLogin } from "react-icons/ci";
import { FaFacebook, FaGoogle, FaXTwitter } from "react-icons/fa6";
const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const condition = e.target.terms.checked;
    console.log(email, password, name, condition);
  };
  return (
    <div className="signUp__bg py-20">
      <div className="p-10 container mx-auto w-[fit-content] sign__up bg-no-repeat bg-center bg-cover rounded shadow-md grid lg:grid-cols-2 sm:grid-cols-1">
        <div className="sign__left ">
          <div>
            <img
              className="w-[100px] mx-auto mb-3 bg-white rounded-full"
              src={logo}
              alt=""
            />
            <p className="mb-3 font-bold">
              Login using social media to get quick access
            </p>
            <button className="w-full flex items-center justify-center gap-2 bg-[#3b5998] hover:bg-[#344c82] duration-500 rounded p-2 font-semibold">
              Sign In with facebook <FaFacebook></FaFacebook>
            </button>
            <button className="w-full flex items-center justify-center my-3 gap-2 bg-[#c32f10] hover:bg-[#c32e10e9] duration-500 rounded p-2 font-semibold">
              Sign In with google <FaGoogle></FaGoogle>
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-[#00aced] hover:bg-[#00aeede5] duration-500 rounded p-2 font-semibold">
              Sign In with twitter <FaXTwitter></FaXTwitter>
            </button>
          </div>
        </div>
        <form onSubmit={handleSignUp} className="form__container ">
          <h2 className="text-center text-black font-bold text-3xl mb-5">
            Sign Up for Free
          </h2>
          <div>
            <p>Your Full Name</p>
            <input
              className="bg-transparent border-b rounded-xl border-[gold] lg:w-full sm:w-full focus:outline-none py-2 px-3 text-black"
              type="text"
              name="name"
              id=""
              placeholder="type here..."
              required
            />
          </div>
          <div>
            <p>Your Email Address</p>
            <input
              className="bg-transparent border-b rounded-xl border-[gold] lg:w-full sm:w-full focus:outline-none py-2 px-3 text-black"
              type="email"
              name="email"
              id=""
              placeholder="type here..."
              required
            />
          </div>
          <div>
            <p>New Password</p>
            <input
              className="bg-transparent border-b rounded-xl border-[gold] lg:w-full sm:w-full focus:outline-none py-2 px-3 text-black"
              type="password"
              name="password"
              id=""
              placeholder="type here..."
              required
            />
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-2">
              <input
                className="checkbox checkbox-warning"
                type="checkbox"
                name="terms"
                id="terms"
              />
              <label
                className="text-slate-700 cursor-pointer select-none"
                htmlFor="terms"
              >
                Accept our all condition
              </label>
            </div>
          </div>
          <div className="py-4">
            <button className="btn btn-warning w-full">Sign Up</button>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="mt-0">Already have an Account? </span>
            <Link
              to="/login"
              className="text-blue-500 flex items-center gap-1 underline"
            >
              Login <CiLogin className="text-xl"></CiLogin>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
