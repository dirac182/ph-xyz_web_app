import useDataContext from "../hooks/use-data-context";
import {useState, useEffect} from "react";
import SkillArea from "../components/Worksheet/SkillArea";
import QuestionArea from "../components/Worksheet/QuestionArea";
import AssignmentInfo from "../components/Worksheet/AssignmentInfo";
import { useSelector } from "react-redux";

function DemoWorksheet() {
  const questionSet = useSelector(state => state.workpage.questionArray);
   const [questionIndex, setQuestionIndex] = useState(0)
   const { questionData } = useDataContext();
   const [answerData, setAnswerData] = useState(Array.apply(null, Array(questionData.length)).map(function () {}))
   const [isCorrect, setIsCorrect] = useState(Array.apply(null, Array(questionData.length)).map(function () {}))

  const handleAnswerChange = (qIndex,aIndex) => {
    const updatedAnswers = [...answerData];
    updatedAnswers[qIndex] = aIndex;
    setAnswerData(updatedAnswers)
  }
  
// This take the submitted answer choice and updates the isCorrect State. The index is the question, the value: null if unanswered, 1 if correct, 0 if wrong. 
  const handleSubmitQuestion = () => {
    const answerKey = [];
    questionData.forEach((question)=> {
      answerKey.push(question.correctAnswerIndex[0]);
    })
    const correctAnswer = answerKey[questionIndex];
    const answer = answerData[questionIndex];

    if (answer === correctAnswer){
      const updateCorrect = [...isCorrect];
      updateCorrect[questionIndex] = 1
      setIsCorrect(updateCorrect);
    } else {
      const updateWrong = [...isCorrect];
      updateWrong[questionIndex] = 0
      setIsCorrect(updateWrong);
    }
    console.log(`You are submiting question: ${questionIndex+1} and your answer index is ${answer}. The correct answer is index ${correctAnswer}`)
  }

   return(
       <div className="flex grid-cols-3 h-screen">
         <AssignmentInfo isCorrect={isCorrect} />
         <QuestionArea isCorrect={isCorrect} questionSubmit={handleSubmitQuestion} answerData={answerData} setAnswerData={handleAnswerChange} questionIndex={questionIndex} setQuestionIndex={setQuestionIndex}/>
         <SkillArea questionIndex={questionIndex} />
       </div>
    )   
   }
   
   export default DemoWorksheet;