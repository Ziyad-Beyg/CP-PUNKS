import React, { useState, useEffect } from "react";
import "./Main.css";
import more from "../Assets/owner/more.png";
import insta from "../Assets/owner/instagram.png";
import twitter from "../Assets/owner/twitter.png";

function Main({ SelectedPunk, PunkList }) {
  const [ActivePunk, setActivePunk] = useState(PunkList[SelectedPunk]);

  useEffect(() => {
    setActivePunk(PunkList[SelectedPunk]);
  }, [PunkList, SelectedPunk]);

  return (
    <div className="main">
      <div className="punkImageContainer">
        <img className="ActivePunkImage" src={ActivePunk?.punkImage} />
      </div>
      <div className="activePunkDetails">
        <div className="punkNameAndId">
          <div className="activePunkTitle">{ActivePunk?.name}</div>
          <div className="activePunkId">.#{ActivePunk?.id}</div>
        </div>
        <div className="ownerDetails">
          <div className="userImageContainer">
            <img className="userImage" src={ActivePunk?.punkOwnerImage} />
            <div className="userDetails">
              <div className="userWalletInfo">
                {ActivePunk?.ownerWallerAddress}
              </div>
              <div className="userName">@{ActivePunk?.punkOwnerName}</div>
            </div>
          </div>

          <div className="userSocialInfo">
            <div className="userSocialInfoContainer">
              <img src={insta} />
            </div>
            <div className="userSocialInfoContainer">
              <img src={twitter} />
            </div>
            <div className="userSocialInfoContainer">
              <img src={more} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
