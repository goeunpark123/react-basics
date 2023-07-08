import React, { useState } from "react";

import NetflixSeries from "./components/NetflixSeries/NetflixSeries";
import NewShow from "./components/NewShow/NewShow";
import "./App.css";

const App = () => {
  const [netflixSeries, setNetflixSeries] = useState([
    { id: "1st", text: "Never Have I ever" },
    { id: "2nd", text: "Ginny & Georgia" },
    { id: "3rd", text: "Beef" },
  ]);

  const addNewShowHandler = (newShow) => {
    //이전 상태의 데이터에 의존하지 않는 경우에 사용(업데이트 지연 가능성)
    //setNetflixSeries(netflixSeries.concat(newShow));

    setNetflixSeries((prevNetflixSeries) => prevNetflixSeries.concat(newShow));
  };

  return (
    <div>
      <h2 className="title">Netflix Series</h2>
      <NewShow onAddShow={addNewShowHandler} />
      <NetflixSeries titles={netflixSeries} />
    </div>
  );
};

export default App;
