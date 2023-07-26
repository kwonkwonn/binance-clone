import React, { useRef, useState } from "react";
import Ho from "../../assets/ho.png";
import style from "./CardSlide.module.css";
import Ho1 from "../../assets/Ho1.jpg";

function CardSlide() {
  const numberCurrent = useRef(1);
  const cards = [
    {
      link: "",
      photo: Ho,
    },
    {
      link: "",

      photo: Ho,
    },
    {
      link: "",
      photo: Ho,
    },
    {
      link: "",
      photo: Ho,
    },
    {
      link: "",
      photo: Ho1,
    },
  ];

  const [slideMotion, setSlideMotion] = useState([
    cards[0],
    cards[1],
    cards[2],
    cards[3],
  ]);
  function clickedRight() {
    numberCurrent.current += 4;
    const i = numberCurrent.current;
    setSlideMotion([
      cards[i % 5],
      cards[(i + 1) % 5],
      cards[(i + 2) % 5],
      cards[(i + 3) % 5],
    ]);
  }
  function clickedLeft() {
    numberCurrent.current++;
    let i = numberCurrent.current;
    setSlideMotion([
      cards[i % 5],
      cards[(i + 1) % 5],
      cards[(i + 2) % 5],
      cards[(i + 3) % 5],
    ]);
  }

  const slides = slideMotion.map((card) => {
    return (
      <div className={style.photosSlide}>
        <a href={card.link}>
          <img src={card.photo} alt="sad"></img>
        </a>
      </div>
    );
  });

  return (
    <>
      <div className={style.slider}>
        <button className={style.buttonsLeft} onClick={clickedLeft}>
          left
        </button>
        <div className={style.slidesDesign}>{slides}</div>
        <button className={style.buttonsRight} onClick={clickedRight}>
          right
        </button>
      </div>
    </>
  );
}

export default CardSlide;
