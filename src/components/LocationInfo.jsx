import React from 'react'

const LocationInfo = ({ location }) => {

    return (
        <article className='headerX CardsX'>

            <h2 className='planet-name'>{location?.name}</h2>

            <ul className='card-location'>

                <li className='location'><span>Type: </span><strong>{location?.type}</strong></li>

                <li className='location'><span>Dimension: </span><strong>{location?.dimension}</strong></li>

                <li className='location'><span>Population: </span><strong>{location?.residents.length}</strong></li>
            </ul>
        </article>
    )
}

export default LocationInfo