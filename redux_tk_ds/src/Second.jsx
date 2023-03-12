import React from "react";
import { useSelector } from "react-redux";

const Second = () => {
  const value = useSelector((state) => state.data.value);

  return (
    <div>
      <h2>Second Component</h2>
      <p>Current Value: {value}</p>
    </div>
  );
};

export default Second;
