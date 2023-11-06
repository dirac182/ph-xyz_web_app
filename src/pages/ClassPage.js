import { useParams } from 'react-router-dom';
import { useFetchClassByIdQuery } from '../store';
import { Link } from 'react-router-dom';
import Button from '../components/Misc/Button';
import { FiChevronLeft } from "react-icons/fi";

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

            const assignmentGrade = classData.assignments.map(a => {
                const b = student.studentAssignmentInfo.map((el, index) => {
                    if (el.assignmentId === a._id){
                        return (
                            <th className="px-2" key={index}>
                                {el.grade}
                            </th>
                        )
                    }
                })
                return b
            })
            console.log(assignmentGrade)

            return(
                <tr className="border-b text-center" key={student._id}>
                    <td className="p-2">{student.firstName}</td>
                    <td className="p-2">{student.lastName}</td>
                    <td className="p-2">{student.username}</td>
                    {assignmentGrade}
                </tr>
            )
        })

    }

    return (
        <div className=''>
            <div className=" px-5 pt-5">
               <Link to={`/dashboard/${userId}`} ><Button primary outline rounded><FiChevronLeft/> Back</Button></Link>
            </div>
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