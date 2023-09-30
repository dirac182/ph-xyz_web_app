import UnitDropdown from "../components/Setup/UnitDropdown";
import { useState, useReducer, useEffect } from "react";
import Sidebar from "../components/Setup/Sidebar";
import Searchbar from "../components/Setup/Seachbar";
import Button from "../components/Misc/Button";
import SortDropdown from "../components/Setup/SortDropdown";
import axios from "axios";

function DemoSetup() {
   const [selectedTopics, setSelectedTopics] = useState([])
   const [expandButtonText, setExpandButtonText] = useState("Expand All");
   const [expandBool, setExpandBool] = useState(false);
   const [dropdownSelection, setDropdownSelection] = useState(null)

//Gonna try useReducer to manage selected topics and amount of questions per topic
//TopicList will hold each topic, questions will hold the amount of questions each topic has corresponding to the index.

   const reducer = (state, action) => {
      //This takes topic id and topic
      if (action.type === "add-topic"){
         console.log("added-topic",action.payload)
         return (
            [...state, {"id": action.payload.id, "topic": action.payload.topic, "questions": 1}]
         )
         //this takes a topic id
      } else if (action.type === "delete-topic") {
         console.log("deleted-topic",action.payload)
         return(
            state.filter((topic) => {
               return topic.id !== action.payload
            })
         )
         //This takes topic id and amount of questions
      } else if (action.type === "change-questions"){
         console.log("changed-question amount",action.payload)
         return(
            state.map((topic) => {
               return(
               topic.id === action.payload.id ? {...topic, questions : action.payload.amount} : topic
               )
            })
         )
      } else {
         return state;
      }
   } 

   const [tqPair,dispatch] = useReducer(reducer, [])

   // useEffect(()=> {
   //    console.log(topics);
   // },[topics])

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
   
   const handleCreatePage = async (name,userID,tqPair,quiz,timeLimit,dueDate,dueTime,status) => {
      const response = await axios.post("http://localhost:5000/createAssignment", {
         name,
         userID,
         tqPair,
         quiz,
         timeLimit,
         dueDate,
         dueTime,
         status
      } );
      console.log(name,userID,tqPair,quiz,timeLimit,dueDate,dueTime,status)
      console.log(response.data)
   }

   const handleExpandButton = (event) => {
      event.preventDefault();
      if(expandButtonText === "Expand All"){
         setExpandButtonText("Collapse All");
         setExpandBool(true);
     } else if (expandButtonText ==="Collapse All") {
         setExpandButtonText("Expand All");
         setExpandBool(false);
     }
   }

   const handleDropdownSelect = (option) =>{
      setDropdownSelection(option);
  }

   const unitOneTopics = [{id:1.1, topic:"Position, Velocity, & Acceleration"},{id:1.2,topic:"Representations of Motion"}];
   const unitTwoTopics = [{id:2.1, topic:"Systems"},{id:2.2,topic:"The Gravitational Field"},{id:2.3, topic:"Contact Forces"},{id:2.4,topic:"Newton's First Law"},{id:2.5, topic:"Newton's Third Law and free-body diagrams"},{id:2.6,topic:"Newton's Second Law"},{id:2.7, topic:"Applications of Newton's Second Law"}];
   const unitThreeTopics = [{id:3.1, topic:"Vector Fields"},{id:3.2,topic:"Fundamental Forces"},{id:3.3, topic:"Gravitational and Electric Forces"},{id:3.4,topic:"Gravitational field/acceleration due to gravity on different planets"},{id:3.5, topic:"Inertial vs. gravitational mass"},{id:3.6,topic:"Centripetal acceleration vs. centripetal force"},{id:3.7, topic:"Free-body diagrams for objects in uniform circular motion"}];
   const unitFourTopics = [{id:4.1, topic:"Open and Closed Systems: Energy"},{id:4.2,topic:"Work and Mechanical Energy"},{id:4.3, topic:"Conservation of Energy, the Work–Energy Principle, and Power"}];
   const unitFiveTopics = [{id:5.1, topic:"Momentum and Impulse"},{id:5.2,topic:"Representations of Changes in Momentum"},{id:5.3, topic:"Open and Closed Systems: Momentum"},{id:5.4,topic:"Conservation of Linear Momentum"}];
   const unitSixTopics = [{id:6.1, topic:"Period of Simple Harmonic Oscillators"},{id:6.2,topic:"Energy of a Simple Harmonic Oscillator"}];
   const unitSevenTopics = [{id:7.1, topic:"Rotational Kinematics"},{id:7.2,topic:"Torque and Angular Acceleration"},{id:7.3, topic:"Angular Momentum and Torque"},{id:7.4,topic:"Conservation of Angular Momentum"}];

   const dropdownOptions = [
      {label:"AP Curriculum", value:"red"},
   ];

   return(
       <div className="landing-page-container h-screen w-full pr-6 bg-indigo-200">
         <div className="landing-page-sidebar h-full w-full">
            <Sidebar tqPair={tqPair} dispatch={dispatch} onCreate={handleCreatePage} onDelete={handleRemoveTopic} addedTopics={selectedTopics}/>
         </div>
         
         <div>
            <div className="flex px-4 pt-10 justify-between landing-page-title">
               <Searchbar />
               <Button onClick={handleExpandButton} primary expand >{expandButtonText}</Button>
               <span className="flex items-center">
                  <label className="pr-3">Sort By: </label>
                  <SortDropdown options={dropdownOptions} value={dropdownSelection} onChange={handleDropdownSelect} />
               </span>
            </div>
         <div className="landing-page-body">
            <UnitDropdown dispatch={dispatch} expand={expandBool} icon="GiCatapult" checkedBoxes = {selectedTopics} onAdd={handleAddTopic} onDelete={handleRemoveTopic} topics={unitOneTopics}>Unit 1: Kinematics</UnitDropdown>            
            <UnitDropdown dispatch={dispatch} expand={expandBool} icon="GiUnbalanced" checkedBoxes = {selectedTopics} onAdd={handleAddTopic} onDelete={handleRemoveTopic} topics={unitTwoTopics}>Unit 2: Dynamics</UnitDropdown>            
            <UnitDropdown dispatch={dispatch} expand={expandBool} icon="GiMoonOrbit" checkedBoxes = {selectedTopics} onAdd={handleAddTopic} onDelete={handleRemoveTopic} topics={unitThreeTopics}>Unit 3: Circular Motion and Gravitation</UnitDropdown>            
            <UnitDropdown dispatch={dispatch} expand={expandBool} icon="MdRocketLaunch" checkedBoxes = {selectedTopics} onAdd={handleAddTopic} onDelete={handleRemoveTopic} topics={unitFourTopics}>Unit 4: Energy</UnitDropdown>            
            <UnitDropdown dispatch={dispatch} expand={expandBool} icon="GiPendulumSwing" checkedBoxes = {selectedTopics} onAdd={handleAddTopic} onDelete={handleRemoveTopic} topics={unitFiveTopics}>Unit 5: Momentum</UnitDropdown>            
            <UnitDropdown dispatch={dispatch} expand={expandBool} icon="PiWaveSineDuotone" checkedBoxes = {selectedTopics} onAdd={handleAddTopic} onDelete={handleRemoveTopic} topics={unitSixTopics}>Unit 6: Simple Harmonic Motion</UnitDropdown>            
            <UnitDropdown dispatch={dispatch} expand={expandBool} icon="BsTornado" checkedBoxes = {selectedTopics} onAdd={handleAddTopic} onDelete={handleRemoveTopic} topics={unitSevenTopics}>Unit 7: Torque and Rotational Motion</UnitDropdown>
         </div>
         </div>
       </div>
    )   
   }
   
   export default DemoSetup;