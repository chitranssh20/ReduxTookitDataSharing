import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateValue } from "./dataSlice";
import store from "./store";
import { Navigate, useNavigate } from "react-router-dom";
const First = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('initial', store.getState());
    dispatch(updateValue(inputValue));
    console.log('final', store.getState());
    setInputValue("");
    navigate('/second')
    // window.open('/second','_blank')    
  };

  return (
    <div>
      <h2>First Component</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputValue">Update Value:</label>
        <input
          type="text"
          id="inputValue"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={(e)=> navigate('/second')}>Go to second</button>
    </div>
  );
};

export default First;
