import { useEffect, useState } from "react";
import MemoryCard from "./MemoryCard";
import uniqid from "uniqid";

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

function CardOrganizer(props) {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const { score, setScore, highScore, setHighScore } = props;

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
    if (clickedCards) {
      const generateCards = () => {
        let cardsArray = [];
        for (let i = 0; i < props.numberOfCards; i++) {
          let randomIndex = Math.floor(Math.random() * gameImages.length);
          cardsArray.push(randomIndex);
        }
        setCards(cardsArray);
      };
      generateCards();
    }
  }, [clickedCards, props.numberOfCards, gameImages.length]);

  const handleCardClicked = (e) => {
    setClickedCards(clickedCards.concat(e.target.id));
    if (clickedCards.includes(e.target.id)) {
      setScore(0);
      setClickedCards([]);
    } else {
      setScore((prevScore) => prevScore + 1);
      setHighScore((prevHighScore) =>
        score >= prevHighScore ? score + 1 : prevHighScore
      );
    }
  };

  return (
    <div>
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
    </div>
  );
}

export default CardOrganizer;
