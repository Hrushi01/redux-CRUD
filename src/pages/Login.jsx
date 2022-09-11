import React from "react";
import Button from "../components/Button";
import { useState, useEffect } from "react";
// import { Result } from "postcss";
// import {useHistory} from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router-dom";
import List from "../reducers/List";
import Crud from "../components/Crud";

export default function Login(props) {
  const { login, setlogin } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const history = useHistory()

  // useEffect(() => {

  //     if(localStorage.getItem('user-info')){
  //         history.push('/add')

  //     }

  // }, [])
  let token = localStorage.getItem("user");

  const handler = async () => {
    let item = { email, password };
    console.log(item);
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((results) => {
        setlogin(true);
        console.log("logiiiin", login);

        // <div>Hekko</div>
      })
      .catch((err) => {
        console.log(err);
      });

    // const getdata = async ()=>{
    //     const result= await fetch();

    // }

    // let result = await fetch('https://reqres.in/api/login',
    // {
    //     method:"POST",

    //     headers:{
    //         "Content-Type":"application/json",
    //         "Accept":"application/json"
    //     },
    //     body: JSON.stringify(item),

    // }
    // );
    // result= await result.json();
    // localStorage.setItem("user-info",JSON.stringify(result))
    // history.pushState("/add")
  };
  //   if (token) {
  //     setlogin("yes");
  //     console.log("login", login);
  //     console.log("token yyes");
  //   }
  // else{
  //     token=axios.post("https://reqres.in/api/login",
  //     {
  //         email:email,
  //         password:password
  //     })
  //     .then(results=>{
  //         setlogin("yes")
  //         console.log("done")

  //         // <div>Hekko</div>
  //     })
  //     .catch(err=>{console.log(err)}
  const showdata = () => (
    <div>
      <Link to={"crud"}>
        <Crud />
      </Link>
    </div>
  );
  return (
    <div className="pt-4 content-center flex justify-center bg-slate-300">
      <div>
        <div className="pt-4 content-center flex justify-center bg-slate-300">
          Login
        </div>
        <br />
        <div className="col-span-6">
          <input
            type="text"
            placeholder="Email.."
            className="shadow-sm outline-none"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Password.."
            className="shadow-sm outline-none"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />

          <Button className="mx-0 p-0" onClick={() => handler()}>
            Submit
          </Button>

          <Button className="mx-0 p-0" onClick={() => setlogin("no")}>
            Logout
          </Button>
        </div>
        {login == true ? showdata() : console.log("not login")}
      </div>
    </div>
  );
}
