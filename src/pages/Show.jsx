import React from "react";
import {
  useGetAllPostQuery,
  useGetByIDQuery,
  useDeleteMutation,
  useCreatePostMutation,
} from "../services/post";
import { useState, useEffect } from "react";
import "./Show.css";
import Button from "../components/Button";
import Login from "./Login";
import TextField from "../components/TextField";
import JSON from "../json.json";

function Show() {
  const { data, isLoading, isSuccess } = useGetAllPostQuery();
  const [add, setadd] = useState(false);

  const [newname, setnewname] = useState("");
  console.log("new dattttaata", JSON);
  const [newjob, setnewjob] = useState("");

  const [deletepost, resp] = useDeleteMutation();
  // console.log("Success", resp.isSuccess);
  const [createPost, ress] = useCreatePostMutation();
  console.log("ress", ress);

  const realdata = data;
  const i = 0;

  const [show, setshow] = useState("first");

  const newpost = JSON;
  // console.log(newpost, "newpost");
  const run = () => {};
  const newd = () => {
    // newpost.push({ name: newname, job: newjob });
    JSON.push({ name: newname, job: newjob });
  };

  // testing api not available for delete
  // testing api not available for delete
  // testing api not available for delete
  // const deleter = (e) => {
  //   console.log(e, "id deleted");
  // };

  return (
    <>
      <div className="container mx-auto px-2  pt-4   bg-slate-300 overflow-scroll">
        <h2 className="text-center font-bold font-serif text-2xl text-gray-700">
          Data from Api
        </h2>

        {/* <Button
            // className="mx-0 p-0 mt-0 pt-0"
            onClick={() => setlogin(false)}
          >
            Logout
          </Button> */}
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

                {/* {isSuccess
                ? console.log("YES", isSuccess)
                : console.log("NO", isSuccess)} */}
                {/* {console.log("3")} */}
                {isSuccess &&
                  data &&
                  data.data.map((val, key) => (
                    <>
                      <div
                        key={key}
                        className="bg-gray-300 p-5 my-2 flex items-center justify-between"
                      >
                        <img
                          src={val.avatar}
                          alt="img"
                          className="p-0 h-20 w-20"
                        />
                        <div className="font-bold text-lg text-gray-700   w-20 ">
                          {val.first_name}
                        </div>

                        {/* deletedown */}
                        <div className="flex gap-4">
                          <button onClick={() => deletepost(val.id)}>
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
                    </>
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
                            <img
                              alt="IMG"
                              className="p-0 bg-red-400 h-20 w-20"
                            ></img>
                            <div className="font-bold text-lg text-gray-700 w-20 ">
                              {val.name} is a {val.job}
                            </div>
                            <div className="flex gap-4">
                              <button className="">
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
                {/* <input
            placeholder="name"
            value={newname}
            onChange={(e) => setnewname(e.target.value)}
          ></input> */}
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

                {/* <input
            placeholder="job"
            value={newjob}
            onChange={(e) => setnewjob(e.target.value)}
          ></input> */}
                <div>
                  <TextField
                    label="Job:"
                    value={newjob}
                    onChange={(e) => setnewjob(e.target.value)}
                    inputProps={{ type: "text", placeholder: "Enter Job..." }}
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
    </>
  );
}

export default Show;
