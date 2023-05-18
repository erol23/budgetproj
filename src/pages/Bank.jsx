import React, { useState } from "react";
import { useDataContext } from "../context/DataProvider";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import BankModal from "../components/BankModal";

const Bank = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const {
    bankData,
    account,
    setAccount,
  } = useDataContext();


  const handleClick = () => {
    if (account === "Select account") {
      console.log("clicked");
      return alert("choose an account");
    } else {
      navigate("/newentry");
    }
  };

  // console.log(typeFlow);
  return (
    <>
      {visible ? <BankModal setVisible={setVisible}/> : null}
      <div className="h-screen flex items-center justify-center flex-col">
        <div className="flex flex-col w-full pl-3 ">
          <h2>Account: {account}</h2>
        </div>
        <div className="flex">
          <button
            className="bg-violet-500 w-[120px] h-[50px] rounded-md text-white hover:shadow-xl"
            onClick={() => setVisible(true)}
          >
            Add Bank or Cash Account
          </button>
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
        </div>
        <div>
          <button
            onClick={handleClick}
            className="flex items-center justify-center bg-violet-500 w-[120px] h-[50px] rounded-md text-white hover:shadow-xl"
          >
            Next Page
            <span className="ml-1 hover:ml-3 duration-300">
              <HiArrowNarrowRight />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Bank;
