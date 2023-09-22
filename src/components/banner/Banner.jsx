const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen px-5">
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <div className="flex-1">
          <img
            src="https://i.ibb.co/dfFGS1B/user.png"
            className="w-full"
          />
          </div>
          <div className="flex-1 ">
            <h1 className=" text-3xl md:text-6xl font-bold">One Step Closer To Your <span className="text-sky-500">Dream Job</span></h1>
            <p className="py-6 text-gray-500">
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish
            </p>
            <div>
            <button className="btn bg-gradient-to-r from-sky-500 to-indigo-500 normal-case text-white text-xl">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
