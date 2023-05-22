import { createContext, useContext, useState } from "react";
import { bankAccount, budgetData } from "../helper/budgetData";
import {inflow, outflow} from "../helper/budgetData"

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(budgetData);
  const [bankData, setBankData] = useState(bankAccount);
  const [account, setAccount] = useState("Select account");

  const addNewEntry = (newEntry) => {
    setData([newEntry, ...data]);
  };

  const addNewAccount = (newAcc) => {
    setBankData([newAcc, ...bankData])
  }

  const addNewFlow = (newFlow) => {
    console.log(newFlow)
  }

  const values = {
    data,
    setData,
    bankData,
    setBankData,
    account,
    setAccount,
    addNewEntry,
    addNewAccount,
    addNewFlow
  };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  return useContext(DataContext);
};

export default DataProvider;
