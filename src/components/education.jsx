import { useState } from "react";

function Education() {
  const [description, setDescription] = useState({
    university: "University Name - Goes Here",
    focus: "Major and Education Focus",
    brief:
      "Brief intro of uni and major and focus goes here. What you learn etc etc",
  });
  const [hidden, setHidden] = useState(true);

  function handleUniversityChange(e) {
    setDescription({ ...description, university: e.target.value });
  }

  function handleFocusChange(e) {
    setDescription({ ...description, focus: e.target.value });
  }

  function handleBriefChange(e) {
    setDescription({ ...description, brief: e.target.value });
  }

  function hideInputs() {
    setHidden(true);
  }

  function showInputs() {
    setHidden(false);
  }

  return (
    <div id="education">
      <h2>Education</h2>
      <input
        type="text"
        id="fullName"
        value={description.university}
        onChange={handleUniversityChange}
        hidden={hidden}
      />
      <button onClick={hideInputs} hidden={hidden}>
        Hide
      </button>
      <h3 onDoubleClick={showInputs}>{description.university}</h3>
      <input
        type="text"
        id="contact"
        value={description.focus}
        onChange={handleFocusChange}
        hidden={hidden}
      />
      <button onClick={hideInputs} hidden={hidden}>
        Hide
      </button>
      <h4 onDoubleClick={showInputs}>{description.focus}</h4>
      <input
        type="text"
        id="contact"
        value={description.brief}
        onChange={handleBriefChange}
        hidden={hidden}
      />
      <button onClick={hideInputs} hidden={hidden}>
        Hide
      </button>
      <p onDoubleClick={showInputs}>{description.brief}</p>
    </div>
  );
}

export { Education };
