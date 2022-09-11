import React from "react";
import Crud from "./components/Crud.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Show from "./Show.jsx";

function App() {
  const [login, setlogin] = useState(false);
  const [singup, setsingup] = useState(false);
  // const [deletepost,responseinfo]=useDeleteMutation();

  // const responsebyid = useGetByIDQuery(10);
  // const realid=responsebyid.data.data;
  // console.log("data", responsebyid.data.data);
  // const realdata = responseinfo.data.data;
  //

  // if (responseinfo.isLoading) return <div>LODING.......</div>;

  return (
    <div className="my-5  ">
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/" element={<Signup />} /> */}
        {/* <Route path="/crud" element={<Crud />} /> */}
      </Routes>
      {/* {login ? <Crud /> : <Login login={login} setlogin={setlogin} />} */}
      <Crud />

      {/* <Crud /> */}
      {/* <Login /> */}
      {/* <Signup /> */}

      {/* <div className="font-bold w-screen content-center flex justify-center">
        Displaying all data
      </div>
      {realdata.map((val,key) => (
        <div key={key}>
        <img src={val.avatar} alt="" />
        <div>{val.id}) {val.first_name}</div>
        <hr />
        </div>
      ))} */}

      {/* searched data */}

      {/* <div>Searched data is:{realid.id}) {realid.first_name}</div>
      {console.log("dayayyy",realid.id)} */}

      {/* delete data */}
      {/* <div>Deleting:
          <button onClick={()=>{deletepost(2)}} className="bg-cyan-200 h-10 border-solid border-r-black w-10">DEL</button>
        </div> */}
    </div>
  );
}

export default App;
