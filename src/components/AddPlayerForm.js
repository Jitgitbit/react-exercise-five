import React, { useState } from "react";

export default function AddPlayerForm(props) {
  const [newName, setNewName] = useState("");
  //   console.log("STATE:", newName);

  function handleSubmit(event) {
    // do not refresh the page on submit
    event.preventDefault();
    // console.log(props.addPlayer);
    props.addPlayer(newName);

    // clear input field when we are done
    setNewName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        //   Controlled component: value is managed by the state
        value={newName}
        onChange={(event) => setNewName(event.target.value)}
      />
      <input type="submit" />
    </form>
  );
}
