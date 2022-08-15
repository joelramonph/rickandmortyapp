import React from 'react'
import useFetch from '../hooks/useFetch'

const CardResident = ({ url }) => {

  const resident =  useFetch(url)

  return(
      <article className='cardContainer__resident'>

        <header>
            <img src={resident?.image} alt={`image of ${resident?.name}`}/>
            <div className='container__status'>
                <div className="circle"></div>
                <span className='resident__status'>{resident?.status}</span>
            </div>
        </header>
        <div className='resident__datos'> 
            <h3 className='resident__name'>{resident?.name}</h3>
           <ul className='card__list-resident'>
               <li> <span>Species</span> {resident?.species}</li>
               <li><span>Origin</span> {resident?.origin.name}</li>
               <li><span>Episodes where appear</span> {resident?.episode.length}</li>
           </ul>

        </div>

 
      </article>


  )
 
}

export default CardResident