import SidebarTopic from "./SidebarTopic";

function Sidebar({addedTopics, onDelete}) {

    const renderedTopics = addedTopics.map((topic) =>{
            return (
                <div key={topic.topic}>
                    <SidebarTopic onDelete={onDelete} topic={topic} />
                </div>
                 )
        })

    return (
        <div>
            <div className="bg-red-300">
                Learning Objectives and Skills
            </div>            
                {renderedTopics}        
        </div>
    )
}

export default Sidebar;