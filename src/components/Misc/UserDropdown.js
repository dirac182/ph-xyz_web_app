import { BiUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function UserDropdown() {
    const userFirstName = useSelector(state => state.user.firstName); 
    const isTeacher = useSelector(state => state.user.isTeacher);
    const userId = useSelector(state => state.user.userId);
    const dashboardLink = isTeacher ? `/dashboard/${userId}` : `/dashboard/${userId}`

    return(
        <div className="flex flex-col relative">
            <div className="user-dropdown relative p-2 text-xl border-2 border-indigo-500 relative cursor-pointer">
                <span className="flex justify-center items-center"><span className="pr-1 text-xl"><BiUserCircle/></span> {userFirstName} </span>
            </div>
            <div className="user-dropdown-panel absolute hidden">
                <Link to={dashboardLink}><div className="flex p-2 border-b cursor-pointer hover:underline"> Dashboard</div></Link>
                <Link to="http://localhost:5002/user/logout"><div className="flex p-2 cursor-pointer hover:underline"> Logout</div></Link>
            </div>
        </div>
    )
}

export default UserDropdown;