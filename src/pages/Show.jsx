import React from "react";
import {
  useGetAllPostQuery,
  useGetByIDQuery,
  useDeleteMutation,
} from "../services/post";
import { useState, useEffect } from "react";
import "./Show.css";
import Button from "../components/Button";

function Show() {
  const responseinfo = useGetAllPostQuery();
  const realdata = responseinfo;
  const i = 0;

  const [data, setdata] = useState(realdata);
  const [show, setshow] = useState("first");
  console.log("sAkashhhh", data);

  useEffect(() => {
    setdata(realdata.data.data);
    console.log("this is i", i + 1, data);
  }, [responseinfo]);

  const deleter = (e) => {
    // console.log(e);
    const update = data.filter((data) => data.id !== e);
    setdata(update);
  };

  return (
    <div className="container mx-auto px-2  pt-10  bg-slate-300">
      <h2 className="text-center font-bold text-2xl text-gray-700">
        Data from Api
      </h2>
      <div className="py-5">
        <Button onClick={() => setshow("Next")}>Show data</Button>

        <Button onClick={() => setshow("first")}>Hide data</Button>

        <div className={show === "Next" ? "Next" : "first"}>
          <div className="container mx-auto px-2 max-w-4xl pt-10 py-2  bg-slate-400">
            <div
            //  className="bg-gray-300 p-5 mx-3 flex items-center justify-between"
            >
              helloooo
              {data.map((val, key) => (
                <div
                  key={key}
                  className="bg-gray-300 p-5 my-2 flex items-center justify-between"
                >
                  <img src={val.avatar} alt="" className="p-0 h-20 w-20" />
                  <div className="font-bold text-lg text-gray-700 ">
                    {val.first_name}
                  </div>

                  <div className="flex gap-4">
                    <button onClick={() => deleter(val.id)}>
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show;
