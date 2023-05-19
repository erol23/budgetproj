import { useState } from "react";

const DataList = () => {
  const [vis, setVis] = useState(false);
  const [enterVal, setEnterVal] = useState("")

  const flow = ["Coffee",
    "Laptop",
    "Sunflower",
    "Soccer ball",
    "Guitar",
    "Umbrella",
    "Book",
    "Sunglasses",
    "Bicycle",
    "Pizza"]

  const result = flow.filter((el) => el.includes(enterVal) )

  const handleSet = (e) => {
    setEnterVal(e.target.innerHTML)
    setVis(false)
  }

  console.log(result)
  return (
    <div>
      <input type="text" value={enterVal} onChange={(e) => setEnterVal(e.target.value)} onClick={() => setVis(true)} />
      {vis ? (
        <div className="absolute z-10">
          <ul onClick={handleSet} className="h-[150px] overflow-auto w-[150px]">
            {result.map((el) => {
                return(
                    <li className="hover:bg-gray-400 cursor-pointer">{el}</li>
                )
            })}
          </ul>
          <div>
            <button onClick={() => setVis(false)}>Add</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DataList;
