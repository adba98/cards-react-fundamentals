import React from "react";
import Card from "../Card/Card";
import cards from "../../models/cards";

const Cards = () => {
  return (
    <>
      {cards.map(({ lang, url, fcolor, scolor }) => {
        return (
          <Card
            key={lang}
            lang={lang}
            img={url}
            fcolor={fcolor}
            scolor={scolor}
          />
        );
      })}
    </>
  );
};

export default Cards;
