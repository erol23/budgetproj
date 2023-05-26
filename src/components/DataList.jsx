import { useState } from "react";
import FlowModal from "./FlowModal";

const DataList = ({typeFlow, setTypeofflow, addNewFlow, newIn, newOut, transactiontype}) => {
  const [vis, setVis] = useState(false);
  const [enterVal, setEnterVal] = useState("");
  const [visible, setVisible] = useState(false)

  function filterItem(item) {
    if(item.name.includes(enterVal)){
      return true
    }
    return false
  }

  // const result = flow.filter((el) => el.includes(enterVal));
  const resultIn = newIn.filter(filterItem);
  const resultOut = newOut.filter(filterItem);
  
  // console.log(result)
  const handleSet = (e) => {
    setEnterVal(e.target.innerHTML);
    setTypeofflow(e.target.innerHTML);
    setVis(false);
  };

  return (
    <>
    {visible ? <FlowModal addNewFlow={addNewFlow} setVisible={setVisible} setVis={setVis}/> : null }
    <div>
      <input
        type="text"
        className="border border-violet-500 bg-gray-50 w-[250px] rounded-md"
        placeholder="Choose Flow Type"
        value={enterVal}
        onChange={(e) => setEnterVal(e.target.value)}
        onClick={() => setVis(!vis)}
      />
      {vis ? (
        <div className="absolute z-10">
          <ul onClick={handleSet} className="max-h-[100px] overflow-auto w-[250px] bg-white">
            {transactiontype === "inflow" ? 
              resultIn.map((el) => {
                return <li className="hover:bg-gray-400 cursor-pointer">{el.name}</li>
              }) :
              resultOut.map((el) => {
                return <li className="hover:bg-gray-400 cursor-pointer">{el.name}</li>
              })
            }
            {/* {typeFlow.map((el) => {
              return <li className="hover:bg-gray-400 cursor-pointer">{el.name}</li>;
            })} */}
          </ul>
          <div className="bg-gray-300">
            <button onClick={() => setVisible(true)}>Add</button>
          </div>
        </div>
      ) : null}
    </div>
    </>
  );
};

export default DataList;
