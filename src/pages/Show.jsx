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
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Show(props) {
  const navigate = useNavigate();
  const { login, setlogin } = props;
  const { data, isLoading, isSuccess } = useGetAllPostQuery();
  const [add, setadd] = useState(false);
  const [logo, setlogo] = useState("");

  const [newname, setnewname] = useState("");
  // console.log("new dattttaata", JSON);
  const [newjob, setnewjob] = useState("");

  const [deletepost, resp] = useDeleteMutation();
  // console.log("Success", resp.isSuccess);
  const [createPost, ress] = useCreatePostMutation();
  // console.log("ress", ress);

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
  const logout = () => {
    localStorage.removeItem("token");
    setlogin(false);
    console.log("logindddd", login);
    setlogo(token);
    navigate("/login");
  };
  const token = localStorage.getItem("token");

  // testing api not available for delete
  // testing api not available for delete
  // testing api not available for delete
  // const deleter = (e) => {
  //   console.log(e, "id deleted");
  // };
  useEffect(() => {
    render();
  }, [logo]);

  const render = () => {
    console.log("is called toc", token);
    if (token) {
    } else {
      setlogin(false);
    }
  };

  const switchh = () => {
    if (login) {
      console.log("s");
      return <Navigate to={"/custom"} />;
    } else {
      console.log("ss");

      navigate("/login");
    }
    // return <Navigate to={"/login"} />;
  };

  return (
    <>
      <div className="bg-slate-600 container mx-auto px-2 max-w-4xl pt-10 py-2 ">
        <div className="container mx-auto px-2  pt-4   bg-slate-300 overflow-scroll">
          <div className=" bg-slate-400 p-3 flex justify-between">
            <Link
              to={login ? "/custom" : "login"}
              className="bg-indigo-600 text-white rounded h-10 py-2 px-5 hover:bg-slate-200 mt-3 mb-3 "

              // className="bg-indigo-600 mr-1  text-white py-2 px-5 my-10 rounded hover:bg-indigo-200"
            >
              Custome data
            </Link>
            {/* <Button
              onClick={() => {
                switchh();
              }}
            >
              Custom , data
            </Button> */}

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
                      <div key={key}>
                        <div
                          key={key}
                          className="bg-gray-300 p-5 my-2 flex items-center justify-between"
                        >
                          {/* <img
                            src={val.avatar}
                            alt="img"
                            className="p-0 h-20 w-20"
                          /> */}
                          <div className="p-0 h-20 w-20">{val.year}</div>
                          <div className="font-bold text-lg text-gray-700   w-20 ">
                            {val.name}
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
                              {/* <img
                                alt="IMG"
                                className="p-0 bg-red-400 h-20 w-20"
                              ></img> */}
                              <div className="p-0  h-20 w-20">{val.job}</div>
                              <div className="font-bold text-lg text-gray-700 w-20 ">
                                {val.name}
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
