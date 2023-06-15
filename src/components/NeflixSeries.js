import React from "react";
import "./NeflixSeries.css";

const NetflixSeries = (props) => {
  console.log(props.titles);
  return (
    <ul className="list">
      <li>Never Have I ever</li>
      <li>Ginny & Georgia</li>
      <li>Beef</li>
    </ul>
  );
};

export default NetflixSeries;
