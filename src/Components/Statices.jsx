import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Categoris from "./Categoris";
import FetureJobs from "./FetureJobs";


const Statices = () => {
    const categories = useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <Categoris categories={categories}></Categoris>
            <FetureJobs></FetureJobs>
        </div>
    );
};

export default Statices;