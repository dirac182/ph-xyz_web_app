import {useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTopicIndex } from "../../store";

function AssignmentInfo() {
   const dispatch = useDispatch();
   const questionSet = useSelector(state => state.workpage.questionSet);
   const workpageData = useSelector(state => state.workpage.workpageData);
   const aName = useSelector(state => state.assignment.assignmentName);
   const dueDate = useSelector(state => state.assignment.dueDate);
   const timeHr = useSelector(state => state.assignment.timeHr);
   const timeMin = useSelector(state => state.assignment.timeMin);
   const isPm = useSelector(state => state.assignment.isPm);
   const [selectedSubjectIndex, setSelectedSubjectIndex] = useState(0);
   const isPmText = isPm ? "PM" : "AM"
   const [totalQuestions,setTotalQuestions] = useState(0);
   const [answeredQuestions,setAnsweredQuestions] = useState(0)
   const [correctQuestions, setCorrectQuestions] = useState(0);

   const renderedSubjects = questionSet.map((subject,index) => {
      const amountCompleted = 0;

      const handleQuestionSetChange = () => {
         dispatch(setTopicIndex(index));
         setSelectedSubjectIndex(index);
      }
      
      const classes = selectedSubjectIndex === index ? "flex justify-between border-y-2 border-indigo-200 bg-indigo-800 text-white p-4 cursor-pointer hover:bg-indigo-800" : "flex justify-between border-y-2 border-indigo-200 bg-indigo-500 text-white p-4 cursor-pointer hover:bg-indigo-800"
      return (
         <div onClick={handleQuestionSetChange} className={classes} key={subject._id}>
            <div>
               {subject.topic}
            </div>
            <div>
               {subject.QIDArray.length}
            </div>
         </div>
      )
   })
   
   useEffect(()=> {
      setTotalQuestions(workpageData.flat().length);
      const correctCount = workpageData.flat().reduce((count, questionObj) => {
         return count + (questionObj.isCorrect === 1 ? 1 : 0);
         }, 0);
      const answeredCount = workpageData.flat().reduce((count, questionObj) => {
         return count + (questionObj.isCorrect !== null ? 1 : 0);
     }, 0);
      setCorrectQuestions(correctCount)
      setAnsweredQuestions(answeredCount)
   },[workpageData])

    return (
        <div className="w-1/5 pt-10 text-center bg-indigo-200">
            <div className="text-3xl py-4">
               {aName}
            </div>
            <div className="text-xl">
               Student Name
            </div>
            <div className="text-lg py-4">
               Due Date: {dueDate}  {timeHr}:{timeMin} {isPmText}
            </div>
            <div className="text-lg ">
               Completed: {answeredQuestions}/{totalQuestions}
            </div>
            <div className="text-lg py-2 pb-10">
               Grade: {Math.floor((correctQuestions/totalQuestions)*100)}%
            </div>
            <div className="text-xl ">
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