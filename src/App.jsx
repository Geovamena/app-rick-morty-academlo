import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import LocationInfo from './components/LocationInfo'

function App() {

  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    let numberLocation
    if (searchInput === '') {
      numberLocation = Math.floor(Math.random() * (126 - 1) + 1)
    } else {
      numberLocation = searchInput
    }

    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  }, [searchInput])

  // BUSQUEDA POR INPUT

  const handleSubmit = e => {
    e.prevenDefault()

    setSearchInput(e.target.search.value)
  }

  return (
    <div className="App">
      <header className='header'></header>
      <h1 className='title'>Rick and Morty</h1>
      <section className='main'>

        <form className='form' onSubmit={handleSubmit}>

          <input id='search' type="number"/>
          <button className='button-search'>
            Search
          </button>

        </form>

        <LocationInfo location={location} />
        <div className='card-box'>
          {
            location?.residents.map(url => (
              <CardResident
                key={url}
                url={url}
              />
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default App


