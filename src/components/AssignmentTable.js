import {BiEditAlt, BiSpreadsheet, BiTrash} from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { useFetchAssignmentsQuery, useDeleteAssignmentMutation, useFetchQuestionByTopicMutation } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { edit, setQuestionSet } from "../store";
import { useFetchAllQuestionIDsQuery } from "../store";

function AssignmentTable () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.assignment.userId)
    const questionArray = useSelector(state => state.workpage.questionArray)
    const {data,error,isFetching} = useFetchAssignmentsQuery(user);
    
    const [deleteAssignment, { isFetchingDelete, isErrorDelete, dataDelete }] = useDeleteAssignmentMutation();
    const [fetchQuestion, {isFetchingQuestion, isErrorQuestion, questionData}] = useFetchQuestionByTopicMutation();

    // if (isFetchingQ) {
    //     console.log("Fetching QIDs");
    // } else if (QError) {
    //     console.log("Error fetching QIDs");
    // } else if (QData) {
    //     console.log(QData);
    // }
    

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
                var hour = assignment.timeHr;
                var isPm = assignment.isPm;
                var minute = assignment.timeMin;
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
            const handleAssignmentClick = () => {
                dispatch(setQuestionSet(assignment.questionSet));
                navigate("/app/student");
            }
            //Handles date format
            // const yearString = assignment.dueDate.slice(0,4);
            // const monthString = assignment.dueDate.slice(5,7);
            // const dayString = assignment.dueDate.slice(8,10);
            // const isPmText = assignment.isPm ? "AM" : "PM"

        return(
            <tr className="border-b" key={assignment._id}>
                <td className="p-3"><Link to={`/app/teacher/edit/${assignment.userID}/${assignment.assignmentID}`}><button onClick={handleEditClick}><BiEditAlt/></button></Link></td>
                <td className="p-3"><p className="cursor-pointer hover:underline" onClick={handleAssignmentClick}>{assignment.assignmentName}</p></td>
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