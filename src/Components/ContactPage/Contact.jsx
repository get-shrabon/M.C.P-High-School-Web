import { IoIosSend } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Helmet } from "react-helmet-async";
const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>M.C.P | Contact</title>
      </Helmet>
      <div className="contact__banner py-32 pb-56 2xl:py-52 bg-no-repeat bg-center bg-cover text-center">
        <h1 className="text-4xl font-bold text-white">Get in Touch with Us</h1>
      </div>
      <div className="2xl:px-64 lg:px-32 sm:px-0 md:px-0">
        <div className="contact__container container mx-auto py-10 px-10 shadow relative rounded top-[-150px] bg-white">
          <form className="grid grid-cols-2 gap-16">
            <div>
              <label htmlFor="name">Your Full Name</label>
              <br />
              <input
                className="w-full py-2 px-3 rounded bg-transparent border-b focus:outline-none text-black"
                type="text"
                name="name"
                id="name"
                placeholder="Type here..."
                required
              />
            </div>
            <div>
              <label htmlFor="email">Your E-mail</label>
              <br />
              <input
                className="w-full py-2 px-3 rounded bg-transparent border-b focus:outline-none text-black"
                type="email"
                name="email"
                id="email"
                placeholder="Type here..."
                required
              />
            </div>
            <div>
              <label htmlFor="number"> Your Phone number</label>
              <br />
              <input
                className="w-full py-2 px-3 rounded bg-transparent border-b focus:outline-none text-black"
                type="number"
                name="number"
                id="number"
                placeholder="Type here..."
                required
              />
            </div>
            <div>
              <label htmlFor="class">Select Your Class</label>
              <br />
              <select
                className="w-full py-2 px-3 rounded bg-transparent border-b focus:outline-none text-black"
                name="class"
                id="class"
                required
              >
                <option value="0" selected>
                  Select Please
                </option>
                <option value="Six">Six</option>
                <option value="Seven">Seven</option>
                <option value="Eight">Eight</option>
                <option value="Nine">Nine</option>
                <option value="Ten">Ten</option>
              </select>
            </div>
            <div>
              <button className="icon__btn">
                Send <IoIosSend></IoIosSend>
              </button>
            </div>
          </form>
        </div>
        <div className="container mx-auto py-10 px-5 items-center rounded contact__info bg-no-repeat bg-right bg-contain grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
          <div>
            <h3 className="text-white mb-3 text-3xl font-semibold">
              Contact Information
            </h3>
            <div className="flex items-center gap-3">
              <CiLocationOn className="text-2xl text-slate-700"></CiLocationOn>
              <p className="text-[15px] text-slate-500">
                3020 Fatepur, Sunamgonj
              </p>
            </div>
            <div className="flex items-center gap-3 my-3">
              <FaPhoneAlt className="text-2xl text-slate-700"></FaPhoneAlt>
              <a className="text-[15px] text-slate-500" href="tel:01711223366">
                01711223366
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MdEmail className="text-2xl text-slate-700"></MdEmail>
              <a
                className="text-[15px] text-slate-500"
                href="mailto:contact@info.com"
              >
                contact@info.com
              </a>
            </div>
          </div>
          <div>
            <img
              className="w-[200px] select-none lg:ms-auto sm:ms-none opacity-25"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Circle-icons-contacts.svg/2048px-Circle-icons-contacts.svg.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
