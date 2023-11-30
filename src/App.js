import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import PunkList from "./Components/PunkList";
import Main from "./Components/Main";
import axios from "axios";
import punkData from "./DATA/Data.json";

function App() {
  const [PunkListData, setPunkListData] = useState([]);
  const [SelectedPunk, setSelectedPunk] = useState(0);

  useEffect(async () => {
    console.log(punkData);
    setPunkListData(punkData);
  }, []);

  return (
    <div className="App">
      <Header />

      <Main PunkList={PunkListData} SelectedPunk={SelectedPunk} />
      <PunkList setSelectedPunk={setSelectedPunk} />
    </div>
  );
}

export default App;
