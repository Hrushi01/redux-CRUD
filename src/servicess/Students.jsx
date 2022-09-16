import React from "react";
import { useGetAllQuery } from "./api";
import { useNavigate } from "react-router-dom";
import { useGetByIDQuery, useDeleteMutation } from "./api";
import EditStudent from "./EditStudent";
import { Routes, Route, Link } from "react-router-dom";

export default function Students() {
  const navigate = useNavigate();
  const { data, isFetching } = useGetAllQuery();
  const [deletee] = useDeleteMutation();
  console.log(deletee);

  console.log("d", data);

  return (
    <div className="bg-orange-200 p-2">
      <div>students</div>
      <div>
        {isFetching ? (
          <h1>Loading....</h1>
        ) : (
          data.data.map((val) => {
            return (
              <div key={val.id} className="bg-gray-400 m-2 p-2">
                <div>Birth year ==== {val.year}</div>
                <div>Name is ==== {val.name}</div>
                <button
                  onClick={() => navigate(`/students/edit/${val.id}`)}
                  className="bg-orange-400 p-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => deletee(val.id)}
                  className="bg-orange-400 p-1"
                >
                  delete
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
