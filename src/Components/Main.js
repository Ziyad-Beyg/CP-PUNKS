import React, {useState, useEffect} from 'react'
import './Main.css'
import more from '../Assets/owner/more.png'
import insta from '../Assets/owner/instagram.png'
import twitter from '../Assets/owner/twitter.png'


function Main({SelectedPunk, PunkList }) {
// console.log(SelectedPunk)
// console.log(PunkList)
// console.log(PunkList[SelectedPunk])

    const [ActivePunk, setActivePunk] = useState(PunkList[SelectedPunk])
    const [FirstTimer, setFirstTimer] = useState(false)

    useEffect(() => {
        if(FirstTimer){
            setActivePunk(PunkList[SelectedPunk - 1])
        }
        else{
            setFirstTimer(true)
        }
    }, [PunkList, SelectedPunk])

  return (
    <div className="main">
      <div className="punkImageContainer">
        <img className="ActivePunkImage" src={ActivePunk?.image_original_url} />
      </div>
      <div className="activePunkDetails">
        <div className="punkNameAndId">
          <div className="activePunkTitle">{ActivePunk?.name}</div>
          <div className="activePunkId">.#{ActivePunk?.token_id}</div>
        </div>
        <div className="ownerDetails">
          <div className='userImageContainer'>
            <img className='userImage' src={ActivePunk?.owner?.profile_img_url}/>
            <div className='userDetails'>
            <div className='userWalletInfo'>
            {ActivePunk?.owner?.address}
            </div>
            <div className='userName'>
                @{ActivePunk?.owner?.user?.username}
            </div>
          </div>
          </div>
          
          <div className='userSocialInfo'>
            <div className='userSocialInfoContainer'>
              <img src={insta} />
            </div>
            <div className='userSocialInfoContainer'>
              <img src={twitter} />
            </div>
            <div className='userSocialInfoContainer'>
              <img src={more} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
