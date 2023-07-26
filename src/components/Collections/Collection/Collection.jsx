import React from "react";
import "./Collection.css";

function Collection({ img, name, floor, volume, num }) {
  return (
    <div className="collection">
      <div className="leftDiv">
        <div>{num}</div>
        <img src={img}></img>
        {name}
      </div>
      <div className="rightDiv">
        <div>{floor}</div> <div>{volume}</div>
      </div>
    </div>
  );
}

export default Collection;
