import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopic, removeTopic } from "../../store";

function Checkbox({topic}) {
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();
    const tqPair = useSelector(state => state.assignment.tqPair)

    useEffect(() =>{
        tqPair.map((listItem) =>{
            if (listItem.id === topic.id){
                setChecked(true);
                }
            })
        }, [])

    useEffect(()=> {
        const isNotInArray = tqPair.every(item => item.id !== topic.id);
        if (isNotInArray) {
            setChecked(false);
        }
    },[topic])

    const handleChange = () => {
        setChecked(!checked);
        if (!checked){
            dispatch(addTopic({id:topic.id,topic:topic.topic}))
        } else {
            dispatch(removeTopic(topic.id))
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