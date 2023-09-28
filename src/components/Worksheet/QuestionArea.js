import useDataContext from "../../hooks/use-data-context";
import QuestionButton from "./QustionButton.js";
import AnswerChoice from "./AnswerChoice.js";
import { useState } from "react";
import FlagButton from "./FlagButton";
import {FiFlag} from "react-icons/fi";
import Button from "../Misc/Button.js"
import QuestionIcon from "./QuestionIcon";
import SubmitButton from "./SubmitButton";
import Solution from "./Solution";

function QuestionArea({isCorrect,questionIndex,setQuestionIndex,answerData,setAnswerData,questionSubmit}) {
    const { questionData } = useDataContext();
    const [flaggedIndex, setFlaggedIndex] = useState([])

    const handleQuestionButton = (index) => {
        setQuestionIndex(index);
     }

     const handleFlagOn = (index) => {
        const addFlag = [...flaggedIndex, index];
        setFlaggedIndex(addFlag);
        console.log(flaggedIndex)
     }

     const handleFlagOff = (indexToRemove) => {
        const removeFlag = flaggedIndex.filter((index) => {
            return index !== indexToRemove;
        });
        setFlaggedIndex(removeFlag);
        console.log(flaggedIndex)
     }


    const renderedAnswerChoices = isCorrect[questionIndex] === 0    
     ?<Solution qIndex={questionIndex} isCorrect={isCorrect}/>
     : isCorrect[questionIndex] === 1 
     ? <div>Correct</div>
     : questionData[questionIndex].choices.map((choice,answerIndex) => {
      return(
         <div key={choice} className=" content-start items-center px-5">
            <AnswerChoice answerData={answerData} setAnswerData={setAnswerData} questionIndex={questionIndex} answerIndex={answerIndex} >{choice}</AnswerChoice>
         </div>)
     })

     const renderedQuestions = questionData.map((question,index) => {
        var isFlaged = false;
        if(flaggedIndex.includes(index)){
            isFlaged= true;
        }
        return(
           <div key={question.image} className="flex items-center px-5">
              <QuestionButton flag={isFlaged} flaggedIndex={flaggedIndex} onClick={handleQuestionButton} index={index} isCorrect={isCorrect}/>
           </div>
        )
     })
    return (
        <div className="w-3/5 border-x-2 border-dashed border-indigo-500">
            <div className="flex space-x-72 items-center pt-10 pl-20">
               <QuestionIcon qIndex={questionIndex} isCorrect={isCorrect}/>
               <div className="flex items-center px-5">
                  {renderedQuestions}
               </div>
               
            </div>
            <div className="flex justify-end">
                <div className="pr-6">
                    <FlagButton index={questionIndex} flagOn={handleFlagOn} flagOff={handleFlagOff} flaggedIndex={flaggedIndex}><FiFlag/></FlagButton>
                </div>
            </div>
            <div className="grid pt-5 justify-items-center">
               <div className="flex border-2 border-indigo-500 rounded-lg p-5 bg-indigo-100 w-3/5 text-center text-xl">
                  {questionData[questionIndex].text}
               </div>
                  <div className="grid w-5/6 grid-cols-2 place-content-evenly gap-4 pt-10 justify-items-center">
                     {renderedAnswerChoices}
                  </div>           
            </div>
            <div className="flex justify-center pt-10">
                  <SubmitButton isCorrect={isCorrect} onClick={questionSubmit} questionSubmit={questionSubmit} qIndex={questionIndex} />
            </div>    
         </div>
    )
}

export default QuestionArea;