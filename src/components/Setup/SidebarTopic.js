import {MdOutlineCancel} from "react-icons/md"
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeQuestions, removeTopic } from "../../store";

function SidebarTopic({pair}) {
    const [questionAmount,setQuestionAmount] = useState(pair.questions);
    const dispatch = useDispatch();

    const handleRemoveClick = () =>{
        dispatch(removeTopic(pair.topicId))
    }

    useEffect(() => {
        dispatch(changeQuestions({id: pair.topicId, questions: questionAmount}))
    },[questionAmount])

    return (
        <div className="flex p-3 border-indigo-300 border-b-2 border-r-2 content-center justify-between bg-indigo-100">
            <div className="flex">
                <MdOutlineCancel onClick={handleRemoveClick} className="relative top-0.5 left-1 text-red-500 text-xl"/>
                <p className="pl-3 text-lg">
                    {pair.topic}
                </p>
            </div>
            <input className="w-12 h-8 border border-2 text-center rounded border-indigo-300" onChange={(event)=>{setQuestionAmount(event.target.value)}} value={questionAmount} type="number" min="1" max="5" />
        </div>
    )
}

export default SidebarTopic;