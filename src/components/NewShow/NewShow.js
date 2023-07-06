import React from "react";
import "./NewShow.css";

const NewShow = (props) => {
  const addShowHandler = (event) => {
    event.preventDefault();

    const newShow = {
      id: Math.floor(Math.random() * 100),
      text: "Now Streaming",
    };

    console.log(newShow);
    props.onAddShow(newShow);
  };

  return (
    <form className="new-show" onSubmit={addShowHandler}>
      <input type="text" />
      <button type="submit">Add Show</button>
    </form>
  );
};

export default NewShow;
