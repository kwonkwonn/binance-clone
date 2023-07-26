import React, { useRef, useState } from "react";
import Ho from "../../assets/ho.png";
import "./cardSlide.css";
import Ho1 from "../../assets/Ho1.jpg";
import Card from "./Card/Card";

function CardSlide({ Category }) {
  const numberCurrent = useRef(0);
  const cards = [
    {
      name: "CR7",
      link: "www.google.com",
      photo:
        "https://image.jtbcplus.kr/data/contents/jam_photo/202110/14/3cc1e592-5508-4381-aa15-c43bb2a381a4.jpg",
      volume: `1.3M USD`,
      floorPrice: `3.1 USD`,
    },
    {
      name: "Ultra Collection",
      link: "www.google.com",
      photo:
        "https://i.namu.wiki/i/JOE_UCjO09-iO4-AJiZ947MzUIeY_WL-9D7Jv1cf3JdbTilxcHziGdSb6nIuyPD_Hz_x61SmKnV53d5uT1enwA.webp",
      volume: `1.3M USD`,
      floorPrice: `3.1 USD`,
    },
    {
      name: "DogePunks",
      link: "www.google.com",
      photo:
        "https://i.namu.wiki/i/JOE_UCjO09-iO4-AJiZ947MzUIeY_WL-9D7Jv1cf3JdbTilxcHziGdSb6nIuyPD_Hz_x61SmKnV53d5uT1enwA.webp",
      volume: `1.3M USD`,
      floorPrice: `3.1 USD`,
    },
    {
      name: "DomoHippo",
      link: "www.google.com",
      photo: Ho,
      volume: `1.3M USD`,
      floorPrice: `3.1 USD`,
    },
    {
      name: "DID club",
      link: "www.google.com",
      photo: Ho,
      volume: `1.3M USD`,
      floorPrice: `3.1 USD`,
    },
    {
      name: "blockLegend",
      link: "www.google.com",
      photo: Ho,
      volume: `1.3M USD`,
      floorPrice: `3.1 USD`,
    },
    {
      name: "fusioist",
      link: "www.google.com",
      photo: Ho1,
      volume: `1.3M USD`,
      floorPrice: `3.1 USD`,
    },
    {
      name: "Neo Yauto",
      link: "www.google.com",
      photo: Ho1,
      volume: `1.3M USD`,
      floorPrice: `3.1 USD`,
    },
    {
      name: "NPC Ordinals",
      link: "www.google.com",
      photo: Ho1,
      volume: `1.3M USD`,
      floorPrice: `3.1 USD`,
    },
  ];

  const [slideMotion, setSlideMotion] = useState([
    cards[0],
    cards[1],
    cards[2],
  ]);
  function clickedRight() {
    numberCurrent.current += 6;
    const i = numberCurrent.current;
    setSlideMotion([cards[i % 9], cards[(i + 1) % 9], cards[(i + 2) % 9]]);
  }
  function clickedLeft() {
    numberCurrent.current += 3;
    const i = numberCurrent.current;
    setSlideMotion([cards[i % 9], cards[(i + 1) % 9], cards[(i + 2) % 9]]);
  }

  const slides = slideMotion.map((card) => {
    return (
      <Card
        name={card.name}
        link={card.link}
        photoLink={card.photo}
        volume={card.volume}
        floorPrice={card.floorPrice}
      />
    );
  });

  return (
    <>
      <div className="category">
        {Category}
        <div className="butt">
          <button onClick={clickedLeft}>left</button>
          <button onClick={clickedRight}>right</button>
        </div>
      </div>
      <div>
        <div className="slidesDesign">{slides}</div>
      </div>
    </>
  );
}

export default CardSlide;
