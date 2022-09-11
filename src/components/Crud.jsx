import React from "react";
import { useState } from "react";
import Show from "../Show";
import { Routes, Route, Link } from "react-router-dom";
import Create from "./Create";
import AddData from "../reducers/AddData.jsx";
import {
  useGetAllPostQuery,
  useGetByIDQuery,
  useDeleteMutation,
} from "../services/post";
import UserList from "../reducers/List.jsx";
import Edituser from "../reducers/Edituser";
import { Provider } from "react-redux";
import { store2 } from "../store2";

export default function Crud() {
  return (
    <div>
      <div className="container mx-auto px-2 max-w-4xl pt-10 py-2  bg-slate-400">
        <Provider store={store2}>
          <Show />
        </Provider>
      </div>
      <div className="container mx-auto px-2 max-w-4xl pt-10 py-2  bg-slate-400">
        <h1 className="text-center font-bold text-2xl text-gray-700">
          ADDED USERS
        </h1>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add-user" element={<AddData />} />
          <Route path="/edit-user/:id" element={<Edituser />} />
        </Routes>
      </div>
    </div>
  );
}
