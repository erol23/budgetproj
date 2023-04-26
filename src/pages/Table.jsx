import { useDataContext } from "../context/DataProvider"

const Table = () => {
  const {data} = useDataContext()

  return (
    <div>
         <div className="flex items-center h-screen w-full justify-center">
        <table className="w-full">
          <tr className="bg-gray-500">
            <th>Date</th>
            <th>Type</th>
            <th>Account</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Currency</th>
          </tr>
          {
            data.map((budget, index) => {
              return(
                <tr key={index}>
                  <th>{budget.date}</th>
                  <th>{budget.transactiontype}</th>
                  <th>{budget.account}</th>
                  <th>{budget.amount}</th>
                  <th>{budget.description}</th>
                  <th>{budget.currency}</th>
                </tr>
              )
            })
          }
        </table>
      </div>
    </div>
  )
}

export default Table