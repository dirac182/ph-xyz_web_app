import { Link } from "react-router-dom";

function RegisterPage () {

    return (
        <div>
            <div class="diagonal-line">
                <Link to="http://localhost:5002/auth/google?role=teacher"><button className="border-4">Register as Teacher</button></Link>
                <Link to="http://localhost:5002/auth/google?role=student"><button className="border-4">Register as Student</button></Link>
            </div>
        </div>
        
        
    )
}

export default RegisterPage;