import {useState, useEffect } from "react";

function AssignmentInfo({isCorrect }) {
   const [grade, setGrade] = useState(0)
   const [completedQuestions,setCompletedQuestions] = useState(0);

   var correctAnswers = 0;
   const amount = isCorrect.length;
   

   useEffect(() => {
      var count = 0;
      console.log(isCorrect);
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
        <div className="w-1/5 pt-10 text-center">
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
         </div>
    )
}

export default AssignmentInfo;