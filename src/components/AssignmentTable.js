import useDataContext from "../hooks/use-data-context";
import {BiEditAlt} from "react-icons/bi";

function AssignmentTable ({data}) {
    const { assignments } = useDataContext();
    
    const renderedRows = assignments.map((assignment) => {
        const isQuiz = assignment.quiz ? "Quiz" : "Assignment";
        const isPosted = assignment.status ? "Posted" : "NotPosted";

        return(
            <tr className="border-b" key={assignment._id}>
                <td className="p-3"><BiEditAlt/></td>
                <td className="p-3">{assignment.assignmentName}</td>
                <td className="p-3">{isQuiz}</td>
                <td className="p-3">{isQuiz}</td>
                <td className="p-3">{isPosted}</td>
                <td className="p-3">{assignment.dueDate}</td>
            </tr>
        )
    })

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
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    )
}

export default AssignmentTable