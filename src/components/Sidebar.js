import SidebarTopic from "./SidebarTopic";
import SidebarForm from "./SidebarForm";

function Sidebar({addedTopics, onDelete, onCreate}) {

    const renderedTopics = addedTopics.map((topic) =>{
            return (
                <div key={topic.topic}>
                    <SidebarTopic onDelete={onDelete} topic={topic} />
                </div>
                 )
        })

    return (
        <div>
            <div className="">
                <SidebarForm onCreate={onCreate} />
            </div>            
                {renderedTopics}        
        </div>
    )
}

export default Sidebar;