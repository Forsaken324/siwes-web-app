import { useState } from "react"
import { assets } from "../assets/assets"

const SearchHeader = () => {
    const [searchValue, setSearchValue] = useState('');
    
  return (
    <div className="flex flex-col gap-4 w-full h-[327px] items-center justify-center p-5 text-gray-400 bg-home-gray dark:bg-gray-700 mt-40">
        <h1 className="font-bold text-black dark:text-white text-[36px]">Available Cars</h1>
        <p className="text-sm">Browse our selection of premium vehicles available for your next adventure</p>
        <div className="flex items-center justify-between md:w-[672px] h-[50px] rounded-full bg-white shadow shadow-lg">
            <div className="flex items-center gap-3 ml-5 w-[90%] dark:text-black">
                <img src={assets.search_icon} alt="search-icon" />
                <input type="text" placeholder="Search by make, model, or features" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="w-full focus:outline-none dark:text-black" />
            </div>
            <button className="mr-6"><img src={assets.filter_icon} alt="filter-icon" /></button>
        </div>
    </div>
  )
}

export default SearchHeader

// are you still so dull?