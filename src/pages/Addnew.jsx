import React from "react";
import { useState, useEffect } from "react";
import "./Show.css";
import Button from "../components/Button";
import JSON from "../json.json";
import TextField from "../components/TextField";
import { Link } from "react-router-dom";

export default function Addnew(props) {
  const newpost = JSON;
  const newd = () => {
    // newpost.push({ name: newname, job: newjob });
    JSON.push({ name: newname, job: newjob });
  };
  const { newjob, setnewjob, newname, setnewname, createPost, ress } = props;
  return (
    <>
      <div>Addnew</div>
      <div className="pt-4 mx-auto  content-center max-w-2xl flex flex-col justify-center bg-slate-300">
        {/* <input
    placeholder="name"
    value={newname}
    onChange={(e) => setnewname(e.target.value)}
  ></input> */}
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

        <Button
          onClick={() => {
            newd();
          }}
          className="bg-pink-300"
        >
          Save
        </Button>
      </div>
      <div className="flex gap-4">
        <Button onClick={() => createPost(newpost)}>
          <Link to={"/"}>Add user</Link>
        </Button>
      </div>
    </>
  );
}
