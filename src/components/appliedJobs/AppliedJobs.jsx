import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStorageApplication } from "../../utility/localStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [AppliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

    const handleJjobsFilte = filter =>{
        if(filter === 'all'){
            setDisplayJobs(AppliedJobs)
        }
    else if(filter === 'remote'){
        const remoteJobs = AppliedJobs.filter(job => job.remote_or_onsite === 'Remote');
        setDisplayJobs(remoteJobs)
    }
    else if(filter === 'onsite'){
        const onsiteJobs = AppliedJobs.filter(job => job.remote_or_onsite=== 'Onsite');
        setDisplayJobs(onsiteJobs)
    }
    }


  useEffect(() => {
    const storedJobIds = getStorageApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
      // console.log(jobsApplied);
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied)
    }
  }, []);
  return (
    <div>
      <h2 className="text-center text-3xl font-bold">
        Job Applied: {AppliedJobs.length}
      </h2>
      <div className="flex justify-end mt-10">
        <details className="dropdown">
          <summary className="m-1 btn">Filter</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={()=> handleJjobsFilte('all')}>
              <a>All</a>
            </li>
            <li onClick={()=> handleJjobsFilte('remote')}>
              <a>Remote</a>
            </li>
            <li onClick={()=> handleJjobsFilte('onsite')}>
                <a>Outsite</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        {displayJobs.map((job) => (
          <div className="flex flex-col lg:flex-row items-center border rounded shadow my-5 p-5">
            <div className="w-[150px]">
              <img src={job.logo} alt="" />
            </div>
            <div className="card-body">
              <h2 className="card-title">{job.job_title}</h2>
              <p className="text-xl text-gray-400">{job.company_name}</p>
              <div className="card-actions ">
                <button className="btn btn-outline btn-info">
                  {job.remote_or_onsite}
                </button>
                <button className="btn btn-outline btn-info">
                  {job.job_type}
                </button>
              </div>
              <div className="flex items-center gap-3">
                <span> {job.location}</span>
                <span>$ {job.salary}</span>
              </div>
            </div>
            <div>
              <button className="btn bg-gradient-to-r from-sky-500 to-indigo-500 normal-case text-white text-xl">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
