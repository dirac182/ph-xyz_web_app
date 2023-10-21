import SkillBubble from "./SkillBubble.js";
import { useSelector } from "react-redux";
import { useState } from "react";

function SkillArea() {
   const workpageData = useSelector(state => state.workpage.workpageData);
   const topicIndex = useSelector(state => state.workpage.topicIndex);
   const questionIndex = useSelector(state => state.workpage.questionIndex);
   const skillId = useSelector(state => state.workpage.skillId);
   const skillsData = [
      { id: "EU3.A", text: "All forces share certain common characteristics when considered by observers in inertial reference frames." },
      { id: "EU4.A", text: "The acceleration of the center of mass of a system is related to the net force exerted on the system." },
      { id: "EK3.A.1", topic: "Descriptions of motion using quantities such as position, displacement, distance, velocity, speed, and acceleration.\n- Vectorial nature of displacement, velocity, and acceleration.\n- Definitions and relationships between displacement, velocity, and acceleration.\n- Choice of reference frame.\n- Three fundamental forces in nature: gravitational, electroweak, and strong forces.\n- Detection of forces in inertial frames and the idea of net force and acceleration.\n- Applicability of kinematic equations to constant acceleration situations, including circular and projectile motion.\n- Rotational motion descriptors." },
      { id: "EK4.A.1", topic: "Linear motion description of a system using its center of mass quantities.\n- Relevant Equations:\n  - \( v_f = v_i + a \times t \)\n  - \( \Delta x = v_i \times t + \frac{1}{2} a \times t^2 \)\n  - \( v_f^2 = v_i^2 + 2a \times \Delta x \)" },
      { id: "EK4.A.2", topic: "Relationships between acceleration, velocity, and position.\n- Proportionality of acceleration of the center of mass to the net force and its inverse proportionality to the system's mass.\n- Force and acceleration as vectors, with aligned directions.\n- Definitions relating acceleration and velocity to the rate of change of center of mass position and velocity, respectively.\n- Variables \( x \), \( v \), and \( a \) pertain to the center-of-mass quantities." },
      { id: "LO3.A.1.1", text: "Expression of motion in narrative, mathematical, and graphical forms." },
      { id: "LO3.A.1.2", text: "Designing experimental investigations related to motion." },
      { id: "LO3.A.1.3", text: "Analyzing experimental data on motion and representing results in narrative, mathematical, and graphical forms." },
      { id: "LO4.A.1.1", text: "Qualitative and semiquantitative analysis of a two-object system using center of mass representations." },
      { id: "LO4.A.2.1", text: "Making motion predictions based on relationships between acceleration, velocity, and position." },
      { id: "LO4.A.2.3", text: "Creating and analyzing mathematical and graphical models for motion properties related to the center of mass." },
      { id: "SP1", text: "The student can use representations and models to communicate scientific phenomena and solve scientific problems." },
      { id: "SP1.1", text: "The student can create representations and models of natural or manmade phenomena and systems in the domain." },
      { id: "SP1.2", text: "The student can describe representations and models of natural or man-made phenomena and systems in the domain." },
      { id: "SP1.3", text: "The student can refine representations and models of natural or manmade phenomena and systems in the domain." },
      { id: "SP1.4", text: "The student can use representations and models to analyze situations or solve problems qualitatively and quantitatively." },
      { id: "SP1.5", text: "The student can reexpress key elements of natural phenomena across multiple representations in the domain." },
      { id: "SP2", text: "The student can use mathematics appropriately." },
      { id: "SP2.1", text: "The student can justify the selection of a mathematical routine to solve problems." },
      { id: "SP2.2", text: "The student can apply mathematical routines to quantities that describe natural phenomena." },
      { id: "SP2.3", text: "The student can estimate quantities that describe natural phenomena." },
      { id: "SP3", text: "The student can engage in scientific questioning to extend thinking or to guide investigations within the context of the AP course (not assessed on the AP Exam)." },
      { id: "SP3.1", text: "The student can pose scientific questions." },
      { id: "SP3.2", text: "The student can refine scientific questions." },
      { id: "SP3.3", text: "The student can evaluate scientific questions." },
      { id: "SP4", text: "The student can plan and implement data collection strategies in relation to a particular scientific question." },
      { id: "SP4.1", text: "The student can justify the selection of the kind of data needed to answer a particular scientific question." },
      { id: "SP4.2", text: "The student can design a plan for collecting data to answer a particular scientific question." },
      { id: "SP4.3", text: "The student can collect data to answer a particular scientific question." },
      { id: "SP4.4", text: "The student can evaluate sources of data to answer a particular scientific question." },
      { id: "SP5", text: "The student can perform data analysis and evaluation of evidence." },
      { id: "SP5.1", text: "The student can analyze data to identify patterns or relationships." },
      { id: "SP5.2", text: "The student can refine observations and measurements based on data analysis." },
      { id: "SP5.3", text: "The student can evaluate the evidence provided by data sets in relation to a particular scientific question." },
      { id: "SP6", text: "The student can work with scientific explanations and theories." },
      { id: "SP6.1", text: "The student can justify claims with evidence." },
      { id: "SP6.2", text: "The student can construct explanations of phenomena based on evidence produced through scientific practices." },
      { id: "SP6.3", text: "The student can articulate the reasons that scientific explanations and theories are refined or replaced." },
      { id: "SP6.4", text: "The student can make claims and predictions about natural phenomena based on scientific theories and models." },
      { id: "SP6.5", text: "The student can evaluate alternative scientific explanations." },
      { id: "SP7", text: "The student is able to connect and relate knowledge across various scales, concepts, and representations in and across domains." },
      { id: "SP7.1", text: "The student can connect phenomena and models across spatial and temporal scales." },
      { id: "SP7.2", text: "The student can connect concepts in and across domain(s) to generalize or extrapolate in and/or across enduring understandings and/or big ideas." }
      ];
   
   const renderedSkillText = skillId 
   ? skillsData.map(skill=> {
      if (skill.id === skillId){
         return skill.text
      }
   })
   : <div>Click a Skill Bubble to learn more about it!</div>

   const handleSkillClick = () => {
      //
   }

   const renderedSkills = workpageData[topicIndex][questionIndex].question.skills.map((skill,index) => {
        return (
           <div className="grid p-2" key={skill} index={index}>
              <SkillBubble onClick={handleSkillClick}>{skill}</SkillBubble>
           </div>
        )
     })

    return (
        <div className="w-1/5 bg-indigo-200">
            <div className="flex justify-center text-xl pt-10 ">
               <p className="">Skills and Objectives</p>
            </div>
            <div className="skill-area p-4 mx-5 auto-rows-auto">
               {renderedSkills}
            </div>
            <div className="text-xl text-center p-4">
               {renderedSkillText}
            </div>
         </div>
    )
}

export default SkillArea