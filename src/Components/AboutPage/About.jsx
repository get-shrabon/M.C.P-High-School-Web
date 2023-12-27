import OverView from "../HomePage/OverView";
import AboutBanner from "./AboutBanner";
import Success from "./Success";
import Gellary from "../HomePage/Gallery"
import { Helmet } from "react-helmet-async";


const About = () => {
  return (
    <div>
      <Helmet>
        <title>M.C.P | About</title>
      </Helmet>
      <AboutBanner></AboutBanner>
      <OverView></OverView>
      <Success></Success>
      <Gellary></Gellary>
     
    </div>
  );
};

export default About;
