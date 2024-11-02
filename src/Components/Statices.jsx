import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Categoris from "./Categoris";


const Statices = () => {
    const categories = useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <Categoris categories={categories}></Categoris>
        </div>
    );
};

export default Statices;