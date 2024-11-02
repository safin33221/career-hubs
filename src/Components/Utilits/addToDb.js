import { toast } from "react-toastify";

const getApplyedJobFromLS =()=>{
    const stroedApplyJob= localStorage.getItem('job-list')
    if(stroedApplyJob){
        const applyJob = JSON.parse(stroedApplyJob)
        return applyJob;
    }
    else{
        return []
    }
}

const addJobToLS = id=>{
    const storedJobList = getApplyedJobFromLS()
    if(storedJobList.includes(id)){
        toast.error('This job already applied',{
            autoClose:2000
        })
    }
    else{
        storedJobList.push(id)
        toast.success('Applied Success',{
            autoClose:2000
        })
    }
    const storedJobListStr = JSON.stringify(storedJobList)
    localStorage.setItem('job-list',storedJobListStr)
}
export{addJobToLS,getApplyedJobFromLS}