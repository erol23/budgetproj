import { Banks } from "../helper/budgetData" 

const BankModal = ({ setVisible }) => {
  console.log(Banks)
  return (
    <div className="h-full w-full flex justify-center items-center absolute z-10">
      <div className="bg-black opacity-80 h-full fixed z-[1] w-full transition ease-linear duration-1000 flex justify-center items-center"></div>
      <div className="bg-white h-[500px] w-[700px] flex flex-col justify-between rounded-lg absolute z-10">
        <div>
          <p>Bank's choosed: ING</p>
        </div>
        <div className="mt-5 w-full h-1/2 flex justify-center items-center overflow-auto no-scrollbar">
          <div className="mt-20 flex flex-wrap justify-center items-center">
            {Banks.map((bank) => {
              return(
                <div
              key={bank.id}
              className="w-[150px] max-w-sm m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div
                key={bank.id}
                className="card flex flex-col items-center p-3 hover:cursor-pointer"
              >
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={bank.img}
                  alt={bank.name}
                />
                {/* <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {bank.name}
                </h5> */}
              </div>
            </div>
              )
            })}
          </div>
        </div>
        <div className="flex w-full justify-evenly items-end mb-3">
            <button className="bg-blue-500 w-[120px] h-[50px] rounded-md text-white hover:shadow-xl">
              Save
            </button>
            <button
              className="bg-red-500 w-[120px] h-[50px] rounded-md text-white hover:shadow-xl"
              onClick={() => setVisible(false)}
            >
              Close
            </button>
          </div>
      </div>
    </div>
  );
};

export default BankModal;
