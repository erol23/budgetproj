import { createContext, useContext, useState } from "react";
import { bankAccount, budgetData, typeofflow } from "../helper/budgetData";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(budgetData);
  const [bankData, setBankData] = useState(bankAccount);
  const [typeFlow, setTypeFlow] = useState(typeofflow);

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
    addNewEntry,
  };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  return useContext(DataContext);
};

export default DataProvider;
