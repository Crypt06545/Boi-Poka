import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-11/12 mx-auto mt-8 items-center">
      <div>
        <h1 className="font-bold text-3xl">Book Vibe</h1>
      </div>
      <div className="hidden md:block">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `mr-4 p-3 text-xl font-medium${
              isActive
                ? "text-[#23BE0A] border-2 rounded-lg border-[#23BE0A]"
                : "text-[#c5c5c5]"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/listedbooks"
          className={({ isActive }) =>
            `mr-4 p-3 text-xl font-medium${
              isActive
                ? "text-[#23BE0A] border-2 rounded-lg border-[#23BE0A]"
                : "text-[#c5c5c5]"
            }`
          }
        >
          Listed Books
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `mr-4 p-3 text-xl font-medium${
              isActive
                ? "text-[#23BE0A] border-2 rounded-lg border-[#23BE0A]"
                : "text-[#c5c5c5]"
            }`
          }
        >
          Pages To Read
        </NavLink>
      </div>

      <div className="flex justify-center items-center">
        <Link to="/signin">
          <button className="btn mr-5 bg-[#23BE0A] text-white font-semibold">
            Sign In
          </button>
        </Link>
        <Link to="/signup">
          <button className="btn">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
