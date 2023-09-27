import useDataContext from "../hooks/use-data-context";
import {useState} from "react";
import SkillArea from "../components/Worksheet/SkillArea";
import QuestionArea from "../components/Worksheet/QuestionArea";
import AssignmentInfo from "../components/Worksheet/AssignmentInfo";

function DemoWorksheet() {
   const [questionIndex, setQuestionIndex] = useState(0)
   const { questionData } = useDataContext();

   return(
       <div className="flex grid-cols-3">
         <AssignmentInfo />
         <QuestionArea questionIndex={questionIndex} setQuestionIndex={setQuestionIndex}/>
         <SkillArea questionIndex={questionIndex} />
       </div>
    )   
   }
   
   export default DemoWorksheet;