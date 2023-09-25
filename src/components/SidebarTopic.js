import {MdOutlineCancel} from "react-icons/md"

function SidebarTopic({topic, onDelete}) {

    const handleRemoveClick = () =>{
        onDelete(topic.id);
    }

    return (
        <div className="flex p-3 border-gray-300 border-b-2 content-center justify-items-center bg-gray-100">
            <MdOutlineCancel onClick={handleRemoveClick} className="relative top-0.5 left-1 text-red-500"/>
            <p className="pl-2">
                {topic.topic}
            </p>
        </div>
    )
}

export default SidebarTopic;