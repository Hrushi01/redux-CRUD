import React from "react";
import "./Show.css";
import Button from "../components/Button";
import JSON from "../json.json";
import TextField from "../components/TextField";
import { Link } from "react-router-dom";

export default function Addnew(props) {
  //   const { newjob, setnewjob, newname, setnewname, createPost, ress } = props;
  return (
    <>
      <div>Update id</div>
      <div className="pt-4 mx-auto  content-center max-w-2xl flex flex-col justify-center bg-slate-300">
        <div>
          <TextField
            label="Name:"
            value="name"
            onChange={(e) => {}}
            inputProps={{ type: "text", placeholder: "Enter Name" }}
          />
        </div>

        <div>
          <TextField
            label="Job:"
            value="Job"
            onChange={(e) => {}}
            inputProps={{ type: "text", placeholder: "Enter Job..." }}
          />
        </div>

        <Button onClick={() => {}} className="bg-pink-300">
          Save
        </Button>
      </div>
      <div className="flex gap-4">
        <Button onClick={() => {}}>
          <Link to={"/add-user"}>Add user</Link>
        </Button>
      </div>
    </>
  );
}
