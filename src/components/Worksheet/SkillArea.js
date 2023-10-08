import useDataContext from "../../hooks/use-data-context.js";
import SkillBubble from "./SkillBubble.js";

function SkillArea({questionIndex}) {
    const { questionData } = useDataContext();

    const renderedSkills = questionData[questionIndex].skills.map((skill,index) => {
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