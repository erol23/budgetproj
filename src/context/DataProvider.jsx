import { createContext, useContext, useState } from "react";
import { budgetData } from "../helper/budgetData";


export const DataContext = createContext()


const DataProvider = ({children}) => {
    const [data, setData] = useState(budgetData)
    const values = {data, setData}

    return(
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => {
    return useContext(DataContext)
}

export default DataProvider;