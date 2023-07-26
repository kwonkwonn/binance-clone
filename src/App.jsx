import React from "react";
import "./App.css";
import Header from "./components/layout/Header/Header";
import CardSlide from "./components/cardSlide/CardSlide";
import Collections from "./components/Collections/Collections";
import CardSlideThree from "./components/cardSlideThree/CardSlideTree";
import FAQ from "./components/FAQ/FAQs";
import Footer from "./components/layout/Footer/Footer";
import BGIMG from "./assets/cover.jpg";

function App() {
  return (
    <>
      <Header />
      <div className="mainBody">
        <div className="Home">
          <div className="Homement">
            <img className="background" src={BGIMG} alt="12"></img>
            <h1>One-stop platform for all things NFTs Trade</h1>
            <h3>Stake and Loan NFTs securely on Binance NFT</h3>
          </div>
          <CardSlide />
          <Collections />

          <CardSlideThree Category={"features"} />
          <CardSlideThree Category={"New Listing"} />
        </div>
        <FAQ />
      </div>
      <Footer />
    </>
  );
}

export default App;
