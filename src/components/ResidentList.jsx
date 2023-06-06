import { useEffect, useState } from "react"
import Resident from "./Resident"
import { paginationLogic } from "../util/pagination"

const FIRST_PAGE =1 
const ResidentList = ({ residents, location }) => {
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE)

  const { pages, residentsInPage } = paginationLogic(currentPage, residents)

  useEffect(() => {
    setCurrentPage(FIRST_PAGE)
  }, [location])

  return (
    <section className="px-3">
      {/* lista de residentes */}
      <section className="grid gap-8 grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1024px] mx-auto py-6">
        {
          residentsInPage?.map((resident) => (<Resident key={resident} residentUrl={resident} />))
        }
      </section>
      {/* Paginación */}

      <section className="flex justify-center gap-4 flex-wrap pb-8">
        {pages.map((page) => (
            <button 
            key={{page}}
            onClick={() => setCurrentPage(page)} className={` text-[#893446] px-5 border-4 border-[#893446] aspect-square rounded-full ${currentPage === page ? "bg-[#C9BEDC]" : "bg-[#EDE288]"}`}
            >
              {page}
            </button>
          ))}
      </section>

    </section>
  )
}

export default ResidentList