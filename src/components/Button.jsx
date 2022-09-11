import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      className="bg-indigo-600 mr-1  text-white py-2 px-5 my-10 rounded hover:bg-indigo-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
