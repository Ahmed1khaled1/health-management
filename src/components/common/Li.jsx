import React from "react";

const Li = ({text}) => {
  return (
    <li>
      <span className ="inline-block w-4 h-4 bg-[url('/check.png')] bg-contain mr-2"></span>{" "}
      {text}
    </li>
  );
};

export default Li;
