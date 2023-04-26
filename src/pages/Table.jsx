import { budgetData } from "../helper/budgetData"

const Table = () => {
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
            budgetData.map((budget) => {
              return(
                <tr>
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