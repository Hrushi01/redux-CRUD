import React from "react";
import { useState, useEffect } from "react";
import Show from "./Show";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";

import { Provider } from "react-redux";
import { store2 } from "../store2";

export default function Crud(props) {
  const navigate = useNavigate();
  const { logout } = props;

  const token = localStorage.getItem("token");
  const render = () => {
    if (token) {
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    render();
  }, [logout]);

  return (
    <div>
      <div>
        <Provider store={store2}>
          <Show logout={logout} />
        </Provider>
      </div>
    </div>
  );
}
