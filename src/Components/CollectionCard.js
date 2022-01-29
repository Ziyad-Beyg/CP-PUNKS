import React from 'react'
import './CollectionCard.css'
import weth from '../Assets/weth.png'

function CollectionCard({image, name, id, price, setSelectedPunk}) {
    return (
        <div className='collectionCard' onClick={() => {setSelectedPunk(id)}}>
            <img src={image} />
            <div className='details'>
                <div className='name'>
                    {name}
                    <div className='id'>
                        .#{id}
                    </div>
                </div>
                <div className='priceContainer'>
                    <img className='wethImg' src={weth}/>
                    <div className='price'> 
                        {price}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard
