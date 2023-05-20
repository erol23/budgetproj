import { useState } from "react";
import { useDataContext } from "../context/DataProvider";
import { Outlet, useNavigate } from "react-router-dom";
import { inflow, outflow } from "../helper/budgetData";
import DataList from "../components/DataList";

const AddNewEntry = () => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState("");
  const [currency, setCurrency] = useState("");
  const [typeFlow, setTypeFlow] = useState(inflow);
  const [transactiontype, setTransactiontype] = useState()
  const [typeofflow, setTypeofflow] = useState()
  const navigate = useNavigate();
  const {
    addNewEntry,
    account,
    setAccount,
  } = useDataContext();

  // console.log(typeFlow[0])

  const handleSubmit = (e) => {
    e.preventDefault();
    const newElm = {
      date,
      transactiontype,
      account,
      amount,
      description,
      currency,
      typeofflow,
    };
    addNewEntry(newElm);
    // console.log(newElm)
    setDate("");
    setTransactiontype("inflow");
    setTypeofflow("")
    setAccount("");
    setAmount();
    setDescription("");
    setCurrency("");

    navigate("/table");
  };

  const handleTran = (e) => {
    setTransactiontype(e.target.value);
    if (e.target.value === "inflow") {
      setTypeFlow(inflow);
      setTypeofflow(inflow[0].name);
    } else {
      setTypeFlow(outflow);
      setTypeofflow(outflow[0].name);
    }
    // console.log(typeofflow);
  };

  // console.log(window.location.pathname);
  return (
    <>
      {window.location.pathname === "/newentry/bank" ? (
        <Outlet />
      ) : (
        <div className="flex flex-col h-screen justify-center items-center">
          <div className="flex flex-col w-full pl-3 ">
            <h2>Account: {!account ? "Select account" : account}</h2>
          </div>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <input
              type="date"
              className="border border-violet-500 bg-gray-50 w-[250px] rounded-md"
              onChange={(e) => setDate(e.target.value)}
            />
            <select
              name="type"
              id="type"
              className="border border-violet-500 bg-gray-50 w-[250px] rounded-md"
              onChange={handleTran}
            >
              <option value="inflow">InFlow</option>
              <option value="outflow">OutFlow</option>
            </select>
            {/* <select
              name="account"
              id="account"
              className="border border-violet-500 bg-gray-50 w-[250px] rounded-md"
              onChange={(e) => setAccount(e.target.value)}
            >
              {bankData.map((bank) => {
                return <option value={bank.name}>{bank.name}</option>;
              })}
            </select> */}
            <input
              type="number"
              placeholder="Enter amount"
              className="border border-violet-500 bg-gray-50 w-[250px] rounded-md"
              onChange={(e) => setAmount(e.target.value)}
            />
            {/* <select
              name="typeofflow"
              id="typeofflow"
              className="border border-violet-500 bg-gray-50 w-[250px] rounded-md"
              onChange={(e) => setTypeofflow(e.target.value)}
            >
              {typeFlow.map((flow) => {
                return (
                  <>
                    <option value={flow.name}>{flow.name}</option>
                  </>
                );
              })}
            </select> */}
            <DataList typeFlow={typeFlow}/>
            <input
              list="currency"
              placeholder="Choose Currency"
              className="border border-violet-500 bg-gray-50 w-[250px] rounded-md"
              onChange={(e) => setCurrency(e.target.value)}
            />
            <datalist id="currency">
              <option value="Euro" />
              <option value="Dolar" />
              <option value="TL" />
            </datalist>
            <input
              type="text"
              placeholder="Enter desc..."
              className="border border-violet-500 bg-gray-50 w-[250px] rounded-md"
              onChange={(e) => setDescription(e.target.value)}
            />
            <button
              type="submit"
              className="bg-violet-500 text-white rounded-md"
            >
              Add Entry
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddNewEntry;
