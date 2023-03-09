import React from "react";

const Input = (props ) => {
  return (
    <input
      {...props}
      className="border-[1px] border-purple-500 rounded-md p-2 font-normal"
    />
  );
};

export default Input;
