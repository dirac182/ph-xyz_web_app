import QuestionButton from "./QustionButton.js";
import AnswerChoice from "./AnswerChoice.js";
import FlagButton from "./FlagButton";
import {FiFlag} from "react-icons/fi";
import QuestionIcon from "./QuestionIcon";
import SubmitButton from "./SubmitButton";
import Solution from "./Solution";
import { useSelector, useDispatch } from "react-redux";

function QuestionArea() {
   const dispatch = useDispatch();
   const workpageData = useSelector(state => state.workpage.workpageData);
   const topicIndex = useSelector(state => state.workpage.topicIndex);
   const questionIndex = useSelector(state => state.workpage.questionIndex); 

    const renderedAnswerChoices = workpageData[topicIndex][questionIndex].isCorrect !== null    
     ? workpageData[topicIndex][questionIndex].question.choices.map((choice,answerIndex) => {
      return(
         <div key={choice} className=" content-start items-center px-5">
            <AnswerChoice isAnswered={true} answerIndex={answerIndex} >{choice}</AnswerChoice>
         </div>)
     })
     : workpageData[topicIndex][questionIndex].question.choices.map((choice,answerIndex) => {
      return(
         <div key={choice} className=" content-start items-center px-5">
            <AnswerChoice isAnswered={false} answerIndex={answerIndex} >{choice}</AnswerChoice>
         </div>)
     })

     const renderedQuestionButtons = workpageData[topicIndex].map((question,index) => {
        return(
           <div key={question.question._id} className="flex items-center px-5">
              <QuestionButton index={index}/>
           </div>
        )
     })
    return (
        <div className="w-3/5 border-x-2 border-dashed border-indigo-500">
            <div className="flex space-x-72 items-center pt-10 pl-20">
               <QuestionIcon />
               <div className="flex items-center px-5">
                  {renderedQuestionButtons}
               </div>
               
            </div>
            <div className="flex justify-end">
                <div className="pr-6">
                    <FlagButton ><FiFlag/></FlagButton>
                </div>
            </div>
            <div className="grid pt-5 justify-items-center">
               <div className="flex border-2 border-indigo-500 rounded-lg p-5 bg-indigo-100 w-3/5 text-center text-xl">
                  {workpageData[topicIndex][questionIndex].question.text}
               </div>
                  <div className="grid w-5/6 grid-cols-2 place-content-evenly gap-4 pt-10 justify-items-center">
                     {renderedAnswerChoices}
                  </div>           
            </div>
            <div className="flex justify-center pt-10">
                  <SubmitButton />
            </div>    
         </div>
    )
}

export default QuestionArea;