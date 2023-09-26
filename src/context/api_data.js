import { createContext, useState} from "react";

const DataContext = createContext();

function DataProvider({children}) {
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
            "skills": ["3.A.1", "4.B.2", "5.C.3", "6.D.1"],
            "solution": {
              "steps": [
                {"step1": "Start by reading about each planet's characteristics."},
                {"step2": "Consider the fact that Jupiter is often mentioned as the largest planet."},
                {"step3": "Match this information with the choices provided."},
                {"step4": "Conclude that the answer is Jupiter."}
              ]
            }
          },
          {
            "text": "Europe is a continent rich in history and culture. Each country in Europe has its distinct identity. France, for instance, is known for its Eiffel Tower, cuisine, and art. What is the capital of France?",
            "image": null,
            "choices": [
              "Berlin",
              "Madrid",
              "Rome",
              "Paris"
            ],
            "correctAnswer": "Paris",
            "skills": ["3.B.1", "3.B.2", "4.C.3", "5.D.2", "6.A.4"],
            "solution": {
              "steps": [
                {"step1": "Recall key landmarks and characteristics of European countries."},
                {"step2": "Recognize the Eiffel Tower and other attributes mentioned are from France."},
                {"step3": "Identify the capital of France from the given options."},
                {"step4": "Determine that Paris is the correct answer."}
              ]
            }
          },
          {
            "text": "The animal kingdom is vast and diverse. Different species belong to different classifications. Mammals are one such category, known for certain characteristics. Which of the following is not a mammal?",
            "image": "path/to/image3.jpg",
            "choices": [
              "Whale",
              "Dolphin",
              "Shark",
              "Dog"
            ],
            "correctAnswer": "Shark",
            "skills": ["3.C.1", "3.C.2", "4.A.3", "5.B.1"],
            "solution": {
              "steps": [
                {"step1": "Understand the characteristics of mammals."},
                {"step2": "Know that mammals are typically warm-blooded and give live birth."},
                {"step3": "Realize that sharks lay eggs and are cold-blooded."},
                {"step4": "Conclude that sharks are not mammals."}
              ]
            }
          }
        ]
      }
    const [questionData,setQuestionData] = useState(data["Assignment 1"])
    
    const valuesToShare = {
        questionData,
    }

      return (
        <DataContext.Provider value={valuesToShare}>
            {children}
        </DataContext.Provider>
      )
}
export {DataProvider};
export default DataContext;