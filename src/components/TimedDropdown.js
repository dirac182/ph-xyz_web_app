

function TimedDropdown({time, setTime}) {
    return(
        <div>
            <label className="pr-2">Time Limit:</label>
            <input className="w-12 border border-2 text-center rounded border-slate-300" type="number" onChange={(event)=> {setTime(event.target.value)}} value={time} />
            <label className="pl-2">mins</label>
        </div>
    )   
}

export default TimedDropdown;