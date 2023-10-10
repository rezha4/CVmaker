/* eslint-disable react-refresh/only-export-components */
import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
// import './index.css'
import { Greetings, Title } from "../src/components/general.jsx";
import { Education, NewEducation } from "./components/education.jsx";
import { Work } from "./components/work.jsx";
import "../src/styles/style.css";
import { useState } from "react";

function MainApp() {
  const [educationComponents, setEducationComponents] = useState([<Education />]);

  const addEducation = () => {
    setEducationComponents([...educationComponents, <Education />]);
  };

  return (
    <React.StrictMode>
      <div>
        <Greetings />
        <div>
          <Title />
          <hr></hr>
          <h2 onDoubleClick={addEducation}>Education</h2>
          {educationComponents}
          <hr></hr>
          <h2>Work Experiences</h2>
          <Work />
        </div>
      </div>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<MainApp />);
