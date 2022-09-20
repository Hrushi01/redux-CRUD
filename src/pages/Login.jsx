import React from "react";
import Button from "../components/Button";
import { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { Link, Navigate } from "react-router-dom";

export default function Login(props) {
  const { login } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let token = localStorage.getItem("token");

  const handler = async () => {
    let item = { email, password };

    // console.log(item.email);
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((results) => {
        login(results.data.token);
        toast.success("Login Successful", {
          position: "top-left",
        });
      })
      .catch((err) => {
        console.log(err.code, "f");
        toast.error(err.code, {
          position: "top-left",
        });
      });
  };

  return (
    <div className="pt-4 mx-auto  content-center max-w-2xl flex justify-center bg-slate-300">
      <div>
        <div className="pt-4 font-serif font-bold text-3xl content-center flex justify-center ">
          Login
        </div>
        <br />
        <div className="col-span-6">
          <input
            type="text"
            placeholder="Email.."
            className="shadow-sm p-2 outline-none"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Password.."
            className="shadow-sm p-2  outline-none"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />

          <button
            className="bg-indigo-600 mr-6   text-white py-2 px-5 my-10 rounded hover:bg-indigo-200"
            onClick={() => handler()}
          >
            Login
          </button>

          <Link to={"/signup"}>
            <Button>Signup</Button>
          </Link>
        </div>
        <ToastContainer />
        {login == true ? {} : console.warn("USER IS NOT LOGGED IN")}
      </div>
    </div>
  );
}
