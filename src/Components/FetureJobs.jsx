
import { useEffect } from "react";
import { useState } from "react";
import Job from "./job";


const FetureJobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch("/jobs.json")
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    const [allJobs, setAllJob] = useState(false)
    const handleSeeAllJobs = () => {
        setAllJob(!allJobs)
    }

    return (
        <div>
            <div className="text-center my-4">
                <h1 className="text-4xl font-bold">Featured Jobs</h1>
                <p> Explore thousands of job opportunities with all the information you need. Its your future </p>
            </div>
            {
                allJobs ?
                    <div className="grid grid-cols-1 lg:grid-cols-2 ">
                        {
                            jobs.map(job => <Job key={job.id} job={job}></Job>)
                        }
                    </div>
                    :
                    <div className="grid grid-cols-1 lg:grid-cols-2 ">
                        {
                            jobs.map(job => <Job key={job.id} job={job}></Job>).slice(0, 4)
                        }
                    </div>
            }
            <div className="text-center my-5">
                {
                    allJobs?<button className="btn btn-primary" onClick={() => handleSeeAllJobs(true)}>See less</button>:<button className="btn btn-primary" onClick={() => handleSeeAllJobs(true)}>See All Job</button>
                }
            </div>
        </div>
    );
};

export default FetureJobs;