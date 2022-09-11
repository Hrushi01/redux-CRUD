import React from "react";
import Button from "../components/Button";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handler = () => {
    const item = { email, password };
    console.log(item);
    axios
      .post("https://reqres.in/api/register", {
        email: email,
        password: password,
      })
      .then((result) => {
        // console.log(result.data);
        alert("sucessful registration Login to continue");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="pt-4 mx-auto  content-center max-w-2xl flex justify-center bg-slate-300">
      <div>
        <div className="pt-4 font-serif font-bold text-3xl content-center flex justify-center ">
          Signup
        </div>
        <br />
        <div className="col-span-6 ">
          <input
            type="text"
            placeholder="Email.."
            className="shadow-sm  p-2 outline-none"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Password.."
            className="shadow-sm p-2 outline-none"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <button
            onClick={() => {
              handler();
            }}
            className="bg-indigo-600 mr-6   text-white py-2 px-5 my-10 rounded hover:bg-indigo-200"
          >
            Signup
          </button>

          <Link to={"/login"}>
            <Button>Login</Button>
          </Link>

          {/* <Link to={"/"}>
            <Button className="mx-0 p-0">Submit</Button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
