import { Link } from "react-router-dom";


const ApplyJob = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, salary } = job
    return (
        <div>
            <div className="flex gap-10 border-2 shadow-lg my-5 py-6 rounded-lg ">
                <div className="flex justify-center items-center p-3 py-10 m-3 bg-gray-200 rounded-lg ">
                    <img className="" src={logo} alt="" />
                </div>
                <div className="flex w-full items-center justify-between space-y-3">
                    <div>
                        <h1 className="text-xl font-bold">{job_title}</h1>
                        <p className="text-gray-500">{company_name}</p>
                        <div className="flex gap-4">
                            <button className="btn btn-outline btn-sm btn-primary">{remote_or_onsite}</button>
                            <button className="btn btn-outline btn-sm btn-primary">Full Time</button>
                        </div>
                        <div className="flex gap-4 items-center">
                            <p><span className="text-lg font-bold">Location:</span> {location}</p>
                            <p><span className="text-lg font-bold">Salary:</span> {salary}</p>
                        </div>
                    </div>
                    <div className="px-10">
                        <Link to={`/jobs/${id}`}>
                            <button className="btn btn-primary ">Viwe Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplyJob;