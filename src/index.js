import React from "react";
import ReactDOM from "react-dom";

const fname = "Jay";
const lname = "B";
const lucky = 8;

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <p> Your lucky number is {lucky}</p>
  </div>,
  document.getElementById("root")
);
