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
        alert('already added')
    }
    else{
        storedJobList.push(id)
    }
    const storedJobListStr = JSON.stringify(storedJobList)
    localStorage.setItem('job-list',storedJobListStr)
}
export{addJobToLS,getApplyedJobFromLS}