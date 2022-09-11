import React from "react";
import Button from "../components/Button";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Signup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handler = () => {
    const item = { name, email, password };
    console.log(item);
    axios
      .post("https://reqres.in/api/register", {
        email: email,
        password: password,
      })
      .then((result) => {
        // console.log(result.data);
        alert("scucess", result.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="pt-4 content-center flex  justify-center bg-slate-300">
      <div>
        <div className="pt-4 content-center   justify-center bg-slate-300">
          Signup
        </div>
        <br />
        <div className="col-span-6">
          <br />
          <input
            type="text"
            placeholder="Email.."
            className="shadow-sm outline-none"
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
            className="shadow-sm outline-none"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <Link to={"/"}>
            <Button
              className="mx-0 p-0"
              onClick={() => {
                handler();
              }}
            >
              Submit
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
