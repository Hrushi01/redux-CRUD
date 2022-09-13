import React from "react";
import Button from "../components/Button";
import { useState, useEffect } from "react";
// import { Result } from "postcss";
// import {useHistory} from 'react-router-dom';
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import List from "../reducers/List";
import Crud from "../components/Crud";
import { render } from "@testing-library/react";

export default function Login(props) {
  // const { login, setlogin } = props;
  const { login } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const history = useHistory()

  // useEffect(() => {

  //     if(localStorage.getItem('user-info')){
  //         history.push('/add')

  //     }

  // }, [])
  let token = localStorage.getItem("token");

  const handler = async () => {
    let item = { email, password };
    console.log(item);
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((results) => {
        login(results.data.token);

        // <div>Hekko</div>
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const showdata = () => (
  //   <div>
  //     <Link to={"crud"}>
  //       <Crud />
  //     </Link>
  //   </div>
  // );

  // const loginn = () => {
  //   if (token == null) {
  //   } else {
  //     return <Navigate to={"/crud"} />;
  //   }
  // };

  // useEffect(() => {
  //   loginn();
  // }, [login, token]);

  // if (token == null) {
  // } else {
  //   return <Navigate to={"/crud"} />;
  // }
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

          {/* <Button
            // className="mx-0 p-0 mt-0 pt-0"
            onClick={() => setlogin(false)}
          >
            Logout
          </Button> */}
        </div>
        {login == true ? {} : console.log("USER IS NOT LOGGED IN")}
      </div>
    </div>
  );
}
