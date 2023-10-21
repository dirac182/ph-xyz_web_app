import classNames from "classnames";
import { useDispatch } from "react-redux";
import { setSkillId } from "../../store";

function SkillBubble({children,index,onClick,...rest}) {
    const dispatch = useDispatch()
    var style = ""

    if (children.substring(0,2) === "EU"){
        style = "bg-red-600"
    } else if (children.substring(1,2) === "EK"){
        style = "bg-blue-600"
    } else if (children.substring(0,2) === "LO"){
        style = "bg-green-600"
    } else if (children.substring(0,2) === "SP"){
        style = "bg-yellow-600"
    } 
    var classes = classNames("flex text-white px-2 py-1 font-normal bg-blue-600 hover:bg-indigo-300 border-2 rounded-full border-indigo-500 items-center cursor-pointer",style)

    const handleSkillClick = () => {
        dispatch(setSkillId(children));
    }

    return(
        <button onClick={handleSkillClick} {...rest} className={classes}>
            <p className="relative right-1 pl-2">{children}</p>
        </button>
    )
}

export default SkillBubble;