import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useGetAllQuery, useUpdateStudentMutation } from "./api";

export default function EditStudent({ match }) {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    year: "",
  });
  const [updateStudent, { isLoading, isSuccess }] = useUpdateStudentMutation();

  const { data: studentData } = useGetAllQuery(undefined, {
    selectFromResult: ({ data }) => ({
      if(data) {
        data: data?.find((el) => el.id == match.params.id);
      },
    }),
  });

  useEffect(() => {
    if (isLoading) {
      console.log(isLoading);
      alert("editing student...");
    }
    if (isSuccess) {
      console.log(isLoading);

      alert("editeded");
    }
  }, [isLoading, isSuccess]);

  useEffect(() => {
    if (studentData) {
      setData(studentData);
    }
  }, [studentData]);
  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateStudent(data);
    // after submit data
    setData({
      name: "",
      year: "",
    });

    navigate("/");
  };
  console.log(
    Object.values(data).every((el) => el == ""),
    "consol in edit"
  );
  console.log("kid");
  return (
    <form
      onSubmit={() => handleSubmit()}
      className="flex flex-col justify-center content-center"
    >
      <input
        size="large"
        placeholder="Enter name "
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
        update Student
      </button>
    </form>
  );
}
