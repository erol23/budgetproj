import { useState } from "react";
import { useDataContext } from "../context/DataProvider";
import { useNavigate } from "react-router-dom";

const AddNewEntry = () => {
  const [date, setDate] = useState("")
  const [transactiontype, setTransactiontype] = useState("Inflow")
  const [account, setAccount] = useState("")
  const [amount, setAmount] = useState()
  const [description, setDescription] = useState("")
  const [currency, setCurrency] = useState("")
  const navigate = useNavigate();
  const { addNewEntry, bankData } = useDataContext();

  console.log(bankData)

  const handleSubmit = (e) => {
    e.preventDefault();
    const newElm = {date, transactiontype, account, amount, description, currency}
    addNewEntry(newElm)
    // console.log(newElm)
    setDate("")
    setTransactiontype("")
    setAccount("")
    setAmount()
    setDescription("")
    setCurrency("")

    navigate("/table");
  };

  return (
    <div className="flex h-screen justify-center items-center">
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
          onChange={(e) => setTransactiontype(e.target.value)}
        >
          <option value="inflow">InFlow</option>
          <option value="outflow">OutFlow</option>          
        </select>
        <select
          name="account"
          id="account"
          className="border border-violet-500 bg-gray-50 w-[250px] rounded-md"
          onChange={(e) => setAccount(e.target.value)}
        >
          {
            bankData.map((bank) => {
              return(
                <option value={bank.name}>{bank.name}</option>
              )
            })
          }         
        </select>
        <input
          type="number"
          placeholder="Enter amount"
          className="border border-violet-500 bg-gray-50 w-[250px] rounded-md"
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          list="typeofin/out"
          placeholder="Enter type of inflow/outflow"
          className="border border-violet-500 bg-gray-50 w-[250px] rounded-md"
          onChange={(e) => setDescription(e.target.value)}
        />
        <datalist id="typeofin/out">
          <option value="Garanti" />
          <option value="İşbankasi" />
          <option value="Akbank" />
        </datalist>
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
        <button type="submit" className="bg-violet-500 text-white rounded-md">
          Add Entry
        </button>
      </form>
    </div>
  );
};

export default AddNewEntry;
