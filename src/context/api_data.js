import { createContext, useState} from "react";
import axios from "axios";

const data = {
  "Assignment 1": [
    {
      "text": "Jupiter is one of the planets in our solar system. It is known for its massive size and distinct bands. Many people are curious about its position in terms of size. Which of the following is the largest planet in our solar system?",
      "image": "path/to/image1.jpg",
      "choices": [
        "Earth",
        "Venus",
        "Mars",
        "Jupiter"
      ],
      "correctAnswer": "Jupiter",
      "correctAnswerIndex": [3],
      "skills": ["3.A.1", "4.B.2", "5.C.3", "6.D.1"],
      "solution": [
          "Start by reading about each planet's characteristics.",
          "Consider the fact that Jupiter is often mentioned as the largest planet.",
          "Match this information with the choices provided.",
          "Conclude that the answer is Jupiter."
        ]
      }
     ,
    {
      "text": "A car and a bicycle start from rest and accelerate uniformly over the same straight path. If the car reaches a final speed twice that of the bicycle in the same time, which has a greater acceleration?",
      "image": null,
      "choices": [
        "The Car",
        "The Bike",
        "They are the same.",
      ],
      "correctAnswer": "The Car",
      "correctAnswerIndex": [0],
      "skills": ["3.B.1", "3.B.2", "4.C.3", "5.D.2", "6.A.4"],
      "solution":[
          "Recall key landmarks and characteristics of European countries.",
          "Recognize the Eiffel Tower and other attributes mentioned are from France.",
          "Identify the capital of France from the given options.",
          "Determine that Paris is the correct answer."
        ]
      }
    ,
    {
      "text": "Two blocks are connected by a light rope that goes over a frictionless pulley. Block A, with a mass of 1.0 kg, is placed on a horizontal table surface with kinetic friction coefficient of 0.10 between the block and the table. Block B, with a mass of 2.0 kg, is suspended vertically off the edge of the table. If Block A is released from rest, what will be its acceleration?",
      "image": "path/to/image3.jpg",
      "choices": [
        "9.8 m/s^2", "4.9 m/s^2", "6.2 m/s^2", "3.2 m/s^2", "1.4 m/s^2"
      ],
      "correctAnswer": "6.2 m/s^2",
      "correctAnswerIndex":[2],
      "skills": ["3.A.1", "3.A.1.1", "SP2", "SP 2.2"],
      "solution": [
        "Using Newton's Second Law and considering the forces on the 2 kg block, we get the equation: Tension = \(2 kg \times 9.8 m/s^2 - 2 kg \times a\). For the 3 kg block, the equation is: Tension = \(3 kg \times a\). Equating the two tensions and solving for 'a', we get \(a = 3.9 m/s^2\)."
        ]
      }
    
  ]
}
const DataContext = createContext();

function DataProvider({children}) {
    
    const [questionData,setQuestionData] = useState(data["Assignment 1"])
    const [assignments, setAssignments] = useState([]);
    

    const fetchAssignments = async () => {
      const response = await axios.get("http://localhost:5000/get/assignments");
      console.log(response.data)
      setAssignments(response.data);
  }

    const valuesToShare = {
        questionData,
        assignments,
        fetchAssignments
    }

      return (
        <DataContext.Provider value={valuesToShare}>
            {children}
        </DataContext.Provider>
      )
}
export {DataProvider};
export default DataContext;