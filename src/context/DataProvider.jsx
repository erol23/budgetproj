import { createContext, useContext, useState } from "react";
import { bankAccount, budgetData, inflow } from "../helper/budgetData";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(budgetData);
  const [bankData, setBankData] = useState(bankAccount);
  const [typeFlow, setTypeFlow] = useState(inflow);
  const [date, setDate] = useState("");
  const [transactiontype, setTransactiontype] = useState("inflow");
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState("");
  const [currency, setCurrency] = useState("");
  const [typeofflow, setTypeofflow] = useState(inflow[0].name);

  const addNewEntry = (newEntry) => {
    setData([newEntry, ...data]);
  };

  const values = {
    data,
    setData,
    bankData,
    setBankData,
    typeFlow,
    setTypeFlow,
    date,
    setDate,
    transactiontype,
    setTransactiontype,
    account,
    setAccount,
    amount,
    setAmount,
    description,
    setDescription,
    currency,
    setCurrency,
    typeofflow,
    setTypeofflow,
    addNewEntry,
  };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  return useContext(DataContext);
};

export default DataProvider;
