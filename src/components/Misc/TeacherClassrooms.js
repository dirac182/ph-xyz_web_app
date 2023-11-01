import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { BiCheck, BiEditAlt, BiSpreadsheet, BiTrash } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx"
import { useParams } from 'react-router-dom';
import { useCreateClassroomMutation, useDeleteClassroomMutation, useFetchTeacherClassroomsQuery } from "../../store";

function TeacherClassrooms() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const classrooms = useSelector(state => state.user.teacherClassrooms);
    const [createClassroom, { a, b, c }] = useCreateClassroomMutation();
    const [deleteClassroom, { d, e, f }] = useDeleteClassroomMutation();
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [newClassText, setNewClassText] = useState("");
    const { userId } = useParams();
    const {data,error,isFetching} = useFetchTeacherClassroomsQuery(userId);

    let renderedRooms;
    if(isFetching) {
        renderedRooms = <tr><td><div>Fetching Classrooms...</div></td></tr>
    } else if (error) {
        renderedRooms = <tr><td><div>Error Loading Classrooms</div></td></tr>
    } else {
        // console.log(data)
        renderedRooms = data ? data.classes.map(room => {

        const handleDeleteClass = (event) => {
            event.preventDefault();
            deleteClassroom({userId:userId, classId: room._id});
            }
        const handleClassClick = () => {
            navigate(`/class/${userId}/${room._id}`);
        }

        return(
            <tr className="border-b text-center" key={room._id}>
                {/* <td className=""><button><BiEditAlt/></button></td> */}
                <td className=""><p onClick={handleClassClick} className="cursor-pointer hover:underline">{room.className}</p></td>
                <td className=""><p>{room.joinCode}</p></td>
                <td className="">{room.students.length}</td>
                <td className="">
                    <div className="relative">
                    <div className="skills-icon text-xl">
                            <span>{room.assignments.length}</span>
                        </div>
                        <div className="skills-list hidden">
                            <table className="table-auto">
                                <thead>
                                    <tr className="border-b-2">
                                        <th>Assignments</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {room.assignments.map((a, index) => (
                                    <tr className="border-b" key={index}>
                                        <td className="p-3">{a.assignmentName}</td>
                                    </tr>
                            ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </td>
                <td className=""><button onClick={handleDeleteClass}><BiTrash/></button></td>
            </tr>
        )
    })
    
    : <div><label>You have no classrooms</label></div>
    }
    const handleCreateClassDropdown = (event) => {
        event.preventDefault();
        setToggleDropdown(!toggleDropdown);
        setNewClassText("")
    }

    const handleCreateClass = (event) => {
        event.preventDefault();
        console.log(newClassText, userId);
        const data = {userId:userId, className:newClassText}
        createClassroom(data)
        setToggleDropdown(!toggleDropdown);
    }

    return (
        <div className="max-w-2xl">
            <p className="text-5xl text-center underline pb-3">My Classrooms</p>
           <table className="table-auto border-spacing-2">
                <thead>
                    <tr className="border-b-2">
                        {/* <th className="px-2">Edit</th> */}
                        <th className="px-2">Classroom Name</th>
                        <th className="px-2">Class Code</th>
                        <th className="px-2">Students</th>
                        <th className="px-2">Assignments</th>
                        <th className="px-2">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedRooms}
                </tbody>
            </table> 
            <form>
                <div className={`p-2 ${toggleDropdown ? "flex" : "hidden"}`}>
                    <label className="pr-2">Class Name:</label>
                    <input className="border border-2 text-center rounded border-indigo-300" onChange={(event)=> {setNewClassText(event.target.value)}} value={newClassText} type="text" required />
                    <span className="flex justify-center border rounded-full mx-2 px-1 bg-green-500 text-lg"><button onClick={handleCreateClass}><BiCheck/></button></span>
                    <span className="flex justify-center border rounded-full bg-red-500 px-1 text-lg"><button onClick={handleCreateClassDropdown}><RxCross2/></button></span>
                </div>
            </form>
            <div className={`${toggleDropdown ? "hidden" : "flex"} justify-center p-4`}>
                <Button onClick={handleCreateClassDropdown} primary outline rounded submit>Create New Classroom</Button>
            </div>
        </div>
    )
}

export default TeacherClassrooms;