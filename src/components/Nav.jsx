import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 w-52 gap-1"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? " text-primaryGreen scale-105" : "text-black"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/ListedBooks"
                className={({ isActive }) =>
                  isActive ? "text-primaryGreenscale-105" : "text-black"
                }
              >
                Listed Books
              </NavLink>
              <NavLink
                to="/ToRead"
                className={({ isActive }) =>
                  isActive ? "text-primaryGreen scale-105" : "text-black"
                }
              >
                Pages to Read
              </NavLink>
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  isActive ? "text-primaryGreen scale-105" : "text-black"
                }
              >
                Contact
              </NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-3 text-xl font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primaryGreen border-2 border-primaryGreen font-bold p-2 rounded"
                  : "text-black border-2 border-none font-bold p-2"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/ListedBooks"
              className={({ isActive }) =>
                isActive
                  ? " text-primaryGreen border-2  border-primaryGreen font-bold p-2 rounded"
                  : "text-black border-2 border-none font-bold p-2"
              }
            >
              Listed Books
            </NavLink>
            <NavLink
              to="/ToRead"
              className={({ isActive }) =>
                isActive
                  ? "text-primaryGreen border-2  border-primaryGreen font-bold p-2 rounded"
                  : "text-black border-2 border-none font-bold p-2"
              }
            >
              Pages to Read
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive
                  ? "text-primaryGreen border-2  border-primaryGreen font-bold p-2 rounded"
                  : "text-black border-2 border-none font-bold p-2"
              }
            >
              Contact
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-3 lg:gap-3">
          <a className="btn text-white  bg-primaryGreen border-primaryGreen">
            Sign In
          </a>
          <a className="btn bg-secondaryColor text-white">Sign Up</a>
        </div>
      </div>
      <div className="container lg:w-full p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="hero h-auto lg:max-h-[570px] bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/vsGVgD5/banner.jpg"
              className=" w-fit p-2 lg:w-1/3 rounded-lg shadow-2xl"
              style={{ weight: "318px", height: "394px" }}
            />
            <div className="w-full lg:w-2/3">
              <h1 className=" text-2xl lg:text-5xl font-bold w-[526px] h-[168px]">
                Book Haven: Explore Worlds Within Pages
              </h1>
              <a
                href="/ListedBooks"
                className="btn bg-primaryGreen  border-primaryGreen text-white font-bold my-2"
              >
                View The List
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
