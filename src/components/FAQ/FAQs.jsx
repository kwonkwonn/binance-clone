import "./FAQs.css";
import { useState } from "react";
import FAQ from "./FAQ/FAQ";

function FAQs() {
  const FAQsLeft = [
    {
      name: "How to Finds NFTs on Binance NFT Marketplace",
      contents:
        "You can search through the wide variety of NFTs on our marketplace in four ways:\n • Find the latest drops from cross-chain NFT listings on the Marketplace. In addition to NFTs listed on Binance NFT, you can find third-party NFT listings too. Stay tuned for more NFT collections, marketplaces, and chains on Binance NFT in the future.\n Narrow your NFT search in a variety of ways using our new filters. Modify the filters to explore and trade NFTs with less friction \n • View popular NFTs through the leaderboards to find NFTs based on specific metrics. Browse through rankings on the [Stats] page and the four leaderboards, NFTs, NFT Collections, Creators, and Mystery Boxes. \n• Search for NFTs by interest using specific keywords. Search for the full name of the NFT collection you’re interested in to view it in the search results. For more details, please refer to ",
    },
    {
      name: "How do I sell an NFT?",
      contents:
        "You can search through the wide variety of NFTs on our marketplace in four ways:\n • Find the latest drops from cross-chain NFT listings on the Marketplace. In addition to NFTs listed on Binance NFT, you can find third-party NFT listings too. Stay tuned for more NFT collections, marketplaces, and chains on Binance NFT in the future.\n Narrow your NFT search in a variety of ways using our new filters. Modify the filters to explore and trade NFTs with less friction \n • View popular NFTs through the leaderboards to find NFTs based on specific metrics. Browse through rankings on the [Stats] page and the four leaderboards, NFTs, NFT Collections, Creators, and Mystery Boxes. \n• Search for NFTs by interest using specific keywords. Search for the full name of the NFT collection you’re interested in to view it in the search results. For more details, please refer to ",
    },
    {
      name: "What are the NFT Transaction Fees on Bincane",
      contents:
        "You can search through the wide variety of NFTs on our marketplace in four ways:\n • Find the latest drops from cross-chain NFT listings on the Marketplace. In addition to NFTs listed on Binance NFT, you can find third-party NFT listings too. Stay tuned for more NFT collections, marketplaces, and chains on Binance NFT in the future.\n Narrow your NFT search in a variety of ways using our new filters. Modify the filters to explore and trade NFTs with less friction \n • View popular NFTs through the leaderboards to find NFTs based on specific metrics. Browse through rankings on the [Stats] page and the four leaderboards, NFTs, NFT Collections, Creators, and Mystery Boxes. \n• Search for NFTs by interest using specific keywords. Search for the full name of the NFT collection you’re interested in to view it in the search results. For more details, please refer to ",
    },
  ];
  const FAQsRight = [
    {
      name: "How do I buy an NFT",
      contents:
        "You can search through the wide variety of NFTs on our marketplace in four ways:\n • Find the latest drops from cross-chain NFT listings on the Marketplace. In addition to NFTs listed on Binance NFT, you can find third-party NFT listings too. Stay tuned for more NFT collections, marketplaces, and chains on Binance NFT in the future.\n Narrow your NFT search in a variety of ways using our new filters. Modify the filters to explore and trade NFTs with less friction \n • View popular NFTs through the leaderboards to find NFTs based on specific metrics. Browse through rankings on the [Stats] page and the four leaderboards, NFTs, NFT Collections, Creators, and Mystery Boxes. \n• Search for NFTs by interest using specific keywords. Search for the full name of the NFT collection you’re interested in to view it in the search results. For more details, please refer to ",
    },
    {
      name: "How to Create an NFT on the Binance NFT Marchetplace",
      contents:
        "You can search through the wide variety of NFTs on our marketplace in four ways:\n • Find the latest drops from cross-chain NFT listings on the Marketplace. In addition to NFTs listed on Binance NFT, you can find third-party NFT listings too. Stay tuned for more NFT collections, marketplaces, and chains on Binance NFT in the future.\n Narrow your NFT search in a variety of ways using our new filters. Modify the filters to explore and trade NFTs with less friction \n • View popular NFTs through the leaderboards to find NFTs based on specific metrics. Browse through rankings on the [Stats] page and the four leaderboards, NFTs, NFT Collections, Creators, and Mystery Boxes. \n• Search for NFTs by interest using specific keywords. Search for the full name of the NFT collection you’re interested in to view it in the search results. For more details, please refer to ",
    },
    {
      name: "How do I Deposit an NFT",
      contents:
        "You can search through the wide variety of NFTs on our marketplace in four ways:\n • Find the latest drops from cross-chain NFT listings on the Marketplace. In addition to NFTs listed on Binance NFT, you can find third-party NFT listings too. Stay tuned for more NFT collections, marketplaces, and chains on Binance NFT in the future.\n Narrow your NFT search in a variety of ways using our new filters. Modify the filters to explore and trade NFTs with less friction \n • View popular NFTs through the leaderboards to find NFTs based on specific metrics. Browse through rankings on the [Stats] page and the four leaderboards, NFTs, NFT Collections, Creators, and Mystery Boxes. \n• Search for NFTs by interest using specific keywords. Search for the full name of the NFT collection you’re interested in to view it in the search results. For more details, please refer to ",
    },
  ];

  const leftDragBar = FAQsLeft.map((FAQLeft) => {
    const [contentsInside, setContentsInside] = useState("");
    function onClick() {
      if (contentsInside === "") {
        setContentsInside(FAQLeft.contents);
      } else setContentsInside("");
    }

    return (
      <div onClick={onClick}>
        <FAQ contents={contentsInside} name={FAQLeft.name} />
      </div>
    );
  });

  const rightDragBar = FAQsRight.map((FAQRight) => {
    const [contentsInside, setContentsInside] = useState("");
    function onClick() {
      if (contentsInside === "") {
        setContentsInside(FAQRight.contents);
      } else setContentsInside("");
    }
    return (
      <div onClick={onClick}>
        <FAQ contents={contentsInside} name={FAQRight.name} />
      </div>
    );
  });

  return (
    <>
      <div className="Container">
        <div className="topCon">
          <h6>FAQ</h6> <h6>all FAQs</h6>
        </div>
        <div className="containerContainer">
          <div className="leftContainer">{leftDragBar}</div>
          <div className="rightContainer">{rightDragBar}</div>
        </div>
      </div>
    </>
  );
}

export default FAQs;
