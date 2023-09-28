import { useEffect } from "react"
import {FcHighPriority} from "react-icons/fc"

function QuestionButton({isCorrect, index,onClick,flag,flaggedIndex,...rest}) {
    var flagClasses = flag ? "absolute text-red-500 text-lg right-0 top-0" : "hidden";
    const handleClick = () => {
        onClick(index)
    }

    const classes = isCorrect[index] === 0
    ? "px-4 py-2 bg-gradient-to-b text-indigo-100 from-red-700 via-red-500 to-red-400 shadow-lg text-xl border-2 rounded-full border-red-500 focus:ring focus:ring-green-500"
    : isCorrect[index] === 1
    ? "px-4 py-2 bg-gradient-to-b text-indigo-100 from-green-700 via-green-500 to-green-400 shadow-lg text-xl border-2 rounded-full border-green-500 focus:ring focus:ring-green-500"
    : "px-4 py-2 bg-gradient-to-b text-indigo-100 from-indigo-700 via-indigo-500 to-indigo-400 shadow-lg text-xl border-2 rounded-full border-indigo-500 focus:ring focus:ring-green-500" 

    return(
        <div className="relative">
            <div className="relative flex items-center align-center">
                <div className={flagClasses}><FcHighPriority/></div>
                <button onClick={handleClick} {...rest} className={classes}>{index+1}</button>
            </div>
        </div>
    )
}

export default QuestionButton;