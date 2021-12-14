import React from 'react'
import './CollectionCard.css'
import weth from '../Assets/weth.png'

function CollectionCard({image, name, id, traits}) {
    return (
        <div className='collectionCard'>
            <img src={image} />
            <div className='details'>
                <div className='name'>
                    {name}
                    <div className='id'>
                        .#{id}
                    </div>
                </div>
                <div className='priceContainer'>
                    <img className='wethImg' src={weth} />
                    <div className='price'> 
                        {traits[0].value}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard
