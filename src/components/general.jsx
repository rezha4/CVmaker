import { useState } from "react";

function Greetings() {
  const [show, setShow] = useState(false);
  function handleSetShow() {
    setShow(true);
  }
  return (
    <aside hidden={show}>
      <p>
        Welcome to CV Maker. Double click on any titles/paragaraphs you want to
        change. Click Hide btn when satisfied. If you want to save, hide this
        dialog section, press ctrl+p and save as pdf.
      </p>
      <button onClick={handleSetShow}>Hide panel</button>
    </aside>
  );
}

function Title() {
  const [name, setName] = useState("FirstName LastName");
  const [hidden, setHidden] = useState(true);
  const [contact, setContact] = useState(
    "Number (+62) 888 33 230 920, email@email.com, Address and PO BOX No. 234098 - @socialM @MediaHandle @GoesHere"
  );

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function hideInputs() {
    setHidden(true);
  }

  function showInputs() {
    setHidden(false);
  }

  function handleContactChange(e) {
    setContact(e.target.value);
  }

  return (
    <div id="name">
      <input
        type="text"
        id="fullName"
        value={name}
        onChange={handleNameChange}
        hidden={hidden}
      />
      <button onClick={hideInputs} hidden={hidden}>
        Hide
      </button>
      <h1 onDoubleClick={showInputs}>{name}</h1>
      <input
        type="text"
        id="contact"
        value={contact}
        onChange={handleContactChange}
        hidden={hidden}
      />
      <button onClick={hideInputs} hidden={hidden}>
        Hide
      </button>
      <p onDoubleClick={showInputs}>{contact}</p>
      <input
        type="text"
        id="contact"
        value={contact}
        onChange={handleContactChange}
        hidden={hidden}
      />
      <button onClick={hideInputs} hidden={hidden}>
        Hide
      </button>
      <p onDoubleClick={showInputs}>
        I am a software engineer with x years of experiences, I've worked on
        several projects and I've used several tools and tech stacks to finish
        projects for xs companies.
      </p>
    </div>
  );
}

export { Title, Greetings };
