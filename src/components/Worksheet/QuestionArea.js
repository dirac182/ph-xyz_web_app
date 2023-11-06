import QuestionButton from "./QustionButton.js";
import AnswerChoice from "./AnswerChoice.js";
import FlagButton from "./FlagButton";
import {FiFlag} from "react-icons/fi";
import QuestionIcon from "./QuestionIcon";
import SubmitButton from "./SubmitButton";
import Solution from "./Solution";
import { useSelector, useDispatch } from "react-redux";
import { InlineMath } from 'react-katex';
import { useUpdateStudentAssignmentInfoMutation, resetWorkPageData } from "../../store/index.js";
import { useEffect, useRef } from "react";


function QuestionArea({assignmentId, userId}) {
   const dispatch = useDispatch();
   const [updateStudentAssignmentInfo, { data:assignmentUpdateData, isLoading:assignmentUpdateisLoading }] = useUpdateStudentAssignmentInfoMutation();
   const workpageData = useSelector(state => state.workpage.workpageData);
   const topicIndex = useSelector(state => state.workpage.topicIndex);
   const questionIndex = useSelector(state => state.workpage.questionIndex);
   const grade = useSelector(state => state.workpage.grade);
   const workpageDataRef = useRef(workpageData);
   const gradeRef = useRef(grade);

   useEffect(() => {
      workpageDataRef.current = workpageData;
      gradeRef.current = grade
    }, [workpageData,grade]);

   useEffect(()=> {
         return () => {
            
            const updatedData = {userId, assignmentId, updatedAssignmentInfo:workpageDataRef.current, updatedGrade:gradeRef.current}
            console.log("Updated Data",updatedData)
            updateStudentAssignmentInfo(updatedData)
            }
   },[])



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

     const renderedSolution = workpageData[topicIndex][questionIndex].isCorrect !== null 
     ? <Solution data={workpageData[topicIndex][questionIndex].question.solution} />
     : <div></div>

     const renderedImage = workpageData[topicIndex][questionIndex].question.image
     ? <div className="pb-6"><img src={workpageData[topicIndex][questionIndex].question.image} /></div>
     :<div></div>
     const questionText = workpageData[topicIndex][questionIndex].question.text;

    return (
        <div className="w-full border-x-2 border-dashed border-indigo-500">
            <div className="flex md:pt-10 pt-5 justify-around justify-items-center">
               <div className="flex items-center ">
                  <QuestionIcon />
               </div>
               <div className="flex items-center px-5 min-w-fit">
                  {renderedQuestionButtons}
               </div>
               <div className="flex items-center">
                    <FlagButton ><FiFlag/></FlagButton>
                </div>
            </div>
            <div className="grid pt-5 justify-items-center">
               <div>
                  {renderedImage}
               </div>
               <div className="flex border-2 border-indigo-500 rounded-lg p-5 bg-indigo-100 w-3/5 text-center text-xl">
                  {questionText}
               </div>
                  <div className="grid w-5/6 grid-cols-2 place-content-evenly gap-4 pt-10 justify-items-center">
                     {renderedAnswerChoices}
                  </div>
                  <div className="flex pt-7 justify-center w-2/4">
                     {renderedSolution}
                  </div>           
            </div>
            <div className="flex justify-center pt-3 md:pb-60 pb-10">
                  <SubmitButton />
            </div>    
         </div>
    )
}

export default QuestionArea;