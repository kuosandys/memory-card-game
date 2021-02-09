import { useState } from "react";
import CardOrganizer from "./components/CardOrganizer.js";
import Scoreboard from "./components/Scoreboard.js";
import styled, { ThemeProvider } from "styled-components";

const AppDiv = styled.div`
  font-family: Futura;
  display: flex;
  flex-direction: column;
  justify-content: normal;
  align-items: center;
  background-color: ${(props) => props.theme.mainColor};
  padding: 20px;
  text-align: center;
  max-width: 500px;
  height: 100vh;

  h1 {
    margin: 10px;
    color: ${(props) => props.theme.accentColor};
  }

  h2 {
    margin: 5px;
    font-size: 24px;
    font-style: italic;
    color: ${(props) => props.theme.tertiaryColor};
  }

  h3 {
    font-weight: 400;
    font-size: 16px;
    margin: 15px auto;
    line-height: 1.3;
  }
`;

const theme = {
  mainColor: "hsl(46,87%,80%)",
  secondaryColor: "hsl(29, 78%, 73%)",
  tertiaryColor: "hsl(283,25%,66%)",
  accentColor: "hsl(278,50%,35%)",
};

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
    <ThemeProvider theme={theme}>
      <AppDiv>
        <h1>Memory Card Game</h1>
        <h2>Healthy Edition!</h2>
        <h3>
          Choose the fruit or vegetable that you haven't seen before. If none of
          them are new, click "None".
        </h3>
        <Scoreboard score={score} />
        <CardOrganizer score={score} incrementScore={handleScoreChanged} />
      </AppDiv>
    </ThemeProvider>
  );
}

export default App;
