import {BiEditAlt, BiSpreadsheet, BiTrash} from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { useFetchAssignmentsQuery, useDeleteAssignmentMutation, useFetchQuestionByTopicMutation } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { edit, setQuestionSet, assignmentSetup } from "../store";
import { useFetchAllQuestionIDsQuery, reset } from "../store";
import Button from "./Misc/Button";

function AssignmentTable () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.userId)
    const questionArray = useSelector(state => state.workpage.questionArray)
    const {data,error,isFetching} = useFetchAssignmentsQuery(user);
    
    const [deleteAssignment, { isFetchingDelete, isErrorDelete, dataDelete }] = useDeleteAssignmentMutation();
    const [fetchQuestion, {isFetchingQuestion, isErrorQuestion, questionData}] = useFetchQuestionByTopicMutation();

    const handleCreateAssignment = () => {
        dispatch(reset());
    }
    
    let renderedRows;
    if(isFetching) {
        renderedRows = <tr><td><div>Fetching Assignments...</div></td></tr>
    } else if (error) {
        renderedRows = <tr><td><div>Error Loading Assignments</div></td></tr>
    } else {
        
        renderedRows = data.map((assignment) => {
            const isQuiz = assignment.quiz ? "Quiz" : "Assignment";
            const isPosted = assignment.status ? "Posted" : "NotPosted";
            const isPmText = assignment.isPm ? "PM" : "AM"

            const handleEditClick = () => {
                var day = assignment.dueDate
                var date = day.slice(0,10);
                var hour = assignment.timeHr;
                var isPm = assignment.isPm;
                var minute = assignment.timeMin;
                dispatch(edit({
                    assignmentId: assignment._id,
                    assignmentName: assignment.assignmentName,
                    tqPair: assignment.tqPair,
                    isQuiz: assignment.quiz,
                    timeLimit: assignment.timeLimit,
                    dueDate: date,
                    timeHr: hour,
                    timeMin: minute,
                    isPm: isPm,
                    classes: assignment.classes
                }))
                console.log(assignment.tqPair)
            }
            const handleDeleteClick = () => {
                const data = {userId:user, assignmentId: assignment._id};
                deleteAssignment(data);
            }
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
                    classes: assignment.classes
                }))
                dispatch(setQuestionSet(assignment.questionSet));
                navigate(`/app/student/${assignment._id}`);
            }
            //Handles date format
            // const yearString = assignment.dueDate.slice(0,4);
            // const monthString = assignment.dueDate.slice(5,7);
            // const dayString = assignment.dueDate.slice(8,10);
            // const isPmText = assignment.isPm ? "AM" : "PM"

        return(
            <tr className="border-b text-center" key={assignment._id}>
                <td className="p-2"><Link to={`/app/teacher/edit/${assignment.userID}/${assignment._id}`}><button onClick={handleEditClick}><BiEditAlt/></button></Link></td>
                <td className="p-2"><p className="cursor-pointer hover:underline" onClick={handleAssignmentClick}>{assignment.assignmentName}</p></td>
                <td className="p-2">
                    <div className="relative">
                        <div className="skills-icon text-xl">
                            <span><BiSpreadsheet/></span>
                        </div>
                        <div className="skills-list hidden">
                            <table className="table-auto">
                                <thead>
                                    <tr className="border-b-2">
                                        <th>Skill</th>
                                        <th>Questions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {assignment.tqPair.map((skill, index) => (
                                    <tr className="border-b" key={index}>
                                        <td className="p-3">{skill.topic}</td>
                                        <td className="p-3">{skill.questions}</td>
                                    </tr>
                            ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </td>
                {/* <td className="p-2">{isQuiz}</td> */}
                <td className="p-2">{isPosted}</td>
                <td className="p-2">{assignment.dueDate.slice(0,10)} at {assignment.timeHr}:{assignment.timeMin} {isPmText}</td>
                <td className="p-2"><button onClick={handleDeleteClick}><BiTrash/></button></td>
            </tr>
        )
    })
}

    return(
        <div className=" max-w-2xl">
            <p className="text-5xl text-center underline pb-3">Assignment List</p>
           <table className="table-auto border-spacing-2">
                <thead>
                    <tr className="border-b-2">
                        <th className="p-2">Edit</th>
                        <th className="p-2">Assignment Name</th>
                        <th className="p-2">Skills</th>
                        {/* <th>Type</th> */}
                        <th className="p-2">Status</th>
                        <th className="p-2">Due Date</th>
                        <th className="p-2">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedRows}
                </tbody>
            </table>
            <div className="flex justify-center p-4">
                <Link to="/app/teacher/create">
                <Button onClick={handleCreateAssignment} primary outline rounded submit>Create Assignment</Button>
                </Link>
            </div> 
        </div>
        
    )
}

export default AssignmentTable