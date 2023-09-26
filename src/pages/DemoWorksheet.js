import useDataContext from "../hooks/use-data-context";
import QuestionButton from "../components/QustionButton";
import {useState} from "react";
import AnswerChoice from "../components/AnswerChoice";
import SkillBubble from "../components/SkillBubble";

function DemoWorksheet() {
   const [questionIndex, setQuestionIndex] = useState(0)
   const { questionData } = useDataContext();
   const [flaggedIndex, setFlaggedIndex] =useState([])

   const handleQuestionButton = (index) => {
      setQuestionIndex(index);
   }

   const renderedQuestions = questionData.map((question,index) => {
      return(
         <div key={question.image} className="flex items-center px-5">
            <QuestionButton onClick={handleQuestionButton} index={index}/>
         </div>
      )
   })

   const renderedAnswerChoices = questionData[questionIndex].choices.map((choice,index) => {
      return(
         <div key={choice} className=" content-start items-center px-5">
            <AnswerChoice>{choice}</AnswerChoice>
         </div>
      )
   })

   const renderedSkills = questionData[questionIndex].skills.map((skill,index) => {
      return (
         <div key={skill}>
            <SkillBubble>{skill}</SkillBubble>
         </div>
      )
   })

    return(
       <div className="flex grid-cols-3">
         <div className="w-1/5 text-center">
            <div className="text-3xl py-4">
               Assignment Name
            </div>
            <div className="text-xl">
               Student Name
            </div>
            <div className="text-lg py-4">
               Due Date: 9/26/2023  8:00 PM
            </div>
            <div className="text-lg ">
               Completed: 1/3
            </div>
            <div className="text-lg py-2">
               Grade: 33%
            </div>
         </div>
         <div className="w-3/5 border-x-2 border-dashed border-indigo-500">
            <div className="flex py-10 justify-center">
               {renderedQuestions}
            </div>
            <div className="grid pt-8 justify-items-center">
               <div className="flex border-2 border-indigo-500 bg-indigo-100 w-6/12 text-center">
                  {questionData[questionIndex].text}
               </div>
               <div className="grid w-5/6 grid-cols-2 place-content-evenly gap-4 pt-10 justify-items-center ">
                  {renderedAnswerChoices}
               </div>
            </div>
         </div>
         <div className="w-1/5">
            <div className="flex justify-center">
               <p className="">Skills and objects</p>
            </div>
            <div className="skill-area px-4 ">
               {renderedSkills}
            </div>
         </div>
         
       </div>
    )   
   }
   
   export default DemoWorksheet;