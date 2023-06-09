import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="flex bg-gradient-to-t from-violet-500 via-blue-200 to-gray-100 h-screen">
      <div className="flex justify-center items-center h-full w-full gap-2">
        <button className="bg-violet-500 w-[120px] h-[50px] rounded-md text-white hover:shadow-xl">
          <Link to="/newentry/bank">New Entry</Link>
        </button>
      </div>
    </div>
  );
};

export default User;
