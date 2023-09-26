import {AiOutlineSearch} from "react-icons/ai"

function Searchbar() {
    return (
        <div title="Search functionality coming soon..." className="flex items-center w-fit border border-2 rounded-full border-indigo-300 text-lg">
            <span className="px-4 text-xl">
                <AiOutlineSearch/>
            </span>
            <input className="outline-0 bg-transparent"  placeholder="Seach..." />
        </div>
    )
}

export default Searchbar;