import { useEffect, useState } from "react";

const CategotyJob = () => {
  const [jobCategorise, setJobCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setJobCategories(data));
  }, []);
  console.log(jobCategorise);
  return (
    <div>
      <div className="text-center px-5">
        <h1 className=" text-3xl md:text-5xl font-bold">Job Category List</h1>
        <p className="mt-5 text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 mt-10">{
            jobCategorise.map(job => <div className="card p-5  bg-base-100 border rounded text-center md:text-start">
            <figure>
              <img
                src={job.logo}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-2l font-bold text-gray-600">{job.category_name}</h2>
              <p className="text-xl text-gray-400">{job.availability}</p>
              
            </div>
          </div>)
            }</div>
      </div>
    </div>
  );
};

export default CategotyJob;
