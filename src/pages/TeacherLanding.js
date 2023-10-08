import AssignmentTable from "../components/AssignmentTable";
import Button from "../components/Misc/Button";
import Link from "../components/Misc/Link";
import useDataContext from "../hooks/use-data-context";
import { useEffect } from "react";

function TeacherLanding() {
    const { fetchAssignments } = useDataContext();

    useEffect(()=> {
        fetchAssignments();
    },[])

    const data = [
        {edit:"button", name: "Kinematics", skills: "Circular Motion",type:"assignment", status: "posted", dueDate: "Jun 15, 2022 at 08:00 am" },
        {edit:"button", name: "Dynamics", skills: "Motion",type:"assignment", status: "Not posted", dueDate: "Jun 15, 2022 at 09:00 am" },
        {edit:"button", name: "Torque", skills: "Circular ",type:"Quiz", status: "posted", dueDate: "Jun 15, 2022 at 10:00 am" },
        {edit:"button", name: "Kinematics", skills: "Circular Motion",type:"assignment", status: "posted", dueDate: "Jun 15, 2022 at 12:00 am" },
    ]

    const handleCreateAssignment = () => {

    }

    return(
        <div className="flex min-h-screen flex-col p-8 -center">
            <div className="flex justify-center">
                <p className="text-5xl">Assignment List</p>
            </div>
            <div className="flex justify-center py-6">
                <AssignmentTable data={data} />
            </div>
            <div className="flex justify-center">
                <Link to="/app/teacher/create">
                <Button onClick={handleCreateAssignment} primary rounded submit>Create Assignment</Button>
                </Link>
            </div>
        </div>
    )
}

export default TeacherLanding;