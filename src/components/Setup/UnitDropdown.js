import {useState, useEffect} from "react";
import {GiCatapult, GiMoonOrbit, GiPendulumSwing, GiUnbalanced} from "react-icons/gi"
import Checkbox from "../Checkbox";
import {MdRocketLaunch} from "react-icons/md";
import {PiWaveSineDuotone} from "react-icons/pi"
import{BsTornado} from "react-icons/bs"

function UnitDropdown({children, topics, onAdd, onDelete, checkedBoxes, icon, expand}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded)
    }

    useEffect(()=> {
        if (expand){
            setIsExpanded(true);
        } else {
            setIsExpanded(false);
        }
    },[expand])

    const renderedItems = topics.map((topic) => {

        return(
            <div className="" key={topic.id}>
                {isExpanded && <Checkbox checkedBoxes={checkedBoxes} onAdd={onAdd} onDelete={onDelete} topic={topic}/>}
            </div>
        )
    })

    const handleIcon = (icon) => {
        if (icon === "GiMoonOrbit"){
            return(
                <span className="text-4xl text-indigo-600">
                    <GiMoonOrbit />
                </span>   
            )
        }else if (icon === "GiCatapult"){
            return(
                <span className="text-4xl text-indigo-600">
                    <GiCatapult />          
                </span>               
            )
        }else if (icon === "GiPendulumSwing"){
            return(
                <span className="text-4xl text-indigo-600">
                    <GiPendulumSwing />
                </span>
            )
        }else if (icon === "MdRocketLaunch"){
            return(
                <span className="text-4xl text-indigo-600">
                    <MdRocketLaunch />
                </span>
            )
        }else if (icon === "GiUnbalanced"){
            return(
                <span className="text-4xl text-indigo-600">
                    <GiUnbalanced />
                </span>                
            )
        }else if (icon === "PiWaveSineDuotone"){
            return(
                <span className="text-4xl text-indigo-600">
                    <PiWaveSineDuotone />
                </span>                
            )
        }else if (icon === "BsTornado"){
            return(
                <span className="text-4xl text-indigo-600">
                    <BsTornado />
                </span>               
            )
        }
    }

    return (
    <div className="w-full p-4 ">
        <div className="flex cursor-pointer text-lg font-medium p-4 bg-indigo-200 border-2 border-indigo-500 rounded-lg " onClick={handleClick}>
        {handleIcon(icon)}<span className="flex justify-center items-center p-2 whitespace-nowrap"> {children}</span>
        </div>
        {renderedItems}
    </div>
    )
}

export default UnitDropdown;