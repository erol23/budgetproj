import React from "react";
import { useDataContext } from "../context/DataProvider";
import { inflow, outflow } from "../helper/budgetData";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Bank = () => {
  const navigate = useNavigate()
  const {
    bankData,
    account,
    setAccount,
    transactiontype,
    setTransactiontype,
    typeFlow,
    setTypeFlow,
    typeofflow,
    setTypeofflow,
  } = useDataContext();

  const handleTran = (e) => {
    setTransactiontype(e.target.value);
    if (e.target.value === "inflow") {
      setTypeFlow(inflow);
    } else {
      setTypeFlow(outflow);
    }
    console.log(typeofflow);
  };

  const handleClick = () => {
    navigate("/newentry")
  }

  // console.log(typeFlow);
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <div className="flex flex-col w-full pl-3 ">
        <h2>Account: {!account ? "Select account" : account}</h2>
        <h2>Transaction Type: {transactiontype}</h2>
        <h2>Type of Flow: {typeofflow}</h2>
      </div>
      <div>
        <select
          name="type"
          className="border border-violet-500 bg-gray-50 w-[250px] rounded-md"
          // onChange={(e) => setTransactiontype(e.target.value)}
          onChange={handleTran}
        >
          <option id="0" value="inflow">
            InFlow
          </option>
          <option id="1" value="outflow">
            OutFlow
          </option>
        </select>
      </div>
      <div className="flex">
        {bankData.map((bank) => (
          <div
            key={bank.id}
            className="w-[150px] max-w-sm m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            onClick={(e) =>
              setAccount(e.target.parentElement.children[1].innerHTML)
            }
          >
            <div
              key={bank.id}
              className="card flex flex-col items-center p-3 hover:cursor-pointer"
            >
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
        <div className="m-5">
          <select
            name="typeofflow"
            className="border border-violet-500 bg-gray-50 w-[250px] rounded-md"
            onChange={(e) => setTypeofflow(e.target.value)}
          >
            {typeFlow.map((flow) => {
              return (
                <>
                  <option key={flow.id} value={flow.name}>
                    {flow.name}
                  </option>
                </>
              );
            })}
          </select>
        </div>
      </div>
      <div>
        <button onClick={handleClick} className="flex items-center justify-center bg-violet-500 w-[120px] h-[50px] rounded-md text-white hover:shadow-xl">
          Next Page 
          <span className="ml-1 hover:ml-3 duration-300"><HiArrowNarrowRight/></span>
        </button>
      </div>
    </div>
  );
};

export default Bank;
