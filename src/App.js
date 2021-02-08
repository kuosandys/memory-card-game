import "./App.css";
import CardOrganizer from "./components/CardOrganizer.js";
import { useState } from "react";
import Scoreboard from "./components/Scoreboard.js";

function App() {
  const [numberOfCards, setNumberOfCards] = useState(5);
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <Scoreboard currentScore={score} highScore={highScore} />
      <CardOrganizer
        numberOfCards={numberOfCards}
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
    </div>
  );
}

export default App;
