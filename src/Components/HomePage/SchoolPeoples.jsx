import { FaSchoolFlag } from "react-icons/fa6";
import { PiStudent } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";
import { MdLocalPlay } from "react-icons/md";
import CountUp from "react-countup/build";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const SchoolPeoples = () => {
  const [counter, setCounter] = useState(false);
  return (
    <div className="py-20 counter__bg">
      <ScrollTrigger
        onEnter={() => setCounter(true)}
        onExit={() => setCounter(false)}
      >
        <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1">
          <div>
            <PiStudent className="text-8xl mx-auto"></PiStudent>
            <h3 className="text-4xl text-white text-center my-3">
              {counter && (
                <CountUp start={0} end={600} duration={2.75}></CountUp>
              )}
              +
            </h3>
            <h3 className="text-2xl font-semibold text-center uppercase">
              Students
            </h3>
          </div>
          <div>
            <FaSchoolFlag className="text-8xl mx-auto"></FaSchoolFlag>
            <h3 className="text-4xl text-white text-center my-3">
              {counter && (
                <CountUp start={0} end={15} duration={2.75}></CountUp>
              )}
              +
            </h3>
            <h3 className="text-2xl font-semibold text-center uppercase ">
              Teachers
            </h3>
          </div>
          <div>
            <LiaCertificateSolid className="text-8xl mx-auto"></LiaCertificateSolid>
            <h3 className="text-4xl text-white text-center my-3">
              {counter && (
                <CountUp start={0} end={20} duration={2.75}></CountUp>
              )}
              +
            </h3>
            <h3 className="text-2xl font-semibold text-center uppercase ">
              Awards
            </h3>
          </div>
          <div>
            <MdLocalPlay className="text-8xl mx-auto"></MdLocalPlay>
            <h3 className="text-4xl text-white text-center my-3">
              {counter && (
                <CountUp start={0} end={200} duration={2.75}></CountUp>
              )}
              +
            </h3>
            <h3 className="text-2xl font-semibold text-center uppercase ">
              Classes
            </h3>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default SchoolPeoples;
