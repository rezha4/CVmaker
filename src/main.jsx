import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
// import './index.css'
import { Greetings, Title } from "../src/components/general.jsx";
import { Education } from "./components/education.jsx";
import { Work } from "./components/work.jsx";
import "../src/styles/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Greetings />
    <div>
      <Title />
      <Education />
      <button onClick={Education}>Add Edu</button>
      <Work />
    </div>
  </React.StrictMode>
);
