import Button from "../Button";
import {useState} from "react";
import TimedDropdown from "./TimedDropdown";

function SidebarForm({onCreate}) {
    const today = new Date().toJSON().slice(0,10);

    const [name, setName] = useState("");
    const [questionAmount, setQuestionAmount] = useState(10);
    const [timedCheck, setTimedCheck]  = useState(false);
    const [timeLimit, setTimeLimit] = useState(20)
    const [date, setDate] = useState(today);
    const [timeHour, setTimeHour] = useState(11);
    const [timeMinute, setTimeMinute] = useState(59);
    const [timeButtonText, setTimeButtontext] = useState("PM");

    const handleTimeButtonClick = (event) => {
        event.preventDefault();
        if(timeButtonText === "PM"){
            setTimeButtontext("AM");
        } else if (timeButtonText ==="AM") {
            setTimeButtontext("PM");
        }
    }

    const checkToggle = (
            <div>
                {timedCheck && <TimedDropdown time={timeLimit} setTime={setTimeLimit} />}
            </div>
        )


    const handleSubmit = (event) => {
        event.preventDefault();
        const dueTime = `${timeHour}:${timeMinute} ${timeButtonText}`;
        onCreate(name,questionAmount,timedCheck,timeLimit,date, dueTime);
    }

    return(
    <form onSubmit={handleSubmit} className="border-r-2 pt-6 border-b-2 border-indigo-300">
        <div className=" grid grid-cols-2 grid-rows-4 items-center justify-items-center">
            <div className="col-span-2">
                <span className="p-4 flex items-center justify-center">
                    <Button className="text-2xl w-96 shadow-lg shadow-indigo-500/40 hover:bg-indigo-700" primary rounded>Create Workpage</Button>
                </span>
            </div>
            <div className="flex justify-center align-center col-span-2 text-2xl p-4">
                <label>Assignment Name:</label>
                <span className="pl-2">
                    <input className="border border-2 text-center rounded border-indigo-300" onChange={(event)=>{setName(event.target.value)}} type="text" value={name} required />
                </span>
            </div>
            <div className="items-start ">
                <label className="text-md pr-2">Number of Questions:</label>
                <input className="w-12 h-8 border border-2 text-center rounded border-indigo-300" onChange={(event)=>{setQuestionAmount(event.target.value)}} type="number" value={questionAmount}  min="1" max="10" />
            </div>
            <div>
                <label className="text-md pl-4 pr-2" >Timed Quiz</label>
                <input type="checkbox" onChange={() => {setTimedCheck(!timedCheck)}} value={timedCheck} />
                {checkToggle}
            </div>
            <div className="flex items-center justify-center text-xl">
                <label className="pr-3">Due Date:</label>
                <input className="border border-2 text-center rounded border-indigo-300" type="date" onChange={(event) => {setDate(event.target.value)}} value={date} />
            </div>
            <div className="flex items-center justify-center text-xl">
                <div className=" flex">
                    <input className="w-12 border border-2 text-center rounded border-indigo-300" onChange={(event)=> {setTimeHour(event.target.value)}} value={timeHour} type="number" max="12" min="1" />
                    <label className="px-2 text-3xl">:</label>
                </div>
                <input className="w-12 border border-2 text-center rounded border-indigo-300" onChange={(event)=> {setTimeMinute(event.target.value)}} value={timeMinute} type="number" max="59" min="00" />
                <label className="pr-6 text-3xl"></label>
                <Button className="hover:bg-gray-400" onClick={handleTimeButtonClick} time >{timeButtonText}</Button>
            </div>
            
        </div>
    </form>
    )
}
export default SidebarForm;