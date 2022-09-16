import React, { useRef } from "react";
import {
  useGetAllPostQuery,
  useGetByIDQuery,
  useDeleteMutation,
  useCreatePostMutation,
} from "../services/post";
import { v4 as uuidv4 } from "uuid";

import { useState, useEffect } from "react";
import "./Show.css";
import Button from "../components/Button";
import Login from "./Login";
import TextField from "../components/TextField";
import JSON from "../json.json";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Show(props) {
  const navigate = useNavigate();
  const { logout } = props;
  const { login, setlogin } = props;
  const [real, setreal] = useState("");
  const { data, isLoading, isSuccess } = useGetAllPostQuery();
  const [add, setadd] = useState(false);
  const [logo, setlogo] = useState("");

  const [newname, setnewname] = useState("");
  // console.log("new dattttaata", JSON);
  const [newjob, setnewjob] = useState("");

  const [deletepost, resp] = useDeleteMutation();
  console.log("After delete data", resp.status);

  const [createPost, ress] = useCreatePostMutation();
  // console.log("ress", resp);

  let realdata = data;
  console.log("Before delete data", realdata);

  const [show, setshow] = useState("first");

  const newpost = JSON;
  // console.log(newpost, "newpost");

  // const deldata = (id) => {
  //   axios.delete(`https://reqres.in/api/users/${id}`).then((results) => {
  //     console.log(results);
  //   });
  // };

  const final = (e) => {
    deletepost(e);

    const up = realdata.data.filter((data) => data.id != e);
    realdata = up;
    // const up= realdata.filter((id)=> )
  };

  const newd = () => {
    JSON.push({ id: uuidv4(), name: newname, job: newjob });
  };
  const delnew = (e) => {
    delete newpost[e];
    delete JSON[e];
    console.log("Delete id", e);
  };

  const token = localStorage.getItem("token");

  const switchh = () => {
    navigate("/custom");
    // return <Navigate to={"/login"} />;
  };

  return (
    <>
      <div className="bg-slate-600 container mx-auto px-2 max-w-4xl pt-10 py-2 ">
        <div className="container mx-auto px-2  pt-4   bg-slate-300 overflow-scroll">
          <div className=" bg-slate-400 p-3 flex justify-between">
            <Button
              onClick={() => {
                switchh();
              }}
            >
              Custom data
            </Button>

            <h2 className="text-center pt-5 font-bold font-serif text-2xl text-gray-700">
              Data from Api
            </h2>
            <Button
              onClick={() => {
                logout();
              }}
            >
              Logout
            </Button>
          </div>

          <div className="py-5">
            <Button onClick={() => setshow("Next")}>Show data</Button>

            <Button onClick={() => setshow("first")}>Hide data</Button>

            <div className={show === "Next" ? "Next" : "first"}>
              <div className="container mx-auto px-2 max-w-4xl pt-10 py-2  bg-slate-400">
                <div
                //  className="bg-gray-300 p-5 mx-3 flex items-center justify-between"
                >
                  {/* {console.log("1")} */}
                  {isLoading ? "Please wait Loading...." : <>User List</>}

                  {isSuccess &&
                    realdata &&
                    realdata.data.map((val, key) => (
                      <div key={key}>
                        <div
                          key={key}
                          className="bg-gray-300 p-5 my-2 flex items-center justify-between"
                        >
                          <div className="p-0 h-20 w-20">{val.year}</div>
                          <div className="font-bold text-lg text-gray-700   w-20 ">
                            {val.name}
                          </div>

                          {/* deletedown */}
                          <div className="flex gap-4">
                            <button onClick={() => final(val.id)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </button>
                          </div>

                          {/* deleteabove */}

                          <hr />
                        </div>
                      </div>
                    ))}

                  <div>
                    <div>
                      {ress.isSuccess &&
                        ress.data.map((val, key) => {
                          return (
                            <div
                              key={key}
                              className="bg-gray-300 p-5 my-2 flex items-center justify-between"
                            >
                              <div className="p-0  h-20 w-20">{val.job}</div>
                              <div className="font-bold text-lg text-gray-700 w-20 ">
                                {val.name}
                              </div>
                              <div className="flex gap-4">
                                <button
                                  className=""
                                  onClick={() => delnew(val.id)}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                  </svg>
                                </button>
                              </div>
                              <hr />
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  <Button onClick={() => setadd(!add)}>ADD New User</Button>
                </div>
              </div>

              <div className={add ? "Display" : "first"}>
                <div className="pt-4 mx-auto  content-center p-5 max-w-4xl flex flex-col justify-center bg-slate-500">
                  <div className="pt-2 font-serif pl-0 pb-3 text-xl">
                    Enter Details of new User
                  </div>
                  <div>
                    <TextField
                      label="Name:"
                      value={newname}
                      onChange={(e) => setnewname(e.target.value)}
                      inputProps={{ type: "text", placeholder: "Enter Name" }}
                    />
                  </div>

                  <div>
                    <TextField
                      label="Birth year:"
                      value={newjob}
                      onChange={(e) => setnewjob(e.target.value)}
                      inputProps={{
                        type: "text",
                        placeholder: "Enter Birth year...",
                      }}
                    />
                  </div>

                  <div>
                    <Button
                      onClick={() => {
                        newd();
                        createPost(newpost);
                        setadd(!add);
                      }}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Show;
