import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="w-11/12 mx-auto">
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </>
    );
};

export default Root;