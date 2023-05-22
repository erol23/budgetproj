import { createContext, useContext, useState } from "react";
import { bankAccount, budgetData } from "../helper/budgetData";
import {inflow, outflow} from "../helper/budgetData"

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(budgetData);
  const [bankData, setBankData] = useState(bankAccount);
  const [account, setAccount] = useState("Select account");
  const [newIn, setNewIn] = useState(inflow)
  const [newOut, setNewOut] = useState(outflow)

  const addNewEntry = (newEntry) => {
    setData([newEntry, ...data]);
  };

  const addNewAccount = (newAcc) => {
    setBankData([newAcc, ...bankData])
  }

  const addNewFlow = (newFlow) => {
    if(newFlow.type === "inflow"){
      setNewIn([...newIn, newFlow])
      console.log(newIn)
    }else{
      setNewOut([...newOut, newFlow])
      console.log(newOut)
    }
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
