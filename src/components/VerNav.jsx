import { FaTimes } from "react-icons/fa";

const VerNav = ({ nav, handleClick }) => {
  return (
    <div className={nav ? "bg-black opacity-80 h-screen fixed z-[1] w-full transition ease-linear duration-1000" : "hidden"}>
      <div className="h-full z-10 w-1/3 bg-white">
        <div className="flex justify-end">
          <button onClick={handleClick}>
            <FaTimes />
          </button>
        </div>
        <ul className="w-full">
          <li>Hello World</li>
          <li>Hello World</li>
          <li>Hello World</li>
          <li>Hello World</li>
          <li>Hello World</li>
          <li>Hello World</li>
          <li>Hello World</li>
          <li>Hello World</li>
          <li>Hello World</li>
          <li>Hello World</li>
        </ul>
      </div>
    </div>
  );
};

export default VerNav;
