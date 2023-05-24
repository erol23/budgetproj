import React from 'react'
import { useState } from 'react'

const FlowModal = ({setVisible, addNewFlow, setVis}) => {
  const [flowName, setFlowName] = useState("")
  const [flowType, setFlowType] = useState("inflow")

  const handleSave = () => {
    const newFlow = {
      id: null,
      name: flowName,
      type: flowType
    }

    addNewFlow(newFlow)
    setFlowName("")
    setFlowType("inflow")
    setVis(false)
    setVisible(false)
  }

  return (
    <div className="h-full w-full flex justify-center items-center absolute top-0 left-0 z-20">
      <div className="bg-black opacity-80 h-full fixed z-[1] w-full transition ease-linear duration-1000 flex justify-center items-center"></div>
      <div className="bg-white h-[500px] w-[700px] flex flex-col justify-evenly items-center rounded-lg absolute z-10">
        <form className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Enter a new flow"
            className="border border-violet-500 bg-gray-50 w-[250px] rounded-md"
            onChange={(e) => setFlowName(e.target.value)}
          />
          <select
              name="type"
              id="type"
              className="border border-violet-500 bg-gray-50 w-[250px] rounded-md"
              onChange={(e) => setFlowType(e.target.value)}
            >
              <option value="inflow">InFlow</option>
              <option value="outflow">OutFlow</option>
            </select>
        </form>
        <div className="flex w-full justify-evenly items-end mb-3">
          <button type="submit" onClick={handleSave} className="bg-blue-500 w-[120px] h-[50px] rounded-md text-white hover:shadow-xl">
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
  )
}

export default FlowModal