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
            "correctAnswerIndex": [3],
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
              "Vestibulum quis lacus ut dui sodales cursus vitae id sapien. In quis nulla ac diam aliquet euismod eget eget tellus. Nam accumsan mattis laoreet. Phasellus ullamcorper risus lorem, et gravida turpis sollicitudin nec.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare semper tristique. Curabitur nisi nisi, condimentum et eros id, accumsan convallis ligula. Praesent et vestibulum libero, eget viverra eros. Vestibulum odio arcu, malesuada vitae vestibulum et, faucibus porta elit. Maecenas odio dui, mattis et diam nec, ullamcorper scelerisque arcu.",
              "Quisque magna ligula, semper sit amet vehicula posuere, tempor sed nulla. Pellentesque porttitor lacus purus. Nam at velit cursus, scelerisque lorem non, varius lectus. ",
              "Shark"
            ],
            "correctAnswer": "Shark",
            "correctAnswerIndex":[3],
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