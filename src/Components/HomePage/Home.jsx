
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import OverView from "./OverView";
import SchoolPeoples from "./SchoolPeoples";

const Home = () => {
    return (
        <div>
           <Helmet>
            <title>M.C.P | Home</title>
           </Helmet>
            <Banner></Banner>
            <OverView></OverView>
            <SchoolPeoples></SchoolPeoples>
        </div>
    );
};

export default Home;