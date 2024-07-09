// ../../components/search/Search

import { CiSearch } from "react-icons/ci";

const Search = () => {
    return (
        <button className="bg-gray-700 bg-opacity-95 shadow-2xl sm:w-16 sm:h-16 w-12 h-12 flex items-center justify-center rounded-full fixed left-6 top-6">
            <CiSearch size={32} color="white"/>
        </button>
    )
}
export default Search