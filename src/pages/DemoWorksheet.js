import {useState, useEffect} from "react";
import SkillArea from "../components/Worksheet/SkillArea";
import QuestionArea from "../components/Worksheet/QuestionArea";
import AssignmentInfo from "../components/Worksheet/AssignmentInfo";
import { assignmentSetup, updateGrade, useFetchStudentAssignmentInfoQuery, useInitializeStudentAssignmentInfoMutation, useFetchQuestionSetByIdsQuery, setWorkpageData } from "../store";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function DemoWorksheet({isTeacher}) {
  const dispatch = useDispatch();
  const {assignmentId} = useParams();
  const [dataFetched, setDataFetched] = useState(false);
  const questionSet = useSelector(state => state.workpage.questionSet);
  const userId = useSelector(state => state.user.userId);
  const [initializeStudentAssignmentInfo] = useInitializeStudentAssignmentInfoMutation();
  const qIdsArray = questionSet.map((topic)=> {
        const qIdArray = topic.QIDArray;
        const ids = qIdArray.map((Id) => {
          return Id
        })
        return ids
      })
  const {data,error,isFetching} = useFetchQuestionSetByIdsQuery(qIdsArray);
  const {data:infoFetchData,error: infoFetchError,isFetching:isFetchingInfoFetch, refetch} = useFetchStudentAssignmentInfoQuery({userId,assignmentId})

    //This finds any LAtex after each render of workpageData.
  // useEffect(()=>{
  //   if( typeof window?.MathJax !== "undefined"){
  //     window.MathJax.typesetClear()
  //     window.MathJax.typeset()
  //   }
  // },[workpageData])

  useEffect(()=>{
    if(!dataFetched){
      if (isFetchingInfoFetch) {
      console.log("Fetching Data:",infoFetchData);
  } else if (infoFetchError) {
      console.log("Error Data",infoFetchError);
  } else {
      console.log("fetched assignmnet info", infoFetchData);
      if(infoFetchData !== false){
        console.log(infoFetchData)
        dispatch(setWorkpageData(infoFetchData.studentQuestionSet));
        dispatch(updateGrade(infoFetchData.grade))
        dispatch(assignmentSetup({
          assignmentId: infoFetchData.assignmentId._id,
          assignmentName: infoFetchData.assignmentId.assignmentName,
          tqPair: infoFetchData.assignmentId.tqPair,
          isQuiz: infoFetchData.assignmentId.quiz,
          timeLimit: infoFetchData.assignmentId.timeLimit,
          dueDate: infoFetchData.assignmentId.dueDate.slice(0,10),
          timeHr: infoFetchData.assignmentId.timeHr,
          timeMin: infoFetchData.assignmentId.timeMin,
          isPm:  infoFetchData.assignmentId.isPm,
          classes: infoFetchData.assignmentId.classes,
          questionSet: infoFetchData.assignmentId.questionSet
      }))
        setDataFetched(true);
      } else if (infoFetchData === false){
        console.log("NEW")
        if (data){
          const groupedQuestions = questionSet.map(set => {
            return data.filter(q => set.QIDArray.includes(q.QID));
            })
          const databaseFormat = groupedQuestions.map(set => {
            return set.map(q =>{return {"question": q._id,"selectedAnswerIndex": null, "isCorrect": null, "isFlagged": false, "isFocused": false}});
          })
          const studentAssignmentInfo = {userId, assignmentId, assignmentInfo: databaseFormat}
          initializeStudentAssignmentInfo(studentAssignmentInfo)
          refetch();
        }
      } 
    }
    }
  },[infoFetchData, isFetchingInfoFetch, data])

  // useEffect(()=> {
  //   if (isFetching) {
  //     console.log("Fetching Qs");
  // } else if (error) {
  //     console.log("Error fetching Qs");
  // } else {
      
  //     // dispatch(setWorkpageData(newFormat));
      
  //     const databaseFormat = groupedQuestions.map(set => {
  //       return set.map(q =>{return {"question": q._id,"selectedAnswerIndex": null, "isCorrect": null, "isFlagged": false, "isFocused": false}});
  //     })
  //     const studentAssignmentInfo = {userId, assignmentId, assignmentInfo: databaseFormat}
  //     console.log(newFormat)
  //     
  //     // setDataFetched(true);
  // }
  // },[isFetching, error, data, dispatch])

  let workpageContent;
  if (isFetching){
    workpageContent = <div>Fetching Data</div>
  } else if (error){
    workpageContent = <div>Error fetching Data</div>
  } else if (dataFetched) {
    // console.log("State after data load: ",workpageData)
    workpageContent = <div className="flex md:flex-row flex-col h-full"> 
    <div className="flex md:w-3/12">
      <AssignmentInfo userId={userId} />
    </div>
    <div className="flex md:w-7/12">
      <QuestionArea isTeacher={isTeacher} userId={userId} assignmentId={assignmentId} />
      </div>
    <div className="flex md:w-3/12">
      <SkillArea />
    </div>
    </div>
  }

   return(
       <div >
          {workpageContent}
       </div>
    )   
   }
   
   export default DemoWorksheet;