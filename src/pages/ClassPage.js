import { useParams } from 'react-router-dom';
import { useFetchClassByIdQuery } from '../store';

function ClassPage () {
    const { userId, classId } = useParams(); 
    const {data,error,isFetching} = useFetchClassByIdQuery(classId);

    let renderedClassName;
    let renderedAssignmentsTable;
    let renderedStudents;
    if (isFetching){
        renderedClassName = <div>Fetching Classroom</div>
    }else if (error){
        console.log(error)
        renderedClassName = <div>Error Loading Class</div>
    } else if (data){
        console.log(data.cls)
        const classData = data.cls
        renderedAssignmentsTable = classData.assignments.map((a,index) => {
            return (
                <th className="px-2" key={index}>
                    {a.assignmentName}
                </th>
            )
        })
        renderedClassName = <div>
            <p className="text-4xl p-6">Classroom: {classData.className}</p>
        </div>
        renderedStudents = classData.students.map(student => {
            return(
                <tr className="border-b text-center" key={student._id}>
                    <td className="p-2">{student.firstName}</td>
                    <td className="p-2">{student.lastName}</td>
                    <td className="p-2">{student.username}</td>
                </tr>
            )
        })

    }

    return (
        <div className=''>
            {renderedClassName}
            <div className='flex justify-center'>
                <table className="table-auto justify-center border-spacing-2">
                    <thead>
                        <tr className="border-b-2">
                            <th className="px-2">First Name</th>
                            <th className="px-2">Last Name</th>
                            <th className="px-2">Email</th>
                            {renderedAssignmentsTable}
                        </tr>
                    </thead>
                    <tbody>
                        {renderedStudents}
                    </tbody>
                </table> 
            </div>
        </div>
    )
}
export default ClassPage