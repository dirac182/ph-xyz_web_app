import SkillBubble from "./SkillBubble.js";
import { useSelector } from "react-redux";

function SkillArea() {
   const workpageData = useSelector(state => state.workpage.workpageData);
   const topicIndex = useSelector(state => state.workpage.topicIndex);
   const questionIndex = useSelector(state => state.workpage.questionIndex); 

    const renderedSkills = workpageData[topicIndex][questionIndex].question.skills.map((skill,index) => {
        return (
           <div key={skill}>
              <SkillBubble>{skill}</SkillBubble>
           </div>
        )
     })

    return (
        <div className="w-1/5 bg-indigo-200">
            <div className="flex justify-center text-xl pt-10 ">
               <p className="">Skills and objects</p>
            </div>
            <div className="skill-area px-4 ">
               {renderedSkills}
            </div>
         </div>
    )
}

export default SkillArea