import React from "react";

const ThemePicker = ({ theme }) => {
  return (
    <div className="App-Feature">
      <h4>Theme Picker</h4>
      <div className="App-buttons">
        <button onClick={() => theme = "App-Light"}>Light Mode</button>
        <button onClick={() => theme = "App-Dark"}>Dark Mode</button>
      </div>
    </div>
  );
};

export default ThemePicker;
