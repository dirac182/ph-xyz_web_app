import UnitDropdown from "../components/UnitDropdown";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

function DemoSetup() {
   const [selectedTopics, setSelectedTopics] = useState([])

   const handleAddTopic = (topic) => {
      const updatedTopics = [...selectedTopics,topic];
      setSelectedTopics(updatedTopics);
   }

   const handleRemoveTopic = (topicIdToRemove) => {
      const updatedTopics = selectedTopics.filter((topic) => {
         return topic.id !== topicIdToRemove
      })
      setSelectedTopics(updatedTopics);
      console.log(selectedTopics)
   } 

   const unitOneTopics = [{id:1.1, topic:"Position, Velocity, & Acceleration"},{id:1.2,topic:"Representations of Motion"}];
   const unitTwoTopics = [{id:2.1, topic:"Systems"},{id:2.2,topic:"The Gravitational Field"},{id:2.3, topic:"Contact Forces"},{id:2.4,topic:"Newton's First Law"},{id:2.5, topic:"Newton's Third Law and free-body diagrams"},{id:2.6,topic:"Newton's Second Law"},{id:2.7, topic:"Applications of Newton's Second Law"}];
   const unitThreeTopics = [{id:3.1, topic:"Vector Fields"},{id:3.2,topic:"Fundamental Forces"},{id:3.3, topic:"Gravitational and Electric Forces"},{id:3.4,topic:"Gravitational field/acceleration due to gravity on different planets"},{id:3.5, topic:"Inertial vs. gravitational mass"},{id:3.6,topic:"Centripetal acceleration vs. centripetal force"},{id:3.7, topic:"Free-body diagrams for objects in uniform circular motion"}];
   const unitFourTopics = [{id:4.1, topic:"Open and Closed Systems: Energy"},{id:4.2,topic:"Work and Mechanical Energy"},{id:4.3, topic:"Conservation of Energy, the Work–Energy Principle, and Power"}];
   const unitFiveTopics = [{id:5.1, topic:"Momentum and Impulse"},{id:5.2,topic:"Representations of Changes in Momentum"},{id:5.3, topic:"Open and Closed Systems: Momentum"},{id:5.4,topic:"Conservation of Linear Momentum"}];
   const unitSixTopics = [{id:6.1, topic:"Period of Simple Harmonic Oscillators"},{id:6.2,topic:"Energy of a Simple Harmonic Oscillator"}];
   const unitSevenTopics = [{id:7.1, topic:"Rotational Kinematics"},{id:7.2,topic:"Torque and Angular Acceleration"},{id:7.3, topic:"Angular Momentum and Torque"},{id:7.4,topic:"Conservation of Angular Momentum"}];

   return(
       <div className="landing-page-container bg-indigo-500  h-screen w-full pr-6">
         <div className="landing-page-sidebar bg-blue-300 h-full w-full">
            <Sidebar onDelete={handleRemoveTopic} addedTopics={selectedTopics}/>
         </div>
         <div className="landing-page-title bg-green-300">
            <p className="text-3xl">Create new worksheet here.</p>
         </div>
         <div className="landing-page-body bg-orange-300">
            <UnitDropdown checkedBoxes = {selectedTopics} onAdd={handleAddTopic} onDelete={handleRemoveTopic} topics={unitOneTopics}>Unit 1: Kinematics</UnitDropdown>            
            <UnitDropdown checkedBoxes = {selectedTopics} onAdd={handleAddTopic} onDelete={handleRemoveTopic} topics={unitTwoTopics}>Unit 2: Dynamics</UnitDropdown>            
            <UnitDropdown checkedBoxes = {selectedTopics} onAdd={handleAddTopic} onDelete={handleRemoveTopic} topics={unitThreeTopics}>Unit 3: Circular Motion and Gravitation</UnitDropdown>            
            <UnitDropdown checkedBoxes = {selectedTopics} onAdd={handleAddTopic} onDelete={handleRemoveTopic} topics={unitFourTopics}>Unit 4: Energy</UnitDropdown>            
            <UnitDropdown checkedBoxes = {selectedTopics} onAdd={handleAddTopic} onDelete={handleRemoveTopic} topics={unitFiveTopics}>Unit 5: Momentum</UnitDropdown>            
            <UnitDropdown checkedBoxes = {selectedTopics} onAdd={handleAddTopic} onDelete={handleRemoveTopic} topics={unitSixTopics}>Unit 6: Simple Harmonic Motion</UnitDropdown>            
            <UnitDropdown checkedBoxes = {selectedTopics} onAdd={handleAddTopic} onDelete={handleRemoveTopic} topics={unitSevenTopics}>Unit 7: Torque and Rotational Motion</UnitDropdown>
         </div>
       </div>
    )   
   }
   
   export default DemoSetup;