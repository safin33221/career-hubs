import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addJobToLS } from './Utilits/addToDb';

const JobDetails = () => {
    const { id } = useParams()
    const JobId = parseInt(id)
    const jobData = useLoaderData()
    const job = jobData.find(job => job.id === JobId)
    const { company_name, job_description, salary, job_title, contact_information, job_responsibility, educational_requirements, experiences } = job
    const handleApplbtn =(id)=>{
        addJobToLS(id)
    }

    return (
        <div>
            <div className='text-center py-10'>
                <h1 className='text-3xl font-bold'>Job Details</h1>
            </div>
            <div className='flex flex-col lg:flex-row gap-3 px-6 py-12'>
                <div className=' w-full lg:w-2/3   space-y-5 p-3 '>
                    <h1 className='text-gray-600'><span className='text-black font-bold text-lg'>Job Description:</span>{job_description}</h1>
                    <h1 className='text-gray-600'><span className='text-black font-bold text-lg'>Job responsibility:</span>{job_responsibility}</h1>
                    <h1 className='text-gray-600'><span className='text-black font-bold text-lg'> Educational Requirements: <br /> </span>{educational_requirements}</h1>
                    <h1 className='text-gray-600'><span className='text-black font-bold text-lg'>experiences: <br /></span>{experiences}</h1>
                </div>
                <div className='lg:w-1/3' >
                    <div className=' shadow-lg p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl  '>
                        <h1 className='text-xl font-bold'>{company_name}</h1>
                        <div className='border-t-2 my-6'></div>
                        <h1 className='text-black font-bold'>Salary: <span className='text-gray-600'>{salary}</span></h1>
                        <h1 className='text-black font-bold'>Job Title:<span className='text-gray-600'>{job_title}</span></h1>
                        <div className='border-t-2 my-6'></div>

                        <h1 className='text-lg font-bold'>Contact Information</h1>
                        <div className='border-t-2 my-2'></div>
                        <h1><span className='text-black font-bold'>Phone:</span> {contact_information.phone}</h1>
                        <h1><span className='text-black font-bold'>Email:</span> {contact_information.email}</h1>
                        <h1><span className='text-black font-bold'>Address:</span> {contact_information.address}</h1>
                    </div>
                    <div className='py-5'>
                        <button onClick={()=>handleApplbtn(id)} className='btn btn-primary flex w-full'> Apply Now</button>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default JobDetails;