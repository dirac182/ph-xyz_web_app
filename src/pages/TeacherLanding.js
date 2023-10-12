import AssignmentTable from "../components/AssignmentTable";
import Button from "../components/Misc/Button";
import { Link } from 'react-router-dom';
import useDataContext from "../hooks/use-data-context";
import { useEffect } from "react";

function TeacherLanding() {
    const { fetchAssignments } = useDataContext();
    

    useEffect(()=> {
        fetchAssignments();
    },[])

    const handleCreateAssignment = () => {

    }

    return(
        <div className="flex min-h-screen flex-col p-8 -center">
            <div className="flex justify-center">
                <p className="text-5xl">Assignment List</p>
            </div>
            <div className="flex justify-center py-6">
                <AssignmentTable />
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