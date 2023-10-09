import { useState } from "react";

function Title() {
  const [name, setName] = useState("FirstName LastName");
  const [hidden, setHidden] = useState(false);
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
      <p>{contact}</p>
    </>
  );
}

export { Title };
