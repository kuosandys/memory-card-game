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
  const [numberOfCards, setNumberOfCards] = useState(4);
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
      let numberOfCards = score < 5 ? 4 : score < 10 ? 6 : score < 15 ? 8 : 10;
      for (let i = 0; i < numberOfCards; i++) {
        let randomIndex = Math.floor(Math.random() * gameImages.length);
        cardsArray.push(randomIndex);
      }
      setCards(cardsArray);
    };
    generateCards();
  }, [score, gameImages.length]);

  const handleCardClicked = (e) => {
    // add to clickedCards list
    setClickedCards(clickedCards.concat(e.target.id));

    // send incrementScore to parent
    if (clickedCards.includes(e.target.id)) {
      setClickedCards([]);
      props.incrementScore(false);
    } else {
      props.incrementScore(true);
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
