import { useDispatch, useSelector } from "react-redux";
import { setTimeLimit } from "../../store";

function TimedDropdown() {
    const dispatch = useDispatch();
    const timeLimit = useSelector(state => state.assignment.timeLimit)
    return(
        <div>
            <label className="pr-2">Time Limit:</label>
            <input className="w-12 border border-2 text-center rounded border-slate-300" type="number" onChange={(event)=> {dispatch(setTimeLimit(event.target.value))}} value={timeLimit} />
            <label className="pl-2">mins</label>
        </div>
    )   
}

export default TimedDropdown;