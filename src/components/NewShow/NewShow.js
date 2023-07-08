import React, { useState } from "react";
import "./NewShow.css";

const NewShow = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const addShowHandler = (event) => {
    event.preventDefault();

    const newShow = {
      id: Math.floor(Math.random() * 100),
      text: enteredText,
    };

    setEnteredText("");

    console.log(newShow);
    props.onAddShow(newShow);
  };

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  return (
    <form className="new-show" onSubmit={addShowHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit">Add Show</button>
    </form>
  );
};

export default NewShow;
