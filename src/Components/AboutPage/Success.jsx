import { FaReact } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { BsTrophy } from "react-icons/bs";
const Success = () => {
  return (
    <div>
      <div className="container mx-auto py-20 ">
        <h1 className="text-center text-3xl font-bold text-slate-700">
          WE HAVE FAITH IN OUR STUDENT FUTURE
        </h1>
        <p className="2xl:px-32 xl:px-32 mt-2 font-mono">
          Our students are talented, hard-working and full of good ideas. We
          encourage and empower them to bring their ideas to life. Hands-on
          opportunities are what were all about. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
          ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
          veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
          ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
          hendrerit in vulputate velit esse molestie consequat.
        </p>
        <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-5 xl:px-32">
          <div className="flex items-start gap-4">
            <FaReact className="text-6xl text-[gold]"></FaReact>
            <div>
              <h4 className="text-2xl font-bold text-slate-600">Empower</h4>
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit,
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaEarthAfrica className="text-6xl text-[gold]"></FaEarthAfrica>
            <div>
              <h4 className="text-2xl font-bold text-slate-600">Engage</h4>
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit,
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaGraduationCap className="text-6xl text-[gold]"></FaGraduationCap>
            <div>
              <h4 className="text-2xl font-bold text-slate-600">Graduation</h4>
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit,
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <BsTrophy className="text-6xl text-[gold]"></BsTrophy>
            <div>
              <h4 className="text-2xl font-bold text-slate-600">Awarding</h4>
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit,
              </p>
            </div>
          </div>
        </div>
      </div>
      <img className="w-full" src="https://sekolahh1.kenzap.com/images/about-us-img.jpg" alt="" />
    </div>
  );
};

export default Success;
