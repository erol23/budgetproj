import { Dropdown } from "flowbite-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DropDownList = () => {
    const [labelValue, setLabelValue] = useState("Choose Account")
  const navigate = useNavigate();
  return (
    <div className="border border-violet-500">
      <Dropdown
        label={labelValue}
        inline={true}
        className="w-[150px] bg-gray-50"
      >
        <ul onClick={(e) => setLabelValue(e.target.innerHTML) }>
            <li>Hello World</li>
            <li>enes</li>
            <li>gizem</li>
            <li>erkan</li>
            <li>erol</li>
            <li>Hello World</li>
        </ul>
        {/* <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item> */}
        <button onClick={() => navigate("/newentry")}>Add new account</button>
      </Dropdown>
    </div>
  );
};

export default DropDownList;
