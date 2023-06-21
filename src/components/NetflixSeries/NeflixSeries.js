import React from "react";
import "./NeflixSeries.css";

const NetflixSeries = (props) => {
  console.log(props.titles);
  return (
    <ul className="list">
      {props.titles.map((title) => {
        return <li key={title.id}>{title.text}</li>;
      })}
    </ul>
  );
};

export default NetflixSeries;
