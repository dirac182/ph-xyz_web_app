import {BiEditAlt, BiSpreadsheet, BiTrash} from "react-icons/bi";
import { Link } from 'react-router-dom';
import { useFetchAssignmentsQuery, useDeleteAssignmentMutation } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { edit } from "../store";

function AssignmentTable () {
    const dispatch = useDispatch();
    const user = useSelector(state => state.assignment.userId)
    const {data,error,isFetching} = useFetchAssignmentsQuery(user);
    const [deleteAssignment, { isFetchingDelete, isErrorDelete, dataDelete }] = useDeleteAssignmentMutation();

    let renderedRows;
    if(isFetching) {
        renderedRows = <tr><td><div>Fetching</div></td></tr>
    } else if (error) {
        renderedRows = <tr><td><div>Error Loading Albums</div></td></tr>
    } else {
        renderedRows = data.map((assignment) => {
            const isQuiz = assignment.quiz ? "Quiz" : "Assignment";
            const isPosted = assignment.status ? "Posted" : "NotPosted";

            const handleEditClick = () => {
                var day = assignment.dueDate
                var date = day.slice(0,10);
                var hour = 11
                var isPm = true
                var minute = parseInt(day.slice(14,16));
                if (parseInt(day.slice(11,13)) > 12){
                    hour = parseInt(day.slice(11,13)) - 12;
                    isPm = true;
                } else{
                    hour = parseInt(day.slice(11,13));
                    isPm = false;
                }
                dispatch(edit({
                    assignmentId: assignment.assignmentID,
                    assignmentName: assignment.assignmentName,
                    tqPair: assignment.tqPair,
                    isQuiz: assignment.quiz,
                    timeLimit: assignment.timeLimit,
                    dueDate: date,
                    timeHr: hour,
                    timeMin: minute,
                    isPm: isPm,
                }))
                console.log(assignment.tqPair)
            }
            const handleDeleteClick = () => {
                const data = {userId:user, assignmentId: assignment.assignmentID};
                deleteAssignment(data);
            }

        return(
            <tr className="border-b" key={assignment._id}>
                <td className="p-3"><Link to={`/app/teacher/edit/${assignment.userID}/${assignment.assignmentID}`}><button onClick={handleEditClick}><BiEditAlt/></button></Link></td>
                <td className="p-3">{assignment.assignmentName}</td>
                <td className="p-3">
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
                <td className="p-3">{isQuiz}</td>
                <td className="p-3">{isPosted}</td>
                <td className="p-3">{assignment.dueDate}</td>
                <td className="p-3"><button onClick={handleDeleteClick}><BiTrash/></button></td>
            </tr>
        )
    })
}

    return(
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    <th>Edit</th>
                    <th>Assignment Name</th>
                    <th>Skills</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Due Date</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    )
}

export default AssignmentTable