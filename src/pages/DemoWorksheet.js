import useDataContext from "../hooks/use-data-context";
import {useState, useEffect} from "react";
import SkillArea from "../components/Worksheet/SkillArea";
import QuestionArea from "../components/Worksheet/QuestionArea";
import AssignmentInfo from "../components/Worksheet/AssignmentInfo";

function DemoWorksheet() {
   const [questionIndex, setQuestionIndex] = useState(0)
   const { questionData } = useDataContext();
   const [answerData, setAnswerData] = useState(Array.apply(null, Array(questionData.length)).map(function () {}))

  const handleAnswerChange = (qIndex,aIndex) => {
    const updatedAnswers = [...answerData];
    updatedAnswers[qIndex] = aIndex;
    setAnswerData(updatedAnswers)
  }
  
  const handleSubmitQuestion = () => {
    const answerKey = [];
    questionData.forEach((question)=> {
      answerKey.push(question.correctAnswerIndex[0]);
    })
    const correctAnswer = answerKey[questionIndex];
    console.log(answerKey)
    const answer = answerData[questionIndex];
    console.log(`You are submiting question: ${questionIndex+1} and your answer index is ${answer}. The correct answer is ${correctAnswer}`)
  }

   return(
       <div className="flex grid-cols-3">
         <AssignmentInfo />
         <QuestionArea questionSubmit={handleSubmitQuestion} answerData={answerData} setAnswerData={handleAnswerChange} questionIndex={questionIndex} setQuestionIndex={setQuestionIndex}/>
         <SkillArea questionIndex={questionIndex} />
       </div>
    )   
   }
   
   export default DemoWorksheet;