import { useEffect, useState } from "react";

function Scoreboard(props) {
  const [highScore, setHighScore] = useState(0);
  const { score } = props;

  useEffect(() => {
    setHighScore((prevHighScore) =>
      score >= prevHighScore ? score : prevHighScore
    );
  }, [score]);

  return (
    <div>
      <p>Current Score: {score}</p>
      <p>High Score: {highScore}</p>
    </div>
  );
}

export default Scoreboard;
