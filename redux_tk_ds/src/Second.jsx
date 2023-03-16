import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import store from "./store";
import { useNavigate } from "react-router-dom";
const Second = () => {
const navigate = useNavigate()
  let value =  5
  
  value = useSelector((state) => state.data.value);
  useEffect(() => {
  }, [value])
  
  const check = useSelector((state) => console.log('let', state));
  let data = store.getState()
  console.log(data.data);
  return (
    <div>
      <h2>Second Component</h2>
      <p>Current Value: {value}</p>
      <h2>{}</h2>
      <button onClick={(e)=> navigate('/first')}>Click to go to first</button>
    </div>
  );
};

export default Second;
