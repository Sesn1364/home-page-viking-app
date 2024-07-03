// ../../components/search/Search

import { CiSearch } from "react-icons/ci";

const Search = () => {
    return (
        <button className="bg-gray-700 bg-opacity-95 shadow-2xl w-16 h-16 flex items-center justify-center rounded-full">
            <CiSearch size={32} color="white"/>
        </button>
    )
}
export default Search