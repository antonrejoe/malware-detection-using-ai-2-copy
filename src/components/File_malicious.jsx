import React from "react";

const Malicious = ({ content }) => {
  return (
    <div className="bg-red-200 p-4 rounded-md shadow-md w-[45%] mx-auto">
      <p className="text-red-800 font-semibold">{content}</p>
    </div>
  );
};

export default Malicious;
