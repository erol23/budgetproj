import { Dropdown } from "flowbite-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const DropDownList = () => {
    const navigate = useNavigate()
  return (
    <Dropdown label="" dismissOnClick={false} className="w-[150px] bg-white text-gray-50">
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
      <button onClick={() => navigate("/newentry")}>Add new account</button>
    </Dropdown>

  );
};

export default DropDownList;
