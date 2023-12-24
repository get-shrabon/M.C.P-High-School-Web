import GridImage from "../../assets/image-grid.png"
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const OverView = () => {
    useEffect(() => {
        Aos.init({duration:1000})
    } ,[])
    return (
      <div className="py-20 overview__container">
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-5">
          <div data-aos="fade-up" className="pl-5">
            <h5 className="font-bold text-slate-400">Grandmaster Talk</h5>
            <h2 className="text-4xl text-slate-800 font-bold my-3">EDUCATION IS THE MOST POWERFUL WEAPON</h2>
            <p>
              Our students are talented, hard-working and full of good ideas. We
              encourage and empower them to bring their ideas to life. Hands-on
              opportunities are what we re all about. Our students are busy
              doing things that matter. Take a look at the opportunities you ll
              have at the University. The task of the modern educator is not to
              cut down jungles, but to irrigate deserts.
            </p>
            <img className="my-5"
              src="https://sekolahh1.kenzap.com/images/signature.png"
              alt=""
            />
            <h5 className="font-semibold text-slate-500">Katherine Gonzalez</h5>
            <p>Grandmaster</p>
          </div>
          <div data-aos="zoom-in">
            <img className="mx-auto" src={GridImage} alt="" />
          </div>
        </div>
      </div>
    );
};

export default OverView;