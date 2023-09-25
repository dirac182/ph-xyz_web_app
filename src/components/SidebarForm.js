import Button from "./Button";
import {useState} from "react";

function SidebarForm() {
    const [name, setName] = useState("")

    const handleNameChange = (event) => {
        setName(event.target.value)
        console.log(name)
    }

    return(
    <form className="border-r-2 pt-6 border-b-2 border-indigo-300">
        <div className="grid grid-cols-3 grid-rows-4 items-center justify-items-center">
            <div className="col-span-3">
                <span className="p-4 flex items-center justify-center">
                    <Button className="text-2xl w-96 shadow-md hover:bg-indigo-700" primary rounded>Create Workpage</Button>
                </span>
            </div>
            <div className="flex justify-center align-center col-span-3 text-2xl p-4">
                <label>Assignment Name:</label>
                <span className="pl-2">
                    <input className="border border-2 text-center rounded border-slate-300" onChange={handleNameChange} type="text" value={name} />
                </span>
            </div>
            <div className="flex p-2">
                <label className="text-md pr-2">Number of Questions:</label>
                <input className="w-12 h-8 border border-2 text-center rounded border-slate-300" type="number" />
            </div>
            <div>
                <label className="text-md pl-4 pr-2" >Timed Quiz</label>
                <input type="checkbox" />
            </div>
            <div>
                <label className="text-md pl-4 pr-2" >Regenerate Missed Questions</label>
                <input type="checkbox" />
            </div>
        </div>
    </form>
    )
}
export default SidebarForm;