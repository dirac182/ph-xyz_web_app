import { useState } from "react";

function Checkbox({topic, onAdd, onDelete}) {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked);
        if (!checked){
            console.log("Checked")
            onAdd(topic.id)
        } else {
            console.log("Unchecked")
            onDelete(topic.id)
        }
    } 
    return (
        <div onClick={handleChange} className="flex p-3 font-normal bg-gray-50 border-b items-center cursor-pointer">
            <input type="checkbox" onChange={handleChange} checked={checked}/>
            <p className="pl-2">{topic.topic}</p>
        </div>
    )
}

export default Checkbox;