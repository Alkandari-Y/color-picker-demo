import "./App.css";
import React from "react";
import Counter from "./Components/Counter";
import ThemePicker from "./Components/ThemePicker";

const App = () => {
  let theme = "App-Dark";
  let count = 0;

  return (
    <div className={theme}>
      <div className="App-header">
        <Counter count={count} />
        <ThemePicker theme={theme} />
      </div>
    </div>
  );
};

export default App;
