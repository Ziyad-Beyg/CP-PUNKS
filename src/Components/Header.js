import React from 'react';
import "./Header.css"
import punkLogo from "../Assets/header/cryptopunk-logo.png"
import searchLogo from "../Assets/header/search.png"
import modeLogo from "../Assets/header/theme-switch.png"

function Header() {
    return (
        <div className='headerContainer'>
            <div className='logoContainer'>
                <img src={punkLogo} width="200px"/>
            </div>
            <div className='searchContainer'>
                <div className='searchLogoContainer'>
                    <img src={searchLogo}/>
                </div>
                <input className='searchInput' type="text" placeholder='Collection, item or user...'/>
            </div>
            <div className='headerItems'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>
            <div className='headerActions'>
                <div className='modeswitcher'>
                    <img src={modeLogo} width='25px'/>
                </div>
                <div className='signupBtn'>
                    GET IN
                </div>
            </div>
        </div>
    )
}

export default Header
