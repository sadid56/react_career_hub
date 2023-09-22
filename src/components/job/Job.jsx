import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {id, logo,job_title,company_name,remote_or_onsite,job_type,location,salary } = job;
  return (
    <div>
      <div className="card  bg-base-100  text-start border rounded-md p-5">
        <div className="flex justify-start">
          <img
            src={logo}
          />
        </div>
        <div className="card-body p-0 mt-5">
          <h2 className="card-title">{job_title}</h2>
          <p className="text-xl text-gray-400">{company_name}</p>
          <div className="card-actions ">
          <button className="btn btn-outline btn-info">{remote_or_onsite}</button>
          <button className="btn btn-outline btn-info">{job_type}</button>  
          </div>
          <div className="flex items-center gap-3 text-gray-500 font-medium">
            <span> {location}</span>
            <span>$ {salary}</span>
          </div>
          <Link to={`/job/${id}`}><button className="btn bg-gradient-to-r from-sky-500 to-indigo-500 normal-case text-white text-xl">View Details</button></Link>
        </div>
      </div>
      
    </div>
  );
};

export default Job;
