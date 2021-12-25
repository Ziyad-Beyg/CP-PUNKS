import React from 'react'
import CollectionCard from './CollectionCard'
import './PunkList.css'

function PunkList({PunkList, setSelectedPunk}) {

    return (
        <div className='punkListData'>
            {
                PunkList.map( Punk => (

                    <CollectionCard key={Punk.id} setSelectedPunk={setSelectedPunk} image={Punk.punkImage} name={Punk.name} id={Punk.id} price={Punk.punkPrice} />

     ) )
            }
        </div>
    )
}

export default PunkList