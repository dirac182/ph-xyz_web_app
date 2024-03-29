import {useState , useEffect, useRef} from "react";
import {GoChevronDown} from "react-icons/go";
import Panel from "../Misc/Panel"

function SortDropdown({options, value, onChange}) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return;
            }
            if (!divEl.current.contains(event.target)){
                setIsOpen(false);
            }
        }
        document.addEventListener("click",handler, true);
        return () => {
            document.removeEventListener("click", handler);
        }
    }, []);

    const handleClick = () => {
        // setIsOpen(!isOpen);
    }

    const handleOptionClick = (option) =>{
        setIsOpen(false);
        onChange(option);
    }

    const renderedOptions = options.map((options) => {
        return <div className="hover:bg-indigo-100 rounded cursor-pointer p-1" onClick={() => {handleOptionClick(options)}} key={options.value}>
            {options.label}
        </div>
    });

    return(
        <div ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>{value?.label|| "Select..."} <GoChevronDown className="text-lg"/></Panel>
            {isOpen && <Panel className="absoulte top-full">{renderedOptions}</Panel>}
        </div>
    )
}

export default SortDropdown;