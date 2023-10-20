import { useEffect, useRef, useState } from "react";
import { setSelectedAnswer } from "../../store";
import { useDispatch, useSelector } from "react-redux";


function AnswerChoice({children,answerIndex,isAnswered,...rest}) {
    const dispatch = useDispatch();
    const workpageData = useSelector(state => state.workpage.workpageData);
    const topicIndex = useSelector(state => state.workpage.topicIndex);
    const questionIndex = useSelector(state => state.workpage.questionIndex);
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        if(workpageData[topicIndex][questionIndex].selectedAnswerIndex === null || workpageData[topicIndex][questionIndex].selectedAnswerIndex !== answerIndex ){
            setIsChecked(false);
        } else {
            setIsChecked(true);
        }
       },[workpageData])

    const handleChange = () => {
        setIsChecked(!isChecked)
        dispatch(setSelectedAnswer(answerIndex));
    }

    const nonAnsweredClasses = isChecked ? "bg-indigo-300 flex p-3 font-normal border-2 border-indigo-500 items-center cursor-pointer" : "flex p-3 font-normal bg-gray-50 hover:bg-indigo-300 border-2 border-indigo-500 items-center cursor-pointer"

    const answeredClasses = answerIndex !== workpageData[topicIndex][questionIndex].question.correctChoiceIndex ? "flex p-3 font-normal border-2 border-indigo-500 items-center bg-red-200" : "flex p-3 font-normal border-2 border-indigo-500 items-center bg-green-200"

    const renderedChoice = isAnswered 
    ? 
    (<div {...rest} className={answeredClasses}>
        <p className="pl-2" >{children}</p>
    </div>)
    :
    (<div {...rest} onClick={handleChange} className={nonAnsweredClasses}>
        <input onChange={handleChange} checked={isChecked} type="checkbox"/>
        <p className="pl-2" >{children}</p>
    </div>);

    
    return(
        <div>
            {renderedChoice}
        </div>
        
    )
}

export default AnswerChoice;