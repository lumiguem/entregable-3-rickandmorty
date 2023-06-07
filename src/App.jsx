import { useEffect, useState } from 'react'
import './App.css'
import { getRandomDimension } from './util/random'
import axios from 'axios'
import Location from './components/Location'
import ResidentList from './components/ResidentList'

function App() {
 const [location, setLocation] = useState(null)
  useEffect (()=> {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`

    axios.get(URL)
    .then(({data})=> setLocation(data))
    .catch((err)=>console.log(err))
  }, [])

  return (
    <main className='bg-[url("/images/bg-image.png")] bg-cover h-screen overflow-y-scroll min-h-screen text-white'>
      <Location  location = {location} setLocation  = {setLocation}/>
      <ResidentList location = {location} residents = {location?.residents}/>
    </main>
  )
}

export default App
