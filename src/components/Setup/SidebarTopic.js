import {MdOutlineCancel} from "react-icons/md"
import { useState, useEffect } from "react";

function SidebarTopic({topic, onDelete, dispatch}) {
    const [questionAmount,setQuestionAmount] = useState(1);

    const handleRemoveClick = () =>{
        onDelete(topic.id);
        dispatch({type:"delete-topic",payload: topic.id})
    }

    useEffect(() => {
        dispatch({type:"change-questions", payload: {id: topic.id, amount: questionAmount}})
    },[questionAmount])

    return (
        <div className="flex p-3 border-indigo-300 border-b-2 border-r-2 content-center justify-between bg-indigo-100">
            <div className="flex">
                <MdOutlineCancel onClick={handleRemoveClick} className="relative top-0.5 left-1 text-red-500 text-xl"/>
                <p className="pl-3 text-lg">
                    {topic.topic}
                </p>
            </div>
            <input className="w-12 h-8 border border-2 text-center rounded border-indigo-300" onChange={(event)=>{setQuestionAmount(event.target.value)}} value={questionAmount} type="number" min="1" max="10" />
        </div>
    )
}

export default SidebarTopic;