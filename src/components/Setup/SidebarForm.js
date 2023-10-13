import Button from "../Misc/Button";
import { useDispatch, useSelector } from "react-redux";
import {useEffect, useState} from "react";
import TimedDropdown from "./TimedDropdown";
import { useCreateAssignmentMutation, useEditAssignmentMutation } from "../../store";
import { changeName, setIsQuiz, setIsPm, setDueDate, setTimeHr, setTimeMin } from "../../store";
import { useNavigate } from "react-router-dom";

function SidebarForm({ userId, assignmentId}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const buttonText = assignmentId ? "Edit Workpage" : "Create Workpage"
    const [createAssignment, { isFetchingCreate, isErrorCreate, dataCreate }] = useCreateAssignmentMutation();
    const [editAssignment, { isFetchingEdit, isErrorEdit, dataEdit }] = useEditAssignmentMutation();
    // To change when I add unique users
    const uId = useSelector(state => state.assignment.userId);
    var assignmentName = useSelector(state => state.assignment.assignmentName);
    var tqPair = useSelector(state => state.assignment.tqPair)
    var isQuiz = useSelector(state => state.assignment.isQuiz);
    var timeLimit = useSelector(state => state.assignment.timeLimit)
    var dueDate = useSelector(state => state.assignment.dueDate);
    var timeHr = useSelector(state => state.assignment.timeHr);
    var timeMin = useSelector(state => state.assignment.timeMin);
    var status = useSelector(state => state.assignment.status);
    const [timeButtonText, setTimeButtontext] = useState("PM");
    const [qTotal,setqTotal] = useState(0)

    useEffect(()=> {
        console.log(timeHr);
    },[])
    

    const handleTimeButtonClick = (event) => {
        event.preventDefault();
        if(timeButtonText === "PM"){
            setTimeButtontext("AM");
            dispatch(setIsPm(false));
        } else if (timeButtonText ==="AM") {
            setTimeButtontext("PM");
            dispatch(setIsPm(true));
        }
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
        var time = parseInt(timeHr)
        if (timeButtonText==="PM"){
            time = 12+time;
        }
        if (timeHr < 10 && timeButtonText === "AM"){
            time = "0"+time;
        }
        const newDate = new Date(`${dueDate}T${time}:${timeMin}:00`)
        if (assignmentId){
            const editedData = {"userId": uId, "assignmentId": assignmentId, "name": assignmentName, "tqPair": tqPair, "isQuiz": isQuiz, "timeLimit": timeLimit, "dueDate": newDate, "status": status};
            editAssignment(editedData)
        }else{
            const createData = {"userId": uId, "name": assignmentName, "tqPair": tqPair, "isQuiz": isQuiz, "timeLimit": timeLimit, "dueDate": newDate, "status": status};
            createAssignment(createData);
        }
        navigate("/app/teacher")
    }

    return(
        <form onSubmit={HandleSubmit} className="border-r-2 py-6 border-b-2 border-indigo-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-items-center">
            
            <div className="col-span-2 md:col-span-2">
                <span className="p-4 flex items-center justify-center">
                        <Button type="submit" className="text-2xl w-full md:w-96 shadow-lg shadow-indigo-500/40 hover:bg-indigo-700" primary rounded>{buttonText}</Button>
                </span>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center items-center col-span-2 text-2xl p-4">
                <label>Assignment Name:</label>
                <span className="pl-2">
                    <input className="border border-2 w-full md:w-auto text-center rounded border-indigo-300" onChange={(event)=>{dispatch(changeName(event.target.value))}} type="text" value={assignmentName} required />
                </span>
            </div>
            
            <div className="items-start">
                <label className="text-md pr-2">Number of Questions:</label>
                <label className="text-md pr-2">{qTotal}</label>
            </div>
            
            <div>
                <label className="text-md pl-4 pr-2">Timed Quiz</label>
                <input type="checkbox" onChange={() => {dispatch(setIsQuiz(!isQuiz))}} checked={isQuiz} />
                {checkToggle}
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center text-xl">
                <label className="mb-2 md:mb-0 md:pr-3">Due Date:</label>
                <input className="border border-2 w-full md:w-auto text-center rounded border-indigo-300" type="date" onChange={(event) => {dispatch(setDueDate(event.target.value))}} value={dueDate} />
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center text-xl">
                <div className="flex mb-2 md:mb-0">
                    <input className="w-20 border border-2 text-center rounded border-indigo-300" onChange={(event)=> {dispatch(setTimeHr(event.target.value))}} value={timeHr} type="number" max="12" min="1" />
                    <label className="px-2 text-3xl">:</label>
                    <input className="w-20 border border-2 text-center rounded border-indigo-300" onChange={(event)=> {dispatch(setTimeMin(event.target.value))}} value={timeMin} type="number" max="59" min="00" />
                </div>
                <Button className="mt-2 md:mt-0 md:ml-4 hover:bg-gray-400" onClick={handleTimeButtonClick} time>{timeButtonText}</Button>
            </div>
            
        </div>
    </form>
    )
}
export default SidebarForm;
