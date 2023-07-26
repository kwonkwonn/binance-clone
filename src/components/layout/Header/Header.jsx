import React from "react";
import style from "./Header.module.css";
import ListModal from "./listModal/ListModal";
import MetaMask from "./metaMask/MetaMask";

function Header() {
  const listOfModal = ["ape Staking", "the Sandbox Staking", "NFT Loan"];
  return (
    <>
      <div className={style.header}>
        <div className={`${style.headerLeft}`}>
          <div className={style.leftLeft}>
            <a href="">홈</a>
            <a
              href=""
              style={{
                fontWeight: "bold",
                color: "rgb(200,220,50) ",
                alignItems: "center",
              }}
            >
              Binance NFT
            </a>
          </div>
          <div className={style.menus}>
            <ListModal Lists={listOfModal}>Drops</ListModal>
            <div className={style.clickable}>Collections</div>
            <ListModal Lists={listOfModal}>NFT-Fi</ListModal>
          </div>
          <div>
            <input type="text" name="" id="" />
          </div>
        </div>
        <div className={style.headerRight}>
          <MetaMask />

          <div
            style={{
              display: "flex",
            }}
          >
            <div style={{ padding: "0em 1em", cursor: "pointer" }}>
              <img
                style={{
                  width: "100%",
                  height: "28px",
                }}
                src="https://img.freepik.com/free-vector/earth-globe-icon-white-background_1308-122927.jpg"
                alt="df"
              ></img>
            </div>
            <div
              style={{
                borderLeft: "1px solid black",
                padding: "0em 1em",
                cursor: "pointer",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "28px",
                }}
                src="https://www.finance-news.co.kr/wp-content/uploads/2023/03/%EB%8B%AC-%ED%91%9C%EB%A9%B4-1-1024x1002.jpg"
                alt="s"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
