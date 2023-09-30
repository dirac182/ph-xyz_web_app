import SidebarTopic from "./SidebarTopic";
import SidebarForm from "./SidebarForm";
import { useState, useEffect } from "react";

function Sidebar({addedTopics, onDelete, onCreate, dispatch, tqPair}) {

    const renderedTopics = addedTopics.map((topic) =>{
            return (
                <div key={topic.topic}>
                    <SidebarTopic dispatch={dispatch} onDelete={onDelete} topic={topic} />
                </div>
                 )
        })

    const topicHeader = addedTopics.length === 0 
    ? <div className="flex justify-center text-2xl"><div>Click on Dropdown to Add Topics</div></div>
    : <div className="flex justify-between text-xl"><div className="pl-11">Topics:</div><div className="pr-4">Number of Questions:</div></div>

    return (
        <div className="bg-white">
            <div>
                <SidebarForm tqPair={tqPair} onCreate={onCreate} />
            </div>
            <div className="border-r-2 border-b-2 border-indigo-300">
                {topicHeader}
            </div>            
                {renderedTopics}        
        </div>
    )
}

export default Sidebar;