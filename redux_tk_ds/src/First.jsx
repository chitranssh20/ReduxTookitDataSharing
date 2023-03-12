import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateValue } from "./dataSlice";
import store from "./store";

const First = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('initial', store.getState());
    dispatch(updateValue(inputValue));
    console.log('initial', store.getState());
    setInputValue("");
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
    </div>
  );
};

export default First;
