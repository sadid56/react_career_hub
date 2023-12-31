import { NavLink } from "react-router-dom";

const header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        
        <NavLink to="/jobs">Jobs</NavLink>
      </li>
      <li>
        
        <NavLink to="/applied">Applied Jobs</NavLink>
      </li>
      <li><NavLink to="/Statictice">Statictice</NavLink> </li>
      <li><NavLink to="/Blogs">Blogs</NavLink></li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <h2 className="text-xl md:text-3xl font-bold text-sky-600">Career Hub</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-gradient-to-r from-sky-500 to-indigo-500 normal-case text-white text-xl">Star Applied</a>
        </div>
      </div>
    </div>
  );
};

export default header;
