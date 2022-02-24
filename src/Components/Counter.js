import React from "react";

const Counter = ({ count }) => {
  return (
    <div className="App-Feature">
      <h4>Counter</h4>
      <div className="App-buttons">
        <button
          onClick={() => {
            count--;
          }}
        >
          Subtract
        </button>
        <h3>{count}</h3>
        <button
          onClick={() => {
            count++;
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Counter;
