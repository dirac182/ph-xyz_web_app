import classNames from "classnames";
import { useEffect } from "react";

function SkillBubble({children,index,onClick,...rest}) {
    
    var style = ""

    if (children.substring(0,1) === "1"){
        style = "bg-red-600"
    } else if (children.substring(0,1) === "2"){
        style = "bg-blue-600"
    } else if (children.substring(0,1) === "3"){
        style = "bg-green-600"
    } else if (children.substring(0,1) === "4"){
        style = "bg-yellow-600"
    } else if (children.substring(0,1) === "5"){
        style = "bg-purple-600"
    } else if (children.substring(0,1) === "6"){
        style = "bg-stone-600"
    } else if (children.substring(0,1) === "7"){
        style = "bg-cyan-600"
    }

    var classes = classNames("flex text-white px-2 py-1 font-normal bg-gray-50 hover:bg-indigo-300 border-2 rounded-full border-indigo-500 items-center cursor-pointer",style)

    return(
        <span {...rest} className={classes}>
            <p className="relative right-1 pl-2">{children}</p>
        </span>
    )
}

export default SkillBubble;