import React from "react";
import { Route, Routes } from "react-router-dom";
import Custome from "../pages/Custome";
import Crud from "../pages/Crud";
import Edituser from "../custom services/Edituser";
import AddData from "../custom services/AddData";

export default function AddAuth(props) {
  const { logout } = props;
  return (
    <div>
      <Routes>
        <Route path="/" element={<Crud logout={logout} />} />
        <Route path="/custom" element={<Custome />} />
        <Route path="/crud" element={<Crud logout={logout} />} />
        <Route path="/login" element={<Crud logout={logout} />} />

        <Route path="/add-user" element={<AddData />} />
        <Route path="/custom/edit-user/:id" element={<Edituser />} />
      </Routes>
    </div>
  );
}
