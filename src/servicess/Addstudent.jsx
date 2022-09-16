import React from "react";
import { useAddStudentMutation } from "./api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const KEY = "ADD_STUDENT";

export default function Addstudent() {
  const navigate = useNavigate();
  const [addStudent, { isLoading, isSuccess }] = useAddStudentMutation();
  console.log(addStudent, "addstudent");
  const [data, setData] = useState({
    name: "",
    year: "",
  });
  console.log("data", data);

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudent(data);

    // after submit data
    setData({
      name: "",
      year: "",
    });

    navigate("/");
  };
  useEffect(() => {
    if (isLoading) {
      console.log(isLoading);
      alert("createing student...");
    }
    if (isSuccess) {
      console.log(isLoading);

      alert("created");
    }
  }, [isLoading, isSuccess]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center content-center"
    >
      <input
        size="large"
        placeholder="Enter "
        name="name"
        value={data.name}
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
        disabled={isLoading}
        className="m-1 bg-slate-300 "
      />

      <input
        size="large"
        placeholder="Enter yaer"
        name="year"
        value={data.year}
        // name={data.year}
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
        disabled={isLoading}
        className="m-1 bg-slate-300 "
      />

      <button
        className="m-1 rounded bg-red-300 "
        loading={isLoading}
        htmlType="submit"
        type="primary"
      >
        Add Student
      </button>
    </form>
  );
}
