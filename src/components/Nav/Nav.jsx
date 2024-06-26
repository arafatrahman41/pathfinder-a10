import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import error from "../../assets/error-image.avif"

const Nav = () => {
  const { user, logOut } = useAuth();
  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#071952] lg:text-[#37B7C3]" : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#071952] lg:text-[#37B7C3]" : ""
          }
          to="/allTourists"
        >
          All Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#071952] lg:text-[#37B7C3]" : ""
          }
          to="/addTourists"
        >
          Add Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#071952] lg:text-[#37B7C3]" : ""
          }
          to="/myList"
        >
          My List
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[#071952] text-[#EBF4F6] py-3">
      <div className="navbar">
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
              className="menu menu-sm dropdown-content bg-[#37B7C3] rounded-box z-[10] mt-3 w-52 p-2 shadow font-roboto font-semibold"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to="/"
            className="text-2xl font-semibold md:text-4xl font-montserrat"
          >
            PathFinder
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-roboto font-semibold">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  {
                    user.photoURL ? <img
                    alt="image not found"
                    src={user?.photoURL}
                  /> : <img src={error}/>
                  }
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <button className="btn btn-sm btn-ghost text-[#37B7C3]">
                  {user?.displayName || "Not Found"}
                  </button>
                </li>
                <li>
                  <button onClick={logOut} className="btn btn-sm btn-ghost text-[#37B7C3]">Log Out</button>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                className="md:text-lg font-roboto text-[#37B7C3] btn btn-ghost"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="md:text-lg font-roboto text-[#37B7C3] btn btn-ghost"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
