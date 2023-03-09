import React from "react";

const Textarea = (props) => {
  return (
    <textarea
      {...props}
      className="border-[1px] border-purple-500 rounded-md p-2 font-normal"
    />
  );
};

export default Textarea;
