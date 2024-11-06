import { Link, NavLink } from "react-router-dom";
import './header.css'
const Header = () => {
  const links = (
    <div className="text-xl flex items-center gap-4 ">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/listbook">Listed Book</NavLink>
    </div>
  );
  return (
    <div>
      <div className="navbar bg-base-100 py-6">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="text-2xl font-bold">BOOK VIBE</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-6">
          <a className="btn btn-accent">Sign Up</a>
          <a className="btn btn-info">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
