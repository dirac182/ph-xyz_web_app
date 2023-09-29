

function AssignmentTable ({data}) {
    
    const renderedRows = data.map((assignment) => {
        return(
            <tr className="border-b" key={assignment.dueDate}>
                <td className="p-3">{assignment.edit}</td>
                <td className="p-3">{assignment.name}</td>
                <td className="p-3">{assignment.skills}</td>
                <td className="p-3">{assignment.type}</td>
                <td className="p-3">{assignment.status}</td>
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