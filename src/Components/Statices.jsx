import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Categoris from "./Categoris";
import FetureJobs from "./FetureJobs";
import { Helmet } from "react-helmet";


const Statices = () => {
    const categories = useLoaderData()

    return (

        <div>
            <Helmet>
                <title>Statices | Career Hub</title>
            </Helmet>
            <Banner></Banner>
            <Categoris categories={categories}></Categoris>
            <FetureJobs></FetureJobs>
        </div>
    );
};

export default Statices;