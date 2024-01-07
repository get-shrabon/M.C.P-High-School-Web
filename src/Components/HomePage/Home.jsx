
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import OverView from "./OverView";
import SchoolPeoples from "./SchoolPeoples";
import Teachers from "../Teachers/Teachers";
import Blogs from "../Blogs/Blogs";
import Gallery from "./Gallery";
import CTA from "./CTA";
import Textslide from "./Textslide";

const Home = () => {
    return (
        <div>
           <Helmet>
            <title>M.C.P | Home</title>
           </Helmet>
            <Banner></Banner>
            <Textslide></Textslide>
            <OverView></OverView>
            <SchoolPeoples></SchoolPeoples>
            <Teachers></Teachers>
            <Blogs></Blogs>
            <Gallery></Gallery>
            <CTA></CTA>
        </div>
    );
};

export default Home;