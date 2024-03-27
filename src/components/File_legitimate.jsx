import React from "react";

const Legitimate = ({ content }) => {
  return (
    <div className="w-[45%] mx-auto bg-green-200 border border-solid border-green-200 p-4 rounded-md shadow-md">
      <p className="text-green-800 font-semibold">{content}</p>
    </div>
  );
};

export default Legitimate;
