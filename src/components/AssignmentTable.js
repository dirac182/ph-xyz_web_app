import useDataContext from "../hooks/use-data-context";
import {BiEditAlt, BiSpreadsheet} from "react-icons/bi";
import Button from "./Misc/Button";
import Link from "./Misc/Link";

function AssignmentTable () {
    const { assignments } = useDataContext();

    const handleEditButton = () => {

    }
    
    const renderedRows = assignments.map((assignment) => {
        const isQuiz = assignment.quiz ? "Quiz" : "Assignment";
        const isPosted = assignment.status ? "Posted" : "NotPosted";

        return(
            <tr className="border-b" key={assignment._id}>
                <td className="p-3"><Link to="/app/teacher/create"><button onClick={handleEditButton}><BiEditAlt/></button></Link></td>
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