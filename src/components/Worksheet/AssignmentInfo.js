import { render } from "@testing-library/react";
import {useState, useEffect } from "react";
import { useSelector } from "react-redux";

function AssignmentInfo({isCorrect }) {
   const questionSet = useSelector(state => state.workpage.questionArray);
   const [grade, setGrade] = useState(0)
   const [completedQuestions,setCompletedQuestions] = useState(0);

   var correctAnswers = 0;
   const amount = isCorrect.length;
   
   const renderedSubjects = questionSet.map((subject) => {
      const handleClick = () => {
         //
      }
      return (
         <div onClick={handleClick} className="flex justify-between  border-y-2 border-indigo-200 bg-indigo-500 text-white p-4 cursor-pointer hover:bg-indigo-800" key={subject._id}>
            <div>
               {subject.topic}
            </div>
            <div>
               {subject.QIDArray.length}
            </div>
         </div>
      )
   })

   useEffect(() => {
      console.log("qSet in aInfo",questionSet)
      var count = 0;
      isCorrect.forEach((q) => {
         if (q === undefined){
            count += 1;
         } else {
            correctAnswers += q;
         }
      })
      setGrade(Math.round((correctAnswers/amount)*100))
      setCompletedQuestions(isCorrect.length-count)
   },[isCorrect])
   

    return (
        <div className="w-1/5 pt-10 text-center bg-indigo-200">
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
               Completed: {completedQuestions}
            </div>
            <div className="text-lg py-2">
               Grade: {grade}%
            </div>
            <div className="text-xl py-4">
                  Problem Set
            </div>
            <div className="flex px-4 justify-between">
               <div>Subject</div>
               <div># of Questions</div>
            </div>
            <div className="py-2">
               {renderedSubjects}
            </div>
         </div>
    )
}

export default AssignmentInfo;