import { useState } from "react";

function Work() {
  const [hidden, setHidden] = useState(true);
  function hideInputs() {
    setHidden(true);
  }

  function showInputs() {
    setHidden(false);
  }
  const [workDetails, setWorkDetails] = useState({
    company: "Resume Worded Company, LTD. New York, NY, USA",
    year: "2020 - Present",
    role: "Software Engineer",
    highlights: [
      "Design, develop, and maintain high-quality software solutions, adhering to coding standards and best practices.",
      "Collaborate with cross-functional teams, including product managers and designers, to understand project requirements and translate them into technical specifications.",
      "Write clean, efficient, and maintainable code while ensuring the security and scalability of applications.",
    ],
  });
  function handleCompanyChange(e) {
    setWorkDetails({ ...workDetails, company: e.target.value });
  }
  function handleYearChange(e) {
    setWorkDetails({ ...workDetails, year: e.target.value });
  }
  function handleRoleChange(e) {
    setWorkDetails({ ...workDetails, role: e.target.value });
  }
  function handleElementChange(e, index) {
    const newHighlights = [...workDetails.highlights];
    newHighlights[index] = e.target.value;
    setWorkDetails({ ...workDetails, highlights: newHighlights });
  }
  return (
    <div id="work">
      <input
        type="text"
        id="company"
        value={workDetails.company}
        onChange={handleCompanyChange}
        hidden={hidden}
      />
      <input
        type="text"
        id="year"
        value={workDetails.year}
        onChange={handleYearChange}
        hidden={hidden}
      />
      <button onClick={hideInputs} hidden={hidden}>
        Hide
      </button>
      <div>
        <h1 onDoubleClick={showInputs}>{workDetails.company}</h1>
        <h2>{workDetails.year}</h2>
      </div>
      <input
        type="text"
        id="role"
        value={workDetails.role}
        onChange={handleRoleChange}
        hidden={hidden}
      />
      <button onClick={hideInputs} hidden={hidden}>
        Hide
      </button>
      <h2 onDoubleClick={showInputs}>{workDetails.role}</h2>
      <ul>
        {workDetails.highlights.map((element, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <li onDoubleClick={showInputs}>
              <input
                type="text"
                id={index}
                value={element}
                onChange={(e) => handleElementChange(e, index)}
                hidden={hidden}
              />
              <button onClick={hideInputs} hidden={hidden}>
                Hide
              </button>
              {element}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { Work };
