import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

const DEFAULT_DATA = [
  { id: "todo-0", name: "comer", completed: true },
  { id: "todo-1", name: "rezar", completed: false },
  { id: "todo-2", name: "amar", completed: false },
];

ReactDOM.render(<App tasks={DEFAULT_DATA} />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
