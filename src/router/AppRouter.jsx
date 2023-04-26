import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import User from "../pages/User";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import VerNav from "../components/VerNav";
import AddNewEntry from "../pages/AddNewEntry";
import Table from "../pages/Table";
import DataProvider from "../context/DataProvider";

const AppRouter = () => {
  const [user, setUser] = useState(false);
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <DataProvider>
      <VerNav nav={nav} handleClick={handleClick} />
      <Navbar user={user} nav={nav} handleClick={handleClick} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route element={<PrivateRouter user={user} />}>
          <Route path="/user" element={<User />} />
          <Route path="/table" element={<Table />} />
          <Route path="/newentry" element={<AddNewEntry />} />
        </Route>
      </Routes>
    </DataProvider>
  );
};

export default AppRouter;
