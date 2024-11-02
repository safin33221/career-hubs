import React from 'react';
import user from '../assets/images/user.png'

const Banner = () => {
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={user}
                    className="w-[500px] rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">One Step <br /> Closer To Your <br /> Dream Job</h1>
                    <p className="py-6">
                        Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;