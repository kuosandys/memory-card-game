function Scoreboard(props) {
  return (
    <div>
      <p>Current Score: {props.currentScore}</p>
      <p>High Score: {props.highScore}</p>
    </div>
  );
}

export default Scoreboard;
