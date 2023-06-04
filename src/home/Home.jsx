import Contact from "../pages/contact/Contact";
import Counter from "./Counter";

import Footer from "./Footer";
import { Navbar } from "./Navbar";
import PlanVision from "./PlanVision";
import PlanVision2 from "./PlanVision2";
import InspiredLiving from "./InspiredLiving";
import InspiredLiving2 from "./InspiredLiving2";
import ExperienceQuet from "./ExperienceQuet";
import InspireDesignQuet from "./InspireDesignQuet";
import ComplementaryWithCard from "./ComplementaryWithCard";
import Video from "./Video";
import GettingStat from "./GettingStat";



export const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Video></Video>
            <PlanVision />
            <PlanVision2 />
            <InspiredLiving />
            <InspiredLiving2 />
            <ExperienceQuet />
            <InspireDesignQuet />
            <ComplementaryWithCard />
            {/* <Counter></Counter> */}
            {/* <GettingStat></GettingStat> */}


            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

