import React from 'react'
import useFetch from '../hooks/useFetch'

const CardResident = ({ url }) => {

    const resident = useFetch(url);

    return (
        <article className='card Character'>
            <div className='headerCards'>
                <img src={resident?.image} alt={`image of ${resident?.name}`} />
                <div className='status'>
                    <div className='circle'></div>
                    <span>{resident?.status}</span>
                </div>
            </div>

            <div className='userInfo'>
                <h3>{resident?.name}</h3>
                <ul>
                    <li>
                        <span className='speciesColor'> Species: </span> <br /> <strong>{resident?.species}</strong>
                    </li>
                    <li>
                        <span className='speciesColor'> Origin: </span> <br /> <strong>{resident?.origin.name}</strong>
                    </li>
                    <li>
                        <span className='speciesColor'>Episodes Where Appear: </span> <br /> <strong>{resident?.episode.length}</strong>
                    </li>
                </ul>
            </div>
        </article>
    )
}

export default CardResident