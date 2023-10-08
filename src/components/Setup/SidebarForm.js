import Button from "../Misc/Button";
import {useState} from "react";
import TimedDropdown from "./TimedDropdown";

function SidebarForm({onCreate, tqPair}) {
    const today = new Date().toJSON().slice(0,10);

    const [name, setName] = useState("");
    const [timedCheck, setTimedCheck]  = useState(false);
    const [timeLimit, setTimeLimit] = useState(20)
    const [date, setDate] = useState(today);
    const [timeHour, setTimeHour] = useState(11);
    const [timeMinute, setTimeMinute] = useState(59);
    const [timeButtonText, setTimeButtontext] = useState("PM");
    const [userID, setUserID] = useState(123)
    const [status, setStatus] = useState(true)

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
        const date = new Date(`${date}T`)

        onCreate(name,userID,tqPair,timedCheck,timeLimit,date,dueTime,status);
    }

    return(
        <form onSubmit={handleSubmit} className="border-r-2 py-6 border-b-2 border-indigo-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-items-center">
            
            <div className="col-span-2 md:col-span-2">
                <span className="p-4 flex items-center justify-center">
                    <Button className="text-2xl w-full md:w-96 shadow-lg shadow-indigo-500/40 hover:bg-indigo-700" primary rounded>Create Workpage</Button>
                </span>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center items-center col-span-2 text-2xl p-4">
                <label>Assignment Name:</label>
                <span className="pl-2">
                    <input className="border border-2 w-full md:w-auto text-center rounded border-indigo-300" onChange={(event)=>{setName(event.target.value)}} type="text" value={name} required />
                </span>
            </div>
            
            <div className="items-start">
                <label className="text-md pr-2">Number of Questions:</label>
                <input className="w-12 h-8 border border-2 text-center rounded border-indigo-300" type="number" min="1" max="10" />
            </div>
            
            <div>
                <label className="text-md pl-4 pr-2">Timed Quiz</label>
                <input type="checkbox" onChange={() => {setTimedCheck(!timedCheck)}} value={timedCheck} />
                {checkToggle}
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center text-xl">
                <label className="mb-2 md:mb-0 md:pr-3">Due Date:</label>
                <input className="border border-2 w-full md:w-auto text-center rounded border-indigo-300" type="date" onChange={(event) => {setDate(event.target.value)}} value={date} />
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center text-xl">
                <div className="flex mb-2 md:mb-0">
                    <input className="w-20 border border-2 text-center rounded border-indigo-300" onChange={(event)=> {setTimeHour(event.target.value)}} value={timeHour} type="number" max="12" min="1" />
                    <label className="px-2 text-3xl">:</label>
                    <input className="w-20 border border-2 text-center rounded border-indigo-300" onChange={(event)=> {setTimeMinute(event.target.value)}} value={timeMinute} type="number" max="59" min="00" />
                </div>
                <Button className="mt-2 md:mt-0 md:ml-4 hover:bg-gray-400" onClick={handleTimeButtonClick} time>{timeButtonText}</Button>
            </div>
            
        </div>
    </form>
    )
}
export default SidebarForm;
