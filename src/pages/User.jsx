import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div class="flex bg-gradient-to-t from-violet-500 via-blue-200 to-gray-100 h-screen">
      <div className="flex justify-center items-center h-full w-full">
        <button>
          <Link to="/newentry">New Entry</Link>
        </button>
      </div>
    </div>
  );
};

export default User;
