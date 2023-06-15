import NetflixSeries from "./components/NeflixSeries";
import "./App.css";

const App = () => {
  const neflixSeries = [
    { id: "1st", text: "Never Have I ever" },
    { id: "2nd", text: "Ginny & Georgia" },
    { id: "3rd", text: "Beef" },
  ];

  return (
    <div>
      <h2 className="title">Netflix Series</h2>
      <NetflixSeries titles={neflixSeries} />
    </div>
  );
};

export default App;
