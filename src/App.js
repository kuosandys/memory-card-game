import "./App.css";
import CardOrganizer from "./components/CardOrganizer.js";
import { useState } from "react";
import Scoreboard from "./components/Scoreboard.js";

function App() {
  const [score, setScore] = useState(0);

  const handleScoreChanged = (bool) => {
    if (bool === true) {
      setScore((prev) => prev + 1);
    } else {
      setScore(0);
    }
  };

  return (
    <div className="App">
      <Scoreboard score={score} />
      <CardOrganizer score={score} incrementScore={handleScoreChanged} />
    </div>
  );
}

export default App;
