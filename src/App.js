import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AddAuth from "./Auth/AddAuth.jsx";
import NoAuth from "./Auth/NoAuth.jsx";

function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  // const [login, setlogin] = useState(false);
  const [singup, setsingup] = useState(false);

  // console.log("token-app", token);

  // const [deletepost,responseinfo]=useDeleteMutation();

  // const responsebyid = useGetByIDQuery(10);
  // const realid=responsebyid.data.data;
  // console.log("data", responsebyid.data.data);
  // const realdata = responseinfo.data.data;
  //

  // if (responseinfo.isLoading) return <div>LODING.......</div>;

  const login = (e) => {
    // axios call
    setToken(e);
    localStorage.setItem("token", e);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/");
  };

  return (
    <div className=" h-screen content-center  p-3 bg-slate-500 overflow-auto     ">
      {token ? <AddAuth logout={logout} /> : <NoAuth login={login} />}
    </div>
  );
}

export default App;
