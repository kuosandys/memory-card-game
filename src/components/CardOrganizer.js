import { useEffect, useState } from "react";
import { MemoryCard, DefaultCard } from "./MemoryCard";
import uniqid from "uniqid";
import styled, { keyframes } from "styled-components";

import apple from "../images/apple.png";
import avocado from "../images/avocado.png";
import banana from "../images/banana.png";
import broccoli from "../images/broccoli.png";
import cabbage from "../images/cabbage.png";
import coconut from "../images/coconut.png";
import cucumber from "../images/cucumber.png";
import garlic from "../images/garlic.png";
import kiwi from "../images/kiwi.png";
import lemon from "../images/lemon.png";
import mangosteen from "../images/mangosteen.png";
import melon from "../images/melon.png";
import onion from "../images/onion.png";
import orange from "../images/orange.png";
import papaya from "../images/papaya.png";
import passionfruit from "../images/passionfruit.png";
import peach from "../images/peach.png";
import pear from "../images/pear.png";
import pepper from "../images/pepper.png";
import pomegranate from "../images/pomegranate.png";
import radish from "../images/radish.png";
import starfruit from "../images/starfruit.png";
import strawberry from "../images/strawberry.png";
import tomato from "../images/tomato.png";
import watermelon from "../images/watermelon.png";

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
  
`;

const CardsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 15px auto;

  &.fadeIn {
    * {
      animation: ${fade} 0.3s linear forwards;
    }
  }

  &.fadeOut {
    * {
      animation: ${fade} 0.3s linear backwards;
    }
  }
`;

function CardOrganizer(props) {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [fadeEffect, setFadeEffect] = useState("");
  const { score } = props;

  const gameImages = [
    apple,
    avocado,
    banana,
    broccoli,
    cabbage,
    coconut,
    cucumber,
    garlic,
    kiwi,
    lemon,
    mangosteen,
    melon,
    onion,
    orange,
    papaya,
    passionfruit,
    peach,
    pear,
    pepper,
    pomegranate,
    radish,
    starfruit,
    strawberry,
    tomato,
    watermelon,
  ];

  useEffect(() => {
    const generateCards = () => {
      let cardsArray = [];
      let numberOfCards = score < 5 ? 5 : score < 10 ? 7 : score < 15 ? 8 : 11;
      for (let i = 0; i < numberOfCards; i++) {
        let randomIndex = Math.floor(Math.random() * gameImages.length);
        cardsArray.push(randomIndex);
      }
      setCards(cardsArray);
    };
    generateCards();
    // setFadeEffect("fadeIn");
  }, [score, gameImages.length]);

  const handleCardClicked = (e) => {
    if (e.target.id === "none") {
      let bool =
        cards.every((i) => clickedCards.includes(i)) && clickedCards.length > 0;
      props.incrementScore(bool);
    } else if (clickedCards.includes(e.target.id)) {
      setClickedCards([]);
      props.incrementScore(false);
    } else {
      // add to clickedCards list
      setClickedCards(clickedCards.concat(e.target.id));
      props.incrementScore(true);
    }
    setFadeEffect("fadeOut");
  };

  return (
    <CardsDiv className={fadeEffect}>
      {cards.map((card) => {
        return (
          <MemoryCard
            imageSrc={gameImages[card]}
            key={uniqid()}
            id={card}
            cardClicked={handleCardClicked}
          />
        );
      })}
      <DefaultCard cardClicked={handleCardClicked} id="none" />
    </CardsDiv>
  );
}

export default CardOrganizer;
