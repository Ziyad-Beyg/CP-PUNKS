import React from "react";
import "./CollectionCard.css";
import weth from "../Assets/weth.png";

function CollectionCard({ punk, setSelectedPunk }) {
  return (
    <div
      className="collectionCard"
      onClick={() => {
        setSelectedPunk(punk.id - 1);
      }}
    >
      <img src={punk.punkImage} alt={punk.id} />
      <div className="details">
        <div className="name">
          {punk.name}
          <div className="id">.#{punk.id}</div>
        </div>
        <div className="priceContainer">
          <img className="wethImg" src={weth} />
          <div className="price">{punk.punkPrice}</div>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
