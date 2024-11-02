import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Root = () => {
    return (
        <>
            <div className="w-11/12 mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </>
    );
};

export default Root;