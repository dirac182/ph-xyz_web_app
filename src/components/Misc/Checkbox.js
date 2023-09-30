import { useState,useEffect } from "react";

function Checkbox({topic, onAdd, onDelete, checkedBoxes, dispatch}) {
    const [checked, setChecked] = useState(false);

    useEffect(() =>{
        checkedBoxes.map((listItem) =>{
            if (listItem.id === topic.id){
                setChecked(true);
                }
            })
        }, [])

    useEffect(()=> {
        const isNotInArray = checkedBoxes.every(item => item.id !== topic.id);
        if (isNotInArray) {
            setChecked(false);
        }
    },[topic])

    const handleChange = () => {
        setChecked(!checked);
        if (!checked){
            console.log("Checked")
            onAdd(topic)
            dispatch({type:"add-topic",payload:{id:topic.id,topic:topic.topic}})
        } else {
            console.log("Unchecked")
            onDelete(topic.id)
            dispatch({type:"delete-topic",payload: topic.id})
        }
    } 
    return (
        <div onClick={handleChange} className="relative bottom-2 flex p-3 font-normal bg-gray-50 hover:bg-indigo-300 border-x-2 border-b-2 border-indigo-500 items-center cursor-pointer">
            <input type="checkbox" onChange={handleChange} checked={checked}/>
            <p className="pl-2">{topic.topic}</p>
        </div>
    )
}

export default Checkbox;