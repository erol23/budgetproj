import { useState } from "react";
import { useDataContext } from "../context/DataProvider";
import { Outlet, useNavigate } from "react-router-dom";
import { inflow } from "../helper/budgetData";
import DataList from "../components/DataList";

const AddNewEntry = () => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState("");
  const [currency, setCurrency] = useState("");
  const [typeFlow, setTypeFlow] = useState(inflow);
  const [transactiontype, setTransactiontype] = useState("inflow")
  const [typeofflow, setTypeofflow] = useState()
  const navigate = useNavigate();
  const {
    addNewEntry,
    account,
    setAccount,
    addNewFlow,
    newIn,
    newOut
  } = useDataContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(typeofflow && currency){
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
  
      setDate("");
      setTransactiontype("inflow");
      setTypeofflow("")
      setAccount("");
      setAmount();
      setDescription("");
      setCurrency("");
  
      navigate("/table");
    }else{
      return alert("enter a flow type")
    }
    
  };

  const handleTran = (e) => {
    setTransactiontype(e.target.value);
    if (e.target.value === "inflow") {
      setTypeFlow(newIn);
      setTypeofflow(newIn[0].name);
    } else {
      setTypeFlow(newOut);
      setTypeofflow(newOut[0].name);
    }
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
              required
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
            <input
              type="number"
              placeholder="Enter amount"
              className="border border-violet-500 bg-gray-50 w-[250px] rounded-md"
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <DataList typeFlow={typeFlow} transactiontype={transactiontype} setTypeofflow={setTypeofflow} newIn={newIn} newOut={newOut} addNewFlow={addNewFlow}/>
            <input
              list="currency"
              placeholder="Choose Currency"
              className="border border-violet-500 bg-gray-50 w-[250px] rounded-md"
              onChange={(e) => setCurrency(e.target.value)}
              required
            />
            <datalist id="currency" required>
              <option value="Euro" />
              <option value="Dolar" />
              <option value="TL" />
            </datalist>
            <input
              type="text"
              placeholder="Enter desc..."
              className="border border-violet-500 bg-gray-50 w-[250px] rounded-md"
              onChange={(e) => setDescription(e.target.value)}
              required
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
