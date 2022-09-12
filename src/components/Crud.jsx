import React from "react";
import { useState, useEffect } from "react";
import Show from "../pages/Show";
import { Routes, Route, Link, Navigate } from "react-router-dom";
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
import Custome from "../pages/Custome";

export default function Crud(props) {
  const { login, setlogin } = props;

  const token = localStorage.getItem("token");
  const render = () => {
    if (token) {
    } else {
      <Navigate to={"/login"} />;
    }
  };

  useEffect(() => {
    render();
  }, [login]);

  return (
    <div>
      <div>
        <Provider store={store2}>
          <Show login={login} setlogin={setlogin} />
        </Provider>
      </div>
    </div>
  );
}
