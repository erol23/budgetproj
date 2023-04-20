import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
//   if (
//     window.location.pathname === "/login" ||
//     window.location.pathname === "/register"
//   ) {
//     return (
//       <div className="flex items-center justify-between p-2 w-full border-b-2 border-violet-600 absolute">
//         <Link to="/">BudgetProj.</Link>
//       </div>
//     );
//   }
  return (
    <div className="flex items-center justify-between p-2 w-full border-b-2 border-violet-600 absolute">
      <Link to="/">BudgetProj.</Link>

      <div>
        <Link to="/login">
          <button className="bg-violet-700 mr-4 h-10 w-16 text-white rounded-xl text-base hover:bg-violet-500 hover:w-24 hover:h-12 duration-500">
            Sign In
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-violet-700 h-10 w-16 text-base text-white hover:bg-violet-500 hover:w-24 hover:h-12 rounded-xl duration-500">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
