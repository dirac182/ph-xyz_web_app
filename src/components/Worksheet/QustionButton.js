import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {FcHighPriority} from "react-icons/fc"
import { setQuestionIndex, setIsFocused } from "../../store";

function QuestionButton({index, ...rest}) {
    const dispatch = useDispatch();
    const workpageData = useSelector(state => state.workpage.workpageData);
    const topicIndex = useSelector(state => state.workpage.topicIndex);
    const questionIndex = useSelector(state => state.workpage.questionIndex); 
    const [isFlagged, setIsFlagged] = useState(false);
    const [focus, setFocus] = useState(false);

    useEffect(()=> {
        if(workpageData[topicIndex][index].isFlagged) {
            setIsFlagged(true);
        } else {
            setIsFlagged(false);
        }
    },[workpageData[topicIndex][questionIndex].isFlagged])

    useEffect(()=> {
        console.log(questionIndex, index)
        if (questionIndex === index){
            setFocus(true);
        }else{
            setFocus(false);
        }
    },[workpageData, questionIndex])

    const handleClick = () => {
        dispatch(setQuestionIndex(index));
        if(questionIndex === index){
            dispatch(setIsFocused(true))
        } else {
            dispatch(setIsFocused(false))
        }
    }

    const classes = workpageData[topicIndex][index].isCorrect === 0
    ? "px-4 py-2 bg-gradient-to-b text-indigo-100 from-red-700 via-red-500 to-red-400 shadow-lg text-xl border-2 rounded-full border-red-500 ring-4 ring-green-500"
    : workpageData[topicIndex][index].isCorrect === 1
    ? "px-4 py-2 bg-gradient-to-b text-indigo-100 from-green-700 via-green-500 to-green-400 shadow-lg text-xl border-2 rounded-full border-green-500 ring-4 ring-green-500"
    : "px-4 py-2 bg-gradient-to-b text-indigo-100 from-indigo-700 via-indigo-500 to-indigo-400 shadow-lg text-xl border-2 rounded-full border-indigo-500 ring-4 ring-green-500" 

    var flagClasses = isFlagged ? "absolute text-red-500 text-lg right-0 top-0" : "hidden";

    const isFocusedClasses = focus 
    ? "ring-4 ring-green-500" : ""

    return(
        <div className="relative">
            <div className="relative flex items-center align-center">
                <div className={flagClasses}><FcHighPriority/></div>
                <button onClick={handleClick} {...rest} className={`${classes},${isFocusedClasses}`}>{index+1}</button>
            </div>
        </div>
    )
}

export default QuestionButton;