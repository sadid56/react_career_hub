import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import Swal from 'sweetalert2'
import { saveJobApplication } from "../../utility/localStorage";
const JobDetials = () => {
    
    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1)
    }
    const handleApply = () =>{
        saveJobApplication(intId)
        Swal.fire({
            title: 'Congratulation!!',
            text: 'Woow you got apply a job.',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
    }

    const jobs = useLoaderData();
    const {id} = useParams();
    const intId = parseInt(id)
    const job = jobs.find(job => job.id == intId)
    const {contact_information,job_description,job_responsibility,educational_requirements,experiences, job_title,salary } = job;
    console.log(contact_information.email)
    return ( 
        <div>
            <h2 className="text-4xl font-bold text-center my-10">Job Details</h2>
            <div className="grid md:grid-cols-4 gap-4 px-5">

        <div className="md:col-span-3 space-y-7">
        <p><span className="font-semibold">Job Description:</span> {job_description}</p>
        <p><span className="font-semibold">Job Responsibility:</span> {job_responsibility}</p>
        <p><span className="font-semibold">Educational Requirements:</span> <br />{educational_requirements}</p>
        <p><span className="font-semibold">Experience:</span><br />{experiences}</p>
        </div>

        <div className="space-y-2">
        <h3 className="text-2xl font-bold">Job Details:</h3>
        <hr />
        <p className="flex items-center gap-2"><RiMoneyDollarCircleLine className="text-indigo-500"></RiMoneyDollarCircleLine> <span className="font-semibold">Salary:</span> {salary}</p>
        <p><span className="font-semibold">Job Title:</span> {job_title}</p>
        <h3 className="text-2xl font-bold">Contact Information:</h3>
        <hr />
        <p><span className="font-semibold">Phone:</span> {contact_information.phone}</p>
        <p><span className="font-semibold">Email:</span> {contact_information.email}</p>
        <p><span className="font-semibold">Address:</span> {contact_information.address}</p>
        <button onClick={handleApply} className="w-full btn bg-gradient-to-r from-sky-500 to-indigo-500 normal-case text-white text-xl">Apply Now</button>
        </div>

            </div>
            <div className="flex justify-center mt-5">
            <button onClick={handleGoBack} className="btn bg-gradient-to-r from-sky-500 to-indigo-500 normal-case text-white text-xl">Go Back</button>
            </div>
        </div>
     );
}
 
export default JobDetials;