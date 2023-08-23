import React from "react";

const Button = ({ onClick, btnText }) => {
  return (
    <button
      className="w-full h-10 bg-blue-500 text-white flex items-center justify-center mt-3 rounded-md border-none"
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
