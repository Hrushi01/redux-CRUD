import React from "react";

const TextField = ({ label, inputProps, onChange, value }) => {
  return (
    <div className="flex-col">
      <label className="mb-2 text-base text-gray-800  ">{label}</label>
      <br />
      <input
        className="bg-gray-200 py-2 px-3 border-2 outline-none"
        {...inputProps}
        onChange={onChange}
        value={value}
      ></input>
    </div>
  );
};

export default TextField;
