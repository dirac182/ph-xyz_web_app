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
    const updatedAnswers = [...questionData];
    updatedAnswers[qIndex] = aIndex;
    setAnswerData(updatedAnswers)
  } 

   useEffect(() => {
    console.log(answerData);
   },[answerData])

   return(
       <div className="flex grid-cols-3">
         <AssignmentInfo />
         <QuestionArea answerData={answerData} setAnswerData={handleAnswerChange} questionIndex={questionIndex} setQuestionIndex={setQuestionIndex}/>
         <SkillArea questionIndex={questionIndex} />
       </div>
    )   
   }
   
   export default DemoWorksheet;