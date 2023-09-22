import { useEffect, useState } from "react";
import Job from "../job/Job";
const FuturedJob = () => {
  const [jobs, setJobs] = useState([]);

  //! this is the not best way to show all data
  const [showData, setShowData] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-10 px-5">
        <h1 className="text-3xl md:text-5xl font-bold">Featured Jobs</h1>
        <p className="mt-5 text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid mt-10  md:grid-cols-2 gap-5">
          {jobs.slice(0, showData).map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
        <div className={ showData === jobs.length && 'hidden'}>
          <button 
          onClick={()=> setShowData(jobs.length)}
          className="btn bg-gradient-to-r from-sky-500 to-indigo-500 normal-case text-white text-xl my-5">
            Show all
          </button>
        </div>
      </div>
    </div>
  );
};

export default FuturedJob;
