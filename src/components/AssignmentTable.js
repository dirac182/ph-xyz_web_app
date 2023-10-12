import useDataContext from "../hooks/use-data-context";
import {BiEditAlt, BiSpreadsheet} from "react-icons/bi";
import Link from "./Misc/Link";
import { useFetchAssignmentsQuery } from "../store";
import { useSelector } from "react-redux";

function AssignmentTable () {
    const { assignments } = useDataContext();
    const user = useSelector(state => state.assignment.userId)
    const {data,error,isFetching} = useFetchAssignmentsQuery(user);

    const handleEditButton = () => {

    }

    let renderedRows;
    if(isFetching) {
        renderedRows = <div>Fetching</div>
    } else if (error) {
        renderedRows = <div>Error Loading Albums</div>
    } else {
        renderedRows = data.map((assignment) => {
            const isQuiz = assignment.quiz ? "Quiz" : "Assignment";
            const isPosted = assignment.status ? "Posted" : "NotPosted";

        return(
            <tr className="border-b" key={assignment._id}>
                <td className="p-3"><button onClick={handleEditButton}><BiEditAlt/></button></td>
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
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    )
}

export default AssignmentTable