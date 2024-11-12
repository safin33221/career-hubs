import { useEffect, useState } from "react";
import { getApplyedJobFromLS } from "./Utilits/addToDb";
import ApplyJob from "./ApplyJob";
import { Helmet } from "react-helmet";


const AppliedJob = () => {
    const storedJob = getApplyedJobFromLS()
    const storedJobInt = storedJob.map(id => parseInt(id))
    const [jobData, setJobData] = useState([])
    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => setJobData(data))
    }, [])


    const applyedJobs = jobData.filter(job => storedJobInt.includes(job.id))

    return (
        <div>
            <Helmet>
                <title>Applied Job | Career Hub</title>
            </Helmet>
            {
                applyedJobs.map(job => <ApplyJob key={job.id} job={job}></ApplyJob>)
            }
        </div>
    );
};

export default AppliedJob;