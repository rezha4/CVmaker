import { useState } from "react";

function Greetings() {
    return (
        <>
        <h1>Welcome to CV Maker.</h1>
        <h2>Double click on any titles/paragaraphs you want to change. Click Hide btn when satisfied.</h2>
        <h3>If you want to save, hide this dialog section, press ctrl+p and save as pdf.</h3>
        </>
    )
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
    <>
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
        id="fullName"
        value={contact}
        onChange={handleContactChange}
        hidden={hidden}
      />
      <button onClick={hideInputs} hidden={hidden}>
        Hide
      </button>
      <p onDoubleClick={showInputs}>{contact}</p>
    </>
  );
}

export { Title, Greetings };
