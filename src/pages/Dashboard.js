import { useSelector } from "react-redux";
import TeacherClassrooms from "../components/Misc/TeacherClassrooms";
import AssignmentTable from "../components/AssignmentTable";
import StudentAssignments from "../components/Misc/StudentAssignments";

function TeacherDashboard() {
    const userFirstName = useSelector(state => state.user.firstName)
    const userLastName = useSelector(state => state.user.lastName)
    const userEmail = useSelector(state => state.user.userEmail)
    const isTeacher = useSelector(state => state.user.isTeacher);

    const tOrS = isTeacher ? "Teacher" : "Student"

    const renderedAccountInfo = <div className="flex flex-col text-center py-5">
        <div className=""><p className="text-5xl text-center underline pb-3">Account Info</p></div>
        <div>Name: {userFirstName} {userLastName}</div>
        <div>Email: {userEmail}</div>
        <div>{tOrS}</div>
    </div>

    const renderedDashboard = isTeacher 
    ? <div className="flex flex-col justify-around">
        <div className="flex justify-center pb-5"><TeacherClassrooms/></div>
        <hr/>
        <div className="flex justify-center my-20"><AssignmentTable/></div>
        <hr/>
        {renderedAccountInfo}
    </div>
    :<div>
        <div className="p-4"><StudentAssignments/></div>
        {renderedAccountInfo}
    </div>

    return (
        <div>
            <div className="p-6 text-3xl">Welcome {userFirstName}!</div>
            {renderedDashboard}
        </div>
    )
}

export default TeacherDashboard;