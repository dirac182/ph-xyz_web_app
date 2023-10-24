import useDataContext from "../hooks/use-data-context";
import {useState, useEffect} from "react";
import SkillArea from "../components/Worksheet/SkillArea";
import QuestionArea from "../components/Worksheet/QuestionArea";
import AssignmentInfo from "../components/Worksheet/AssignmentInfo";
import { useFetchAssignmentByIdQuery, useFetchQuestionSetByIdsQuery, setWorkpageData } from "../store";
import { useSelector,useDispatch } from "react-redux";

function DemoWorksheet() {
  const dispatch = useDispatch();
  // const {Adata,Aerror,isFetchingA} = useFetchQuestionSetByIdsQuery(qIdsArray);
  const [dataFetched, setDataFetched] = useState(false);
  const questionSet = useSelector(state => state.workpage.questionSet);
  const workpageData = useSelector(state => state.workpage.workpageData);
  const qIdsArray = questionSet.map((topic)=> {
        const qIdArray = topic.QIDArray;
        const ids = qIdArray.map((Id) => {
          return Id
        })
        return ids
      })
  const {data,error,isFetching} = useFetchQuestionSetByIdsQuery(qIdsArray);

    //This finds any LAtex after each render of workpageData.
  useEffect(()=>{
    if( typeof window?.MathJax !== "undefined"){
      window.MathJax.typesetClear()
      window.MathJax.typeset()
    }
  },[workpageData])

  useEffect(()=> {
    if (isFetching) {
      console.log("Fetching Qs");
  } else if (error) {
      console.log("Error fetching Qs");
  } else {
      const groupedQuestions = questionSet.map(set => {
        return data.filter(q => set.QIDArray.includes(q.QID));
      })
      const newFormat = groupedQuestions.map(set => {
        return set.map(q =>{return {"question": q,"selectedAnswerIndex": null, "isCorrect": null, "isFlagged": false, "isFocused": false}});
      })
      dispatch(setWorkpageData(newFormat));
      setDataFetched(true);
  }
  },[isFetching, error, data, dispatch])

  let workpageContent;
  if (isFetching){
    workpageContent = <div>Fetching Data</div>
  } else if (error){
    workpageContent = <div>Error fetching Data</div>
  } else if (dataFetched) {
    console.log(workpageData)
    workpageContent = <div className="flex grid-cols-3 h-full"><AssignmentInfo />
    <QuestionArea />
    <SkillArea /></div>
  }

   return(
       <div >
          {workpageContent}
       </div>
    )   
   }
   
   export default DemoWorksheet;