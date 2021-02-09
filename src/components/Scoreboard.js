import { useEffect, useState } from "react";
import styled from "styled-components";

const ScoreDiv = styled.div`
  border: 3px solid ${(props) => props.theme.tertiaryColor};
  border-radius: 5px;
  margin: 10px;
  padding: 10px;

  p {
    margin: 5px;
    color: ${(props) => props.theme.accentColor};
    text-transform: uppercase;

    span {
      font-weight: 700;
    }

    .zero {
      color: red;
    }
  }
`;

function Scoreboard(props) {
  const [highScore, setHighScore] = useState(0);
  const { score } = props;

  useEffect(() => {
    setHighScore((prevHighScore) =>
      score >= prevHighScore ? score : prevHighScore
    );
  }, [score]);

  return (
    <ScoreDiv>
      <p>
        Current Score:{" "}
        <span className={score === 0 && highScore !== 0 ? "zero" : ""}>
          {score}
        </span>
      </p>
      <p>
        High Score: <span>{highScore}</span>
      </p>
    </ScoreDiv>
  );
}

export default Scoreboard;
