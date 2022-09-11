import React from "react";
import {useState} from "react";
import Show from "./Show.jsx";
import { Routes, Route, Link } from "react-router-dom";
import Create from "./components/Create"
import AddData from "./reducers/AddData.jsx";
import { useGetAllPostQuery,useGetByIDQuery,useDeleteMutation } from "./services/post";
import UserList from "./reducers/List.jsx";
import Edituser from './reducers/Edituser';
import { Provider } from "react-redux";
import {store2} from './store2'

function App() {
  


  
     

  

  // const [deletepost,responseinfo]=useDeleteMutation();
  


  // const responsebyid = useGetByIDQuery(10);
  // const realid=responsebyid.data.data;
  // console.log("data", responsebyid.data.data);
  // const realdata = responseinfo.data.data;
  // 

  // if (responseinfo.isLoading) return <div>LODING.......</div>;

  return (<div className="my-5 ">
    <div 
    className="container mx-auto px-2 max-w-4xl pt-10 py-2  bg-slate-400"
    >
      <Provider store={store2}>
        <Show/>
      </Provider>

      
      </div>
    
    <div className="container mx-auto px-2 max-w-4xl pt-10 py-2  bg-slate-400">
      <h1 className="text-center font-bold text-2xl text-gray-700">ADDED USERS</h1>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add-user" element={<AddData />} />
          <Route path="/edit-user/:id" element={<Edituser />} />
        </Routes>
      </div>
    

    

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
