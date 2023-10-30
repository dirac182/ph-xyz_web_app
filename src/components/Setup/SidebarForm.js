import Button from "../Misc/Button";
import { useDispatch, useSelector } from "react-redux";
import {useEffect, useState} from "react";
import TimedDropdown from "./TimedDropdown";
import { useUpdateClassroomAssignmentMutation, useFetchAllQuestionIDsQuery ,useCreateAssignmentMutation, useEditAssignmentMutation } from "../../store";
import { setQuestionSet,setQIDs, changeName, setIsQuiz, setIsPm, setDueDate, setTimeHr, setTimeMin } from "../../store";
import { useNavigate } from "react-router-dom";
import SelectClassDropdown from "./SelectClassDropdown";

function SidebarForm({ userId, assignmentId}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const buttonText = assignmentId ? "Edit Workpage" : "Create Workpage"
    const [createAssignment, { isFetchingCreate, isErrorCreate, dataCreate }] = useCreateAssignmentMutation();
    const [editAssignment, { isFetchingEdit, isErrorEdit, dataEdit }] = useEditAssignmentMutation();
    const [updateClassAssignment, { a, b, c }] = useUpdateClassroomAssignmentMutation();
    const { data,error,isFetching } = useFetchAllQuestionIDsQuery();
    // To change when I add unique users
    const uId = useSelector(state => state.user.userId);
    const teacherClassrooms = useSelector(state => state.user.teacherClassrooms);
    var assignmentName = useSelector(state => state.assignment.assignmentName);
    var tqPair = useSelector(state => state.assignment.tqPair)
    var isQuiz = useSelector(state => state.assignment.isQuiz);
    var timeLimit = useSelector(state => state.assignment.timeLimit)
    var dueDate = useSelector(state => state.assignment.dueDate);
    var timeHr = useSelector(state => state.assignment.timeHr);
    var timeMin = useSelector(state => state.assignment.timeMin);
    var isPm = useSelector(state => state.assignment.isPm);
    var status = useSelector(state => state.assignment.status);
    var QIDs = useSelector(state => state.workpage.QIDs);
    var questionSet = useSelector(state => state.assignment.questionSet);
    var classes = useSelector(state => state.assignment.classes);
    const [timeButtonText, setTimeButtontext] = useState("PM");
    const [qTotal,setqTotal] = useState(0)

    useEffect(() => {
        if (!isFetching && !error && data) {
            const QIDList = data;
            var allQs = [];
            QIDList.map(element => {
                allQs.push(element.QID);
            });
            dispatch(setQIDs(allQs));
        }
    }, [isFetching, error, data, dispatch]);

    const handleTimeButtonClick = (event) => {
        event.preventDefault();
        if(timeButtonText === "PM"){
            setTimeButtontext("AM");
            dispatch(setIsPm(false));
        } else if (timeButtonText ==="AM") {
            setTimeButtontext("PM");
            dispatch(setIsPm(true));
        }
        console.log(isPm);
    }

    //This Changes the total amount of questions
    useEffect(() => {
        var total = 0
        tqPair.map((pair)=>{
            total = total + parseInt(pair.questions);
        })
        setqTotal(total);
    },[tqPair])

    const checkToggle = (
            <div>
                {isQuiz && <TimedDropdown />}
            </div>
        )

    const HandleSubmit = (event) => {
        event.preventDefault();
        
        const seenQuestionIds = new Set();

        const newQuestionSet = tqPair.map(pair => {
            // Convert the id to string for matching
            const topicId = String(pair.topicId);

            // Filter the questionIds based on the topicId and ensure no duplicates
            const matchingIds = QIDs.filter(qId => {
                const qTopicId = qId.split('T')[1].split('-')[0];
                if (qTopicId === topicId && !seenQuestionIds.has(qId)) {
                    seenQuestionIds.add(qId);
                    return true;
                }
                return false;
            });

            // Return the desired format for each tqPair element
            return {
                topicId: pair.topicId,
                topic: pair.topic,
                QIDArray: matchingIds.slice(0, pair.questions)
            };
        });
        dispatch(setQuestionSet(newQuestionSet));

        var time = parseInt(timeHr)
        if (timeButtonText==="PM"){
            time = 12+time;
        }
        if (timeHr < 10 && timeButtonText === "AM"){
            time = "0"+time;
        }
        const newDate = new Date(`${dueDate}T${time}:${timeMin}:00`)
        if (assignmentId){
            const editedData = {"userId": uId, "assignmentId": assignmentId, "name": assignmentName, "tqPair": tqPair, "isQuiz": isQuiz, "timeLimit": timeLimit, "dueDate": newDate, "timeHr": timeHr, "timeMin": timeMin, "isPm": !isPm, "status": status, "questionSet": newQuestionSet, "classes":classes};
            editAssignment(editedData)
            const classData = {"userId": uId, "assignmentId": assignmentId, "assignedClasses": classes}
            console.log(classData);
            updateClassAssignment(classData)
        }else{
            const aId = "aid" + Math.random().toString(16).slice(2)
            const createData = {"userId": uId, "assignmentId": aId, "name": assignmentName, "tqPair": tqPair, "isQuiz": isQuiz, "timeLimit": timeLimit, "dueDate": newDate, "timeHr": timeHr, "timeMin": timeMin, "isPm": !isPm, "status": status, "questionSet": newQuestionSet, "classes":classes };
            createAssignment(createData);
            const classData = {"userId": uId, "assignmentId": aId, "assignedClasses": classes};
            console.log(classData);
            updateClassAssignment(classData)
        }
        navigate(`/dashboard/${uId}`)
    }

    return(
        <form onSubmit={HandleSubmit} className="border-r-2 py-6 border-b-2 border-indigo-300">
        <div className="grid lg:grid-cols-2 lg:gap-3 md:grid-cols-1 md:gap-1 items-center justify-items-center">
 
            <div className="flex w-full items-center justify-center lg:col-span-2 p-4">
                    <Button type="submit" className="text-2xl w-9/12 shadow-lg shadow-indigo-500/40 hover:bg-indigo-700" primary rounded>{buttonText}</Button>
            </div>
            
            <div className="flex justify-center items-center text-2xl lg:col-span-2 md:col-span-2 text-center">
                <label>Assignment Name:</label>
            </div>

            <div className="flex items-center justify-center w-full p-2 lg:col-span-2 md:col-span-2">
                <input className="w-9/12 border border-2 text-center rounded border-indigo-300" onChange={(event)=>{dispatch(changeName(event.target.value))}} type="text" value={assignmentName} required />
            </div>

            <div className="text-center col-span-2">
                <label className="text-md pr-2">Number of Questions:</label>
                <label className="text-md pr-2">{qTotal}</label>
            </div>
            
            {/* <div>
                <label className="text-md pl-4 pr-2">Timed Quiz</label>
                <input type="checkbox" onChange={() => {dispatch(setIsQuiz(!isQuiz))}} checked={isQuiz} />
                {checkToggle}
            </div> */}
            
            <div className="flex w-full col-span-2 md:flex-row items-center justify-center text-center text-xl">
                <div>
                    <label className="pr-4">Due Date:</label>
                    <input className="border border-2 text-center rounded border-indigo-300" type="date" onChange={(event) => {dispatch(setDueDate(event.target.value))}} value={dueDate} />
                </div>
                
            </div>
            
            <div className="flex items-center col-span-2 justify-center text-xl">
                <div className="flex pr-6">
                    <input className="border border-2 text-center rounded border-indigo-300" onChange={(event)=> {dispatch(setTimeHr(event.target.value))}} value={timeHr} type="number" max="12" min="1" />
                    <label className="px-2 text-3xl">:</label>
                    <input className="border border-2 text-center rounded border-indigo-300" onChange={(event)=> {dispatch(setTimeMin(event.target.value))}} value={timeMin} type="number" max="59" min="00" />
                </div>
                <Button className="hover:bg-gray-400" onClick={handleTimeButtonClick} time>{timeButtonText}</Button>
            </div>
            <div className="flex text-justify col-span-2 w-2/5">
                <label>Select Classes:</label>
                <SelectClassDropdown/>
            </div>
        </div>
    </form>
    )
}
export default SidebarForm;
