import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Banks } from "../helper/budgetData";

const BankModal = ({ setVisible, bankData, addNewAccount }) => {
  const [bankName, setBankName] = useState("");
  const [bankCurrency, setBankCurrency] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    const newBank = {
      id: bankData.lenght,
      name: bankName,
      type: "money",
      currency: bankCurrency,
      displayName: displayName,
      img: undefined
    };
    addNewAccount(newBank)
    setBankName("")
    setBankCurrency("")
    setDisplayName("")

    setVisible(false)
  };

  return (
    <div className="h-full w-full flex justify-center items-center absolute z-10">
      <div className="bg-black opacity-80 h-full fixed z-[1] w-full transition ease-linear duration-1000 flex justify-center items-center"></div>
      <div className="bg-white h-[500px] w-[700px] flex flex-col justify-evenly items-center rounded-lg absolute z-10">
        <form className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Enter a bank's name"
            className="border border-violet-500 bg-gray-50 w-[250px] rounded-md"
            onChange={(e) => setBankName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter type of currency"
            className="border border-violet-500 bg-gray-50 w-[250px] rounded-md"
            onChange={(e) => setBankCurrency(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter an account's name"
            className="border border-violet-500 bg-gray-50 w-[250px] rounded-md"
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </form>
        <div className="flex w-full justify-evenly items-end mb-3">
          <button type="submit" onClick={handleSave} className="bg-blue-500 w-[120px] h-[50px] rounded-md text-white hover:shadow-xl">
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
  );
};

export default BankModal;
