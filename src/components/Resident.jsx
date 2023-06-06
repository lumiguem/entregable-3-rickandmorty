import axios from "axios";
import { useEffect, useState } from "react";

const Resident = ({residentUrl}) => {
   const [residentInfo, setResidentInfo] = useState(null)

    const statusStyles = {
        "Alive" : "bg-green-500",
        "Dead": "bg-red-500",
        "unknown": "bg-gray-400",

    }
    useEffect(()=> {
            axios.get(residentUrl)
            .then(({data}) => setResidentInfo(data))
            .catch((err) => console.log(err))
    }, [])
  return (
    <article>
        <div className="relative">
            <img className="rounded-full border-8 border-[#893446]  " src={residentInfo?.image} alt="" />
            <div className="bg-black/60 flex items-center gap-2 absolute bottom-6 left-1/2 -translate-x-1/2 rounded-2xl px-4">
                <div className={`h-3 aspect-square ${statusStyles[residentInfo?.status]} rounded-full`}></div>
                {residentInfo?.status}
            </div>
        </div>
        <section className=" bg-[#C9BEDC] border-8 border-[#893446] rounded-2xl text-rose-800  ">
            <h4 className="grid justify-center bg-[#EDE288] text-rose-800 font-bold rounded-2xl p-6 " >{residentInfo?.name}</h4>
            <ul className="grid justify-center gap-2">
                <li>Species: <span className="text-white">{residentInfo?.species}</span ></li>
                <li>Origin: <span className="text-white">{residentInfo?.origin.name}</span></li>
                <li>Times appear: <span className="text-white">{residentInfo?.episode.length}</span></li>
               
            </ul>
        </section>
    </article>
);
};

export default Resident