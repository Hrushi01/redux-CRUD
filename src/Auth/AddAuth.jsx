import React from "react";
import { Route, Routes } from "react-router-dom";
import Addnew from "../pages/Addnew.jsx";
import Custome from "../pages/Custome";
import Crud from "../components/Crud";
import Edituser from "../reducers/Edituser.jsx";
import AddData from "../reducers/AddData";

export default function AddAuth(props) {
  const { logout } = props;
  return (
    <div>
      <Routes>
        <Route path="/" element={<Crud logout={logout} />} />
        <Route path="/custom" element={<Custome />} />
        <Route path="/crud" element={<Crud logout={logout} />} />
      </Routes>
      {/* <div className="bg-slate-600 container mx-auto px-2 max-w-4xl pt-10 py-2 "> */}
      {/* <div className="container mx-auto px-2  pt-4   bg-slate-300 overflow-scroll"> */}
      <Routes>
        <Route path="/add-user" element={<AddData />} />
        <Route path="/custom/edit-user/:id" element={<Edituser />} />
      </Routes>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}
