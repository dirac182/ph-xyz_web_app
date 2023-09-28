import {FaQuestion,FaTimes, FaCheck} from "react-icons/fa";

function QuestionIcon({qIndex,isCorrect}) {

    const renderedIcon = isCorrect[qIndex] === 0    
     ?<div className="text-red-600"><FaTimes/></div>
     : isCorrect[qIndex] === 1 
     ? <div className="text-green-600"><FaCheck/></div>
     : <div className="text-indigo-500"><FaQuestion/></div>

    return(
        <div className="text-7xl">
            {renderedIcon}
        </div>
    )
}
export default QuestionIcon