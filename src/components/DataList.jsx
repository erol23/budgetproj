import { useState } from "react";

const DataList = () => {
  const [vis, setVis] = useState(false);

  return (
    <div>
      <input type="text" onClick={() => setVis(true)} />
      {vis ? (
        <div className="absolute z-10">
          <ul>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
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
