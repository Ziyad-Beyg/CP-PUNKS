import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import axios from 'axios';
import PunkList from './Components/PunkList';


function App() {

  const [PunkListData, setPunkListData] = useState([])
  
  useEffect( async () => {
    
    let fetchedData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x45475d9D43D9c1de5198DF7dd88e0fc992801E4B&order_direction=asc')
    fetchedData = fetchedData.data.assets
    let allData = fetchedData.slice(1)
    console.log(allData)
    setPunkListData(allData)
  }, [])

  return (
    <div className='App'>
      <Header/>

      <PunkList PunkList={PunkListData } />

    </div> 
  );
}

export default App;
