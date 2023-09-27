import useDataContext from "../../hooks/use-data-context";
import QuestionButton from "./QustionButton.js";
import AnswerChoice from "./AnswerChoice.js";
import { useState } from "react";
import FlagButton from "./FlagButton";
import {FiFlag} from "react-icons/fi"

function QuestionArea({questionIndex,setQuestionIndex}) {
    const { questionData } = useDataContext();
    const [flaggedIndex, setFlaggedIndex] =useState([1])

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

    const renderedAnswerChoices = questionData[questionIndex].choices.map((choice,index) => {
        var isFlaged = false;
        if(flaggedIndex.includes(index)){
            console.log("flagged index: ", index)
            isFlaged= true;
        }
        return(
           <div key={choice} className=" content-start items-center px-5">
              <AnswerChoice flag={isFlaged}>{choice}</AnswerChoice>
           </div>
        )
     })

     const renderedQuestions = questionData.map((question,index) => {
        return(
           <div key={question.image} className="flex items-center px-5">
              <QuestionButton flaggedIndex={flaggedIndex} onClick={handleQuestionButton} index={index}/>
           </div>
        )
     })
    return (
        <div className="w-3/5 border-x-2 border-dashed border-indigo-500">
            <div className="flex py-10 justify-center">
               {renderedQuestions}
            </div>
            <div className="flex justify-end">
                <div className="pr-6">
                    <FlagButton index={questionIndex} flagOn={handleFlagOn} flagOff={handleFlagOff} flaggedIndex={flaggedIndex}><FiFlag/></FlagButton>
                </div>
            </div>
            <div className="grid pt-5 justify-items-center">
               <div className="flex border-2 border-indigo-500 rounded-lg p-5 bg-indigo-100 w-3/5 text-center">
                  {questionData[questionIndex].text}
               </div>
               <div className="grid w-5/6 grid-cols-2 place-content-evenly gap-4 pt-10 justify-items-center ">
                  {renderedAnswerChoices}
               </div>
            </div>
         </div>
    )
}

export default QuestionArea;