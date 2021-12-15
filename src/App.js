import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import PunkList from './Components/PunkList';
import Main from './Components/Main';


function App() {

  const [PunkListData, setPunkListData] = useState([])
  const [SelectedPunk, setSelectedPunk] = useState(0)
  
  useEffect( async () => {
    let request = {method: 'GET'}
    let fetchedData = await fetch('https://testnets-api.opensea.io/assets?asset_contract_address=0x45475d9D43D9c1de5198DF7dd88e0fc992801E4B&order_direction=asc', request)
    fetchedData = await fetchedData.json()
    fetchedData = await fetchedData.assets
    fetchedData = await fetchedData.slice(1,7)
    // console.log(fetchedData)
    // let fetchedData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x45475d9D43D9c1de5198DF7dd88e0fc992801E4B&order_direction=asc')
    // fetchedData = fetchedData.data.assets
    // let allData = await fetchedData.assets;
    // console.log(fetchedData)
    setPunkListData(fetchedData)
  }, [])

  return (
    <div className='App'>
      <Header/>
      {
        PunkListData.length > 0 && (
          <>
              <Main PunkList={PunkListData} SelectedPunk={SelectedPunk} />
      <PunkList PunkList={PunkListData } setSelectedPunk={setSelectedPunk}/>
          </>
        )
      }

      

    </div> 
  );
}

export default App;
