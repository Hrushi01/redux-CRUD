import React from "react";
// import Create from "./Create";
import AddData from "../reducers/AddData.jsx";
import {
  useGetAllPostQuery,
  useGetByIDQuery,
  useDeleteMutation,
} from "../services/post";
import UserList from "../reducers/List.jsx";
import Edituser from "../reducers/Edituser";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Custome() {
  return (
    <div className="bg-slate-600 container mx-auto px-2 max-w-4xl pt-10 py-2 ">
      <div className="container mx-auto px-2  pt-4   bg-slate-300 overflow-scroll">
        <div className=" bg-slate-400 p-3 flex justify-between">
          <Link
            to={"/crud"}
            className="bg-indigo-600 text-white rounded py-2 px-5 hover:bg-slate-200 mt-3 mb-3 "
            // className="bg-indigo-600 mr-1  text-white py-2 px-5 my-10 rounded hover:bg-indigo-200"
          >
            API data
          </Link>
          <h1 className="text-center pt-2 font-bold  font-serif text-2xl text-gray-700">
            Custom Data
          </h1>
          <hr />
        </div>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add-user" element={<AddData />} />
          <Route path="/edit-user/:id" element={<Edituser />} />
        </Routes>
      </div>
    </div>
  );
}
