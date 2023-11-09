import {useState , useEffect, useRef} from "react";
import {GoChevronDown, GoCheck} from "react-icons/go";
import Panel from "../Misc/Panel"
import { useDispatch, useSelector } from "react-redux";
import { changeAssignmentClasses, useFetchTeacherClassroomsQuery } from "../../store";

function Dropdown() {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();
    const userId = useSelector(state => state.user.userId)
    const classes = useSelector(state => state.assignment.classes);
    const {data,error,isFetching} = useFetchTeacherClassroomsQuery(userId);
    

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
            dispatch(changeAssignmentClasses(updatedOptions))
        }else{
            const updatedOptions = [...classes,choice];
            dispatch(changeAssignmentClasses(updatedOptions))
        }
        console.log(classes)
    }

    let renderedOptions;
    if(isFetching) {
        renderedOptions = <div>Fetching Classrooms...</div>
    } else if (error) {
        renderedOptions = <div>Error Loading Classrooms</div>
    } else {
        renderedOptions = data.classes.map(el => {
        var isSelected = false;
        if (classes.includes(el._id)){
            isSelected = true
        }else {
            isSelected = false
        }
        return (
        <div className="flex justify-between hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => {handleOptionClick(el._id)}} key={el._id}>
            {el.className}
            {isSelected && <GoCheck/>}
        </div>)
        })}


    return(
        <div ref={divEl} className="w-full relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>{"Select..."} <GoChevronDown className="text-lg"/></Panel>
            {isOpen && <Panel className="absoulte top-full">{renderedOptions}</Panel>}
        </div>
    )
}
export default Dropdown;