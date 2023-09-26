import useDataContext from "../hooks/use-data-context";

function DemoWorksheet() {
   const { questionData } = useDataContext();

   const renderedQuestions = questionData.map((question,index) => {
      console.log(question)
      return(
         <div>
            {question.text}
         </div>
      )
   })
    return(
       <div>
         {renderedQuestions}
       </div>
    )   
   }
   
   export default DemoWorksheet;