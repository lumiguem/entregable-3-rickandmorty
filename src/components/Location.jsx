import axios from "axios"

const Location = ({location, setLocation}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
       const newLocation = e.target.newLocation.value
       
       const URL = `https://rickandmortyapi.com/api/location/${newLocation}`

       axios.get(URL)
       .then(({data})=> setLocation(data))
       .catch((err)=>console.log(err))
    
    } 

    return (
    <section className="grid justify-center p-8 gap-4">
        {/* Input de búsqueda */}
            <form  className="relative" onSubmit={handleSubmit}>
                <input id="newLocation" className="text-black rounded-3xl px-4 border-4 border-[#893446] " placeholder="Type a location Id ..." type="text" />
                <button className="bg-[#EDE288] rounded-2xl border-4 border-[#893446] text-[#893446] font-bold px-8 ">Search <i className='bx bx-search-alt'></i> </button>
            </form>
        {/*   Info Location */}
        <section className="grid justify-center p-4 bg-[#FEEF66] border-4 border-[#893446] rounded-2xl text-[#893446] ">
            <h2>{location?.name}</h2>
            <ul>
                <li>Type: {location?.type}</li>
                <li>Dimension: {location?.dimension}</li>
                <li>Population: {location?.residents.length}</li>
            </ul>
        </section>
    </section>
  )
}

export default Location