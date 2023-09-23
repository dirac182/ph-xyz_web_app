import {useState} from "react";
import {GiCatapult} from "react-icons/gi"
import Checkbox from "./Checkbox";

function UnitDropdown({children, topics, onAdd, onDelete}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded)
    }

    const renderedItems = topics.map((topic, index) => {

        return(
            <div className="" key={topic.id}>
                {isExpanded && <Checkbox onAdd={onAdd} onDelete={onDelete} topic={topic}/>}
            </div>
        )
    })

    return (
    <div className="w-full p-4">
        <div className="text-lg font-medium p-4 bg-indigo-100 border-2 border-indigo-500 rounded-lg " onClick={handleClick}>
            <span className="flex"><GiCatapult /> {children}</span>
        </div>
        {renderedItems}
    </div>
    )
}

export default UnitDropdown;