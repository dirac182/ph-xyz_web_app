import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { assignmentSetup, useFetchStudentClassroomsQuery, useCheckJoinCodeMutation, useAddStudentToClassroomMutation } from "../../store";
import Button from "./Button";
import { BiCheck } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx"
import { useNavigate } from "react-router-dom";

function StudentAssignments () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const studentClasses = useSelector(state => state.user.studentClasses);
    const studentAssignmentInfo = useSelector(state => state.user.studentAssignmentInfo)
    const userId = useSelector(state => state.user.userId);
    const {data,error,isFetching} = useFetchStudentClassroomsQuery(studentClasses);
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [newClassCodeText, setNewClassCodeText] = useState("");
    const [validCode, setValidCode] = useState(null);
    const [checkJoinCode, { data:joinCodeCheckData, isLoading:joinCodeCheckisLoading }] = useCheckJoinCodeMutation();
    const [addStudentToClassroom, { data:addStudentData, isLoading:addStudentisLoading }] = useAddStudentToClassroomMutation();

    useEffect(() => {
        if (newClassCodeText.length === 6){
            checkJoinCode(newClassCodeText);
        } else if ( newClassCodeText.length < 6){
            setValidCode(false);
        }
    },[newClassCodeText])

    useEffect(() => {
        if(joinCodeCheckData === true){
            setValidCode(true)
        } else if (joinCodeCheckData === false){
            setValidCode(false)
        }
    },[joinCodeCheckData,joinCodeCheckisLoading])

    const handleJoinClassDropdown = (event) => {
        event.preventDefault();
        setToggleDropdown(!toggleDropdown);
    }
    const handleJoinClass = (event) => {
        event.preventDefault();
        // console.log(newClassText, userId);
        const data = {userId:userId, classCode:newClassCodeText}
        addStudentToClassroom(data)
        setToggleDropdown(!toggleDropdown);
    }

    let renderedAssignments;
    let renderedClasses;
    if (isFetching){
        // renderedAssignments = <div>Fetching Assignments</div>
    }else if (error){
        console.log(error)
        // renderedAssignments = <div>Error Loading Assignments</div>
    } else if (data){
        console.log(studentAssignmentInfo)
        renderedAssignments = data.map(cls => {
            const assignments = cls.assignments.map(assignment => {
                const isPmText = assignment.isPm ? "PM" : "AM"
                const options = { weekday: 'long', day: 'numeric', month: 'short' };
                const date = new Date(assignment.dueDate.slice(0,10));
                const formatedDate = date.toLocaleDateString('en-US', options);
                const handleAssignmentClick = () => {
                    dispatch(assignmentSetup({
                        assignmentId: assignment._id,
                        assignmentName: assignment.assignmentName,
                        tqPair: assignment.tqPair,
                        isQuiz: assignment.quiz,
                        timeLimit: assignment.timeLimit,
                        dueDate: assignment.dueDate.slice(0,10),
                        timeHr: assignment.timeHr,
                        timeMin: assignment.timeMin,
                        isPm:  assignment.isPm,
                        classes: assignment.classes,
                        questionSet: assignment.questionSet
                    }))
                    navigate(`/app/student/${assignment._id}`);
                }
                let assignmentGrade = null;
                studentAssignmentInfo.map(a => {
                    if (a.assignmentId === assignment._id){                     
                        assignmentGrade = a.grade;   
                    }
                })

                return (
                <tr onClick={handleAssignmentClick} className="border-b text-center hover:bg-indigo-300 cursor-pointer" key={assignment._id}>
                    <td className="p-2">{assignment.assignmentName}</td>
                    <td className="p-2">{formatedDate} at {assignment.timeHr}:{assignment.timeMin} {isPmText}</td>
                    <td className="p-2">{cls.className}</td>
                    <td className="p-2">
                        {assignmentGrade ? assignmentGrade : "0"}
                    </td>
                </tr>
                )
            })
            return assignments
        })
        renderedClasses = data.map(cls => {
            return (
                <tr className="border-b text-center" key={cls._id}>
                    <td className="p-2">{cls.className}</td>
                    <td className="p-2">{cls.teacherId.firstName} {cls.teacherId.lastName}</td>
                    <td className="p-2">{cls.joinCode}</td>
                </tr>
            )
        })
    }

    return( 
        <div className=''>
            <div className="pb-4">
                <p className="text-5xl text-center underline p-3">Assignments</p>
                <div className='flex justify-center'>
                    <table className="table-auto justify-center border-spacing-2">
                        <thead>
                            <tr className="border-b-2">
                                <th className="px-2">Assignment Name</th>
                                <th className="px-2">Due Date</th>
                                <th className="px-2">Class</th>
                                <th className="px-2">Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderedAssignments}
                        </tbody>
                    </table> 
                </div>
            </div>
            <div className="pt-4 justify-center">
                <p className="text-5xl text-center underline p-3">Classes</p>
                <div className='flex justify-center'>
                    <table className="table-auto justify-center border-spacing-2">
                        <thead>
                            <tr className="border-b-2">
                                <th className="px-2">Class Name</th>
                                <th className="px-2">Teacher</th>
                                <th className="px-2">Class Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderedClasses}
                        </tbody>
                    </table>
                </div>
                <form>
                <div className={`p-2 ${toggleDropdown ? "flex" : "hidden"} justify-center`}>
                    <label className="pr-2">Class Code:</label>
                    <input className="border border-2 text-center rounded border-indigo-300" onChange={(event)=> {setNewClassCodeText(event.target.value)}} value={newClassCodeText} type="text" required />
                    <span className={`flex justify-center border rounded-full mx-2 px-1 bg-green-500 text-lg ${validCode ? "" : "hidden"}`}><button onClick={handleJoinClass}><BiCheck/></button></span>
                    <span className="flex justify-center border rounded-full bg-red-500 px-1 text-lg"><button onClick={handleJoinClassDropdown}><RxCross2/></button></span>
                </div>
            </form>
                <div className={`${toggleDropdown ? "hidden" : "flex"} justify-center p-4`}>
                    <Button onClick={handleJoinClassDropdown} primary outline rounded>Join Class</Button>
                </div>
            </div>
        </div>
    )
}

export default StudentAssignments;