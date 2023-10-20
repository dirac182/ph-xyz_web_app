import {FaQuestion,FaTimes, FaCheck} from "react-icons/fa";
import { useSelector } from "react-redux";

function QuestionIcon() {
    const workpageData = useSelector(state => state.workpage.workpageData);
    const topicIndex = useSelector(state => state.workpage.topicIndex);
    const questionIndex = useSelector(state => state.workpage.questionIndex); 

    const renderedIcon = workpageData[topicIndex][questionIndex].isCorrect === 0    
     ?<div className="text-red-600"><FaTimes/></div>
     : workpageData[topicIndex][questionIndex].isCorrect === 1 
     ? <div className="text-green-600"><FaCheck/></div>
     : <div className="text-indigo-500"><FaQuestion/></div>

    return(
        <div className="text-7xl">
            {renderedIcon}
        </div>
    )
}
export default QuestionIcon