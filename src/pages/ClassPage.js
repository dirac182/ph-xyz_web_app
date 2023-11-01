import { useParams } from 'react-router-dom';
import { useFetchClassByIdQuery } from '../store';

function ClassPage () {
    const { userId, classId } = useParams(); 
    const {data,error,isFetching} = useFetchClassByIdQuery(classId);

    let renderedClass;
    let renderedAssignmentsList
    if (isFetching){
        renderedClass = <div>Fetching Classroom</div>
    }else if (error){
        console.log(error)
        renderedClass = <div>Error Loading Class</div>
    } else if (data){
        console.log(data.cls)
        const classData = data.cls
        renderedAssignmentsList = classData.assignments.map((a,index) => {
            return (
                <div key={index}>
                    {a.assignmentName}
                </div>
            )
        })
        renderedClass = <div>
            <div>{classData.className}</div>
        </div>

    }

    return (
        <div>
            {renderedClass}
            {renderedAssignmentsList}
        </div>
    )
}
export default ClassPage