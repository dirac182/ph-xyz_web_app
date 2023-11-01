import { Link } from "react-router-dom";
import chalkBackground from "../images/chalk.jpg";
import Button from "../components/Misc/Button";
import teacherImage from "../images/teacher.jpg"
import studentimage from "../images/student.png"
import { useEffect, useState } from "react";
import Modal from "../components/Misc/Modal";
import {AiOutlineGoogle} from "react-icons/ai";
import { useCheckJoinCodeMutation } from "../store";

function RegisterPage () {
    const [showModal, setShowModal] = useState(false);
    const [classCodeText,setClassCodetext] = useState("")
    const [checkJoinCode, { data, isLoading }] = useCheckJoinCodeMutation();
    const [validCode, setValidCode] = useState(null);

    useEffect(() => {
        if (classCodeText.length === 6){
            checkJoinCode(classCodeText);
        } else if ( classCodeText.length < 6){
            setValidCode(false);
        }
    },[classCodeText])

    useEffect(() => {
        console.log(data)
        if(data === true){
            setValidCode(true)
        } else if (data === false){
            setValidCode(false)
        }
    },[data,isLoading])

    const toggleModal = () => {
        setShowModal(true)
    }
    const handleModalClose = () => {
        setShowModal(false)
    }

    const actionBar = <div className={`${validCode ? "flex" : "hidden"}`}>
        <Link to={`http://localhost:5002/auth/google?role=student&classCode=${classCodeText}`}><Button primary><span className={"text-lg pr-2"}><AiOutlineGoogle/></span>| Register as Student</Button></Link>
        </div>
    const modal = <Modal onClose={handleModalClose} actionBar={actionBar} >
        <p className="text-2xl">Create a Student Accound through Google!</p>
        <p>Please enter a valid class code:</p>
        <div className={`w-2/5 p-2 border-2 ${classCodeText.length < 6  ? "border-black" : validCode ? "border-green-500" : "border-red-500"}`}>
            <input className={`w-full p-1`} type="text" onChange={(event) => {setClassCodetext(event.target.value)}} value={classCodeText} maxLength="6" placeholder="Enter Code"/>  
        </div>
         </Modal>;

    const backgroundStyle = {
        backgroundImage: `url(${chalkBackground})`,
        backgroundSize: 'cover', // This ensures the image covers the whole area
        backgroundPosition: 'center', // This centers the image
        width: '100vw' // Adjust the width as needed
    };

    return (
<div style={backgroundStyle} className="flex justify-center items-center min-h-screen">
    <div className="flex flex-col md:flex-row w-full">
        <div className="flex flex-col items-center justify-center w-full p-6">
            <div className="md:w-1/2 md:h-4/5 w-2/5 h-3/5 rounded-full overflow-hidden">
                <img className="w-full h-full object-cover" src={teacherImage}/>
            </div>
            <div className="flex flex-col items-center w-4/5 bg-white p-4 rounded-full">
                <label className="md:text-3xl text-xl text-center p-2">Register as a Teacher</label>
                <Link to="http://localhost:5002/auth/google?role=teacher"><Button primary rounded>Teacher Signup</Button></Link> 
            </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full p-6">
            <div className="md:w-1/2 md:h-4/5 w-2/5 h-3/5 rounded-full overflow-hidden">
                <img className="w-full h-full object-cover" src={studentimage}/>
            </div>
            <div className="flex flex-col items-center w-4/5 bg-white p-4 rounded-full">
                <label className="md:text-3xl text-xl text-center p-2">Register as a Student</label>
                <Button onClick={toggleModal} primary rounded >Student Signup</Button>
            </div>
        </div>
    </div>
    {showModal && modal}
</div>
        
        
    )
}

export default RegisterPage;