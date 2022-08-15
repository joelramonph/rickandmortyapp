import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import LocationInfo from './components/LocationInfo'

function App() {

  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    let numberLocation
    if(searchInput === ''){

      numberLocation = Math.floor(Math.random() * (126 - 1) +1)

    }else{
      numberLocation = searchInput
    }
    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(URL)
    .then(res => setLocation(res.data))
    .catch(err => console.log(err))
   
  }, [searchInput])

  console.log(location)

  {/*Busqueda por Input */}

  const handleSubmit = e => {
    e.preventDefault()

    setSearchInput(e.target.search.value)
  }
  
  return (
    <div className="App">

<header className='header'>

<h1 className='title'>Rick and Morty</h1>
<label className='search__text'>Location Search</label>

      <form className='form__search'  onSubmit={handleSubmit}>
        <input id='search' type='text' placeholder="e.g. '1 to 126'" />
        <button>Search</button>
      </form>

      

</header>
<LocationInfo location={location} />


    <div className="container">

  {
    location?.residents.map(url => (

   <CardResident 
     key={url}
     url={url}
   />
   
    ))
  }
    </div>
      
    
     
    </div>
  )
}

export default App
