import React from "react";
import CollectionCard from "./CollectionCard";
import "./PunkList.css";
import punkData from "../DATA/Data.json";

function PunkList({setSelectedPunk }) {
  let punks = [...punkData];
  console.log(punkData);
  console.log(punks);
  return (
    <div className="punkListData">
      {punkData.map((punk) => (
        <CollectionCard
          key={punk.id}
          setSelectedPunk={setSelectedPunk}
          punk={punk}
        />
      ))}
    </div>
  );
}

export default PunkList;
