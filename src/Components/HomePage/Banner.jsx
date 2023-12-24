import { FaArrowRightLong } from "react-icons/fa6";
import BannerImg from "../../assets/bannerImg.png";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
const Banner = () => {
    useEffect(() => {
        AOS.init({duration:2000})
    } ,[])
  return (
    <div className=" homeBanner flex items-center ">
      <div className="grid container mx-auto sm:grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:py-52 lg:py-36 md:py-20 sm:py-20 ">
        <div data-aos="fade-down">
          <h5 className="font-bold text-slate-600">Wellcome To</h5>
          <h1 className="md:text-6xl sm:text-2xl my-3 font-bold first-letter:text-yellow-400 text-slate-800">
            Murari Chand High School, Fatepur
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            dolorum neque, impedit amet itaque est, optio minus ab provident
            nobis fugiat reiciendis magnam. Adipisci architecto possimus eaque
            magnam cupiditate commodi nulla officiis illo deleniti sunt quas
            temporibus veritatis doloribus asperiores id atque ea neque non
            error quaerat, numquam assumenda! Nisi!
          </p>
          <button className=" mt-3 icon__btn">
            Learn More <FaArrowRightLong></FaArrowRightLong>
          </button>
        </div>
        <div data-aos="flip-right">
          <img className="banner__image" src={BannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
