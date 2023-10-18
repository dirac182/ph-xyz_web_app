import SidebarTopic from "./SidebarTopic";
import SidebarForm from "./SidebarForm";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Sidebar({ userId, assignmentId }) {
    const tqPair = useSelector(state => state.assignment.tqPair)
    const renderedTopics = tqPair.map((pair) =>{
        return (
            <div key={pair.topicId}>
                <SidebarTopic pair={pair} />
            </div>
                )
    })

    const topicHeader = tqPair.length === 0 
    ? <div className="flex justify-center text-2xl"><div>Click on Dropdown to Add Topics</div></div>
    : <div className="flex justify-between text-xl"><div className="pl-11">Topics:</div><div className="pr-4">Number of Questions:</div></div>

    return (
        <div className="bg-white">
            <div>
                <SidebarForm assignmentId={assignmentId} userId={userId} />
            </div>
            <div className="border-r-2 border-b-2 border-indigo-300">
                {topicHeader}
            </div>            
                {renderedTopics}        
        </div>
    )
}

export default Sidebar;