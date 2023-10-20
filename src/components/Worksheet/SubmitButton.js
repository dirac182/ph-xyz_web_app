import { useSelector, useDispatch } from "react-redux";
import { setIsCorrect } from "../../store";

function SubmitButton() {
    const dispatch = useDispatch();
    const workpageData = useSelector(state => state.workpage.workpageData);
    const topicIndex = useSelector(state => state.workpage.topicIndex);
    const questionIndex = useSelector(state => state.workpage.questionIndex); 

    const handleSubmitAnswer = () => {
        if (workpageData[topicIndex][questionIndex].selectedAnswerIndex === null){
            return
        } else if (workpageData[topicIndex][questionIndex].selectedAnswerIndex === workpageData[topicIndex][questionIndex].question.correctChoiceIndex){
            dispatch(setIsCorrect(1))
        } else {
            dispatch(setIsCorrect(0))
        }
    }

    const renderedButton = workpageData[topicIndex][questionIndex].isCorrect === 0    
    ?<div>Incorrect!</div>
    : workpageData[topicIndex][questionIndex].isCorrect === 1 
    ? <div className="">Correct!</div>
    : <div>
        <button onClick={handleSubmitAnswer} className={"flex items-center justify-center px-3 py-1.5 border border-indigo-500 bg-indigo-500 text-white rounded-full shadow-lg shadow-indigo-500/40 hover:bg-indigo-700"}>Submit Answer</button>
    </div>
 
    return (
        <div>
            {renderedButton}
        </div>
    )
}

export default SubmitButton;


// <Button onClick={questionSubmit} qIndex={qIndex} primary rounded submit>Submit Answer</Button>