import React from "react";

const BankModal = ({ setVisible }) => {
  return (
    <div className="h-full w-full absolute z-10">
      <div className="bg-black opacity-80 h-full fixed z-[1] w-full transition ease-linear duration-1000 flex justify-center items-center"></div>
      <div className="h-full w-full flex justify-center items-center absolute z-10">
        <div className="bg-white w-1/2 h-1/2 flex flex-col">
          <div className="bg-white">Bank</div>
          <div className="flex w-full h-full justify-evenly items-end mb-3">
            <button className="bg-blue-500 w-[120px] h-[50px] rounded-md text-white hover:shadow-xl">
              Save
            </button>
            <button
              className="bg-red-500 w-[120px] h-[50px] rounded-md text-white hover:shadow-xl"
              onClick={() => setVisible(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankModal;
