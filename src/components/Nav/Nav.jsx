import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const navLinks = (
    <>
      <li>
        <NavLink className={({isActive}) => isActive ? "text-[#071952] lg:text-[#37B7C3]" : ''}
         to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink className={({isActive}) => isActive ? "text-[#071952] lg:text-[#37B7C3]" : ''} to='/allTourists'>All Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink className={({isActive}) => isActive ? "text-[#071952] lg:text-[#37B7C3]" : ''} to='/addTourists'>Add Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink className={({isActive}) => isActive ? "text-[#071952] lg:text-[#37B7C3]" : ''} to='/myList'>My List</NavLink>
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
            className="menu menu-sm dropdown-content bg-[#37B7C3] rounded-box z-[1] mt-3 w-52 p-2 shadow font-roboto font-semibold"
          >
            {navLinks}
          </ul>
        </div>
        <a className="text-2xl font-semibold md:text-4xl">PathFinder</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-roboto font-semibold">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-3">
        <Link to='login' className="bg-[#37B7C3] text-lg font-roboto text-[#EBF4F6] px-6 py-3 rounded-xl hover:scale-105 hover:opacity-95">Login</Link>
        <Link to='register' className="bg-[#37B7C3] text-lg font-roboto text-[#EBF4F6] px-6 py-3 rounded-xl hover:scale-105 hover:opacity-95">Register</Link>
      </div>
    </div>
    </div>
  );
};

export default Nav;
