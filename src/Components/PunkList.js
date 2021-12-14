import React from 'react'
import CollectionCard from './CollectionCard'
import './PunkList.css'

function PunkList({PunkList}) {

    return (
        <div className='punkListData'>
            {
                PunkList.map( Punk => (

                    <CollectionCard key={Punk.token_id} image={Punk.image_original_url} name={Punk.name} id={Punk.token_id} traits={Punk.traits} />

     ) )
            }
        </div>
    )
}

export default PunkList
