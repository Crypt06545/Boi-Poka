import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 md:w-11/12 mx-auto sticky top-0 z-50">
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] border-2 rounded-lg border-[#23BE0A]"
                  : "text-[#c5c5c5]"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/listedbooks"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] border-2 rounded-lg border-[#23BE0A]"
                  : "text-[#c5c5c5]"
              }
            >
              Listed Books
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] border-2 rounded-lg border-[#23BE0A]"
                  : "text-[#c5c5c5]"
              }
            >
              Dashboa
            </NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Book Vite</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "mr-10 p-3 text-[#23BE0A] border-2 rounded-lg border-[#23BE0A]"
                : "mr-10 p-3 text-[#c5c5c5]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/listedbooks"
            className={({ isActive }) =>
              isActive
                ? "mr-10 p-3 text-[#23BE0A] border-2 rounded-lg border-[#23BE0A]"
                : "mr-10 p-3 text-[#c5c5c5]"
            }
          >
            Listed Books
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "mr-10 p-3 text-[#23BE0A] border-2 rounded-lg border-[#23BE0A]"
                : "mr-10 p-3 text-[#c5c5c5]"
            }
          >
            Dashboa
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn m-2">Sign Up</a>
        <a className="btn m-2">Sign In</a>
      </div>
    </div>
  );
};

export default Navbar;
