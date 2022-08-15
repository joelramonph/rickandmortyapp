import React from 'react'

const LocationInfo = ({location}) => {
 
return(
<article className='container__location'>
    <h2 className='title__location'>{location?.name}</h2>
    <ul className='list__item-location'>
        <li className='item'><span>Type:</span> {location?.type} </li>
        <li className='item'><span>Dimension:</span> {location?.dimension}</li>
        <li className='item'><span>Population:</span> {location?.residents.length}</li>
    </ul>
</article>



)

}

export default LocationInfo