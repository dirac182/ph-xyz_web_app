import {useState , useEffect, useRef} from "react";
import {GoChevronDown, GoCheck} from "react-icons/go";
import Panel from "../Misc/Panel"
import { useSelector } from "react-redux";
import { changeAssignmentClasses } from "../../store";

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();
    const teacherClassrooms = useSelector(state => state.user.teacherClassrooms)
    const [options, setOptions] = useState([])
    const classes = useSelector(state => state.assignment.classes);

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
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (choice) =>{
        if (classes.includes(choice)){
            const updatedOptions = classes.filter(c => {
                return c !== choice;
            })
            setOptions(updatedOptions);
            changeAssignmentClasses(updatedOptions)
        }else{
            const updatedOptions = [...classes,choice];
            setOptions(updatedOptions);
            changeAssignmentClasses(updatedOptions)
        }
        console.log(classes)
    }

    const renderedOptions = teacherClassrooms.map((el) => {
        var isSelected = false;
        if (classes.includes(el.className)){
            isSelected = true
        }else {
            isSelected = false
        }
        return <div className="flex justify-between hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => {handleOptionClick(el.className)}} key={el.classId}>
            {el.className}
            {isSelected && <GoCheck/>}
        </div>
    });

    return(
        <div ref={divEl} className="w-4/5 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>{"Select..."} <GoChevronDown className="text-lg"/></Panel>
            {isOpen && <Panel className="absoulte top-full">{renderedOptions}</Panel>}
        </div>
    )
}
export default Dropdown;