import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export default function NoAuth({ login }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login login={login} />} />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
