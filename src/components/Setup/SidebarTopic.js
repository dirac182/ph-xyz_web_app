import {MdOutlineCancel} from "react-icons/md"

function SidebarTopic({topic, onDelete}) {

    const handleRemoveClick = () =>{
        onDelete(topic.id);
    }

    return (
        <div className="flex p-3 border-indigo-300 border-b-2 border-r-2 content-center justify-items-center bg-indigo-100">
            <MdOutlineCancel onClick={handleRemoveClick} className="relative top-0.5 left-1 text-red-500 text-xl"/>
            <p className="pl-3 text-lg">
                {topic.topic}
            </p>
        </div>
    )
}

export default SidebarTopic;