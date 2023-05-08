import React from "react";
import { useDataContext } from "../context/DataProvider";

const Bank = () => {
  const { bankData, account, setAccount, transactiontype, setTransactiontype } = useDataContext();
  console.log(account);
  return (
    <div className="h-screen flex items-center justify-center flex-col">
        <div>
            Account:{!account ? "Select account" : account }
            Transaction Type: {transactiontype}
        </div>
      <div>
        <select
          name="type"
          id="type"
          className="border border-violet-500 bg-gray-50 w-[250px] rounded-md"
            onChange={(e) => setTransactiontype(e.target.value)}
        >
          <option value="inflow">InFlow</option>
          <option value="outflow">OutFlow</option>
        </select>
      </div>
      <div className="flex">
        {bankData.map((bank) => (
          <div
            key={bank.id}
            className="w-[150px] max-w-sm m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            onClick={(e) => setAccount(e.target.parentElement.children[1].innerHTML)}
          >
            <div className="card flex flex-col items-center p-3 hover:cursor-pointer">
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
      </div>
    </div>
  );
};

export default Bank;
