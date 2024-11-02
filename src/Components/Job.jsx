import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, salary } = job
    return (
        <div className='mx-auto mb-4 border-2 shadow-lg p-6 rounded-lg space-y-3'>
            <img className='w-14' src={logo} alt="" />
            <h1 className='text-xl font-bold'>{job_title}</h1>
            <h3 className='text-gray-400'>{company_name}</h3>
            <div className='flex gap-3'>
                <button className="btn btn-outline btn-sm btn-primary">{remote_or_onsite}</button>
                <button className="btn btn-outline btn-sm btn-primary">Full Time</button>
            </div>
            <div className='flex gap-3'>
                <h2>Location: {location}</h2>
                <h2>Salary: {salary}</h2>
            </div>
            <Link to={`/jobs/${id}`}><button className='btn btn-sm btn-primary'>Viwe Details</button></Link>

        </div>
    );
};

export default Job;