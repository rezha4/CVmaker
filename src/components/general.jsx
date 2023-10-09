import { useState } from "react";

function Greetings() {
  const [show, setShow] = useState(false);
  function handleSetShow() {
    setShow(true);
  }
  return (
    <aside>
      <div hidden={show}>
        <p>
          Welcome to CV Maker. Double click on any titles/paragaraphs you want
          to change. Click Hide btn when satisfied. If you want to save, hide
          this dialog section, press ctrl+p and save as pdf.
        </p>
        <button onClick={handleSetShow}>Hide panel</button>
      </div>
    </aside>
  );
}

function Title() {
  const [description, setDescription] = useState({
    name: "FirstName LastName",
    contact:
      "Number (+62) 888 33 230 920, email@email.com, Address and PO BOX No. 234098 - @socialM @MediaHandle @GoesHere",
    introduction:
      "I am a software engineer with x years of experiences, I've worked on several projects and I've used several tools and tech stacks to finish projects for xs companies.",
  });
  const [hidden, setHidden] = useState(true);

  function handleNameChange(e) {
    setDescription({ ...description, name: e.target.value });
  }

  function hideInputs() {
    setHidden(true);
  }

  function showInputs() {
    setHidden(false);
  }

  function handleContactChange(e) {
    setDescription({ ...description, contact: e.target.value });
  }

  function handleIntroChange(e) {
    setDescription({ ...description, introduction: e.target.value });
  }

  return (
    <div id="name">
      <input
        type="text"
        id="fullName"
        value={description.name}
        onChange={handleNameChange}
        hidden={hidden}
      />
      <button onClick={hideInputs} hidden={hidden}>
        Hide
      </button>
      <h1 onDoubleClick={showInputs}>{description.name}</h1>
      <input
        type="text"
        id="contact"
        value={description.contact}
        onChange={handleContactChange}
        hidden={hidden}
      />
      <button onClick={hideInputs} hidden={hidden}>
        Hide
      </button>
      <p onDoubleClick={showInputs}>{description.contact}</p>
      <input
        type="text"
        id="contact"
        value={description.introduction}
        onChange={handleIntroChange}
        hidden={hidden}
      />
      <button onClick={hideInputs} hidden={hidden}>
        Hide
      </button>
      <p onDoubleClick={showInputs}>{description.introduction}</p>
    </div>
  );
}

export { Title, Greetings };
