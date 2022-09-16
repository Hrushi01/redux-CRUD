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

// import React from "react";
// import { Routes,Route, Link, } from "react-router-dom";
// // import { useContactsQuery } from "./servicess/api";
// import Students from "./servicess/Students";
// import Addstudent from "./servicess/Addstudent";
// import EditStudent from "./servicess/EditStudent";
// export default function App() {
// //  const {data,error,isLoading,isFetching,isSuccess }=useContactsQuery()



//   return (
//     <div>
//       <Link to={"/students/add"}>Add New</Link>
     
//           <Routes>
//             <Route exact path="/" element={<Students/>} />
//             <Route exact path="/students/add" element={<Addstudent/>} />
//             <Route exact path="/students/edit/:id" element={<EditStudent/>} />
            
//             </Routes>



//   </div>)
// }
