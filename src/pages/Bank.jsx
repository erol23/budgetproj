import React from "react";
import { useDataContext } from "../context/DataProvider";

const Bank = () => {
    const { bankData } = useDataContext();
    return (
    <>
      {bankData.map((bank) => (
        <div className="w-[150px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center p-3 hover:cursor-pointer">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={bank.img}
              alt={bank.name}
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {bank.name}
            </h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default Bank;
