import React from "react";
import Button  from "./Button.js";
import { Link } from 'react-router-dom';
import {GiUnbalanced} from "react-icons/gi"
import {HiMenu} from "react-icons/hi"
import { useState, useEffect, useRef } from "react";
import Modal from "./Modal.js";
import {AiOutlineGoogle} from "react-icons/ai";
import { useSelector } from "react-redux";
import UserDropdown from "./UserDropdown.js";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useGetUserQuery, setUserState } from "../../store";

function MyNavbar () {
    const userId = useSelector(state => state.user.userId);
    const [hamburgerToggle, setHamburgerToggle] = useState(false);
    const [userToggle, setUserToggle] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const divEl = useRef();
    const dispatch = useDispatch()
    const {data,error,isFetching} = useGetUserQuery();

    useEffect(() => {
        if (isFetching){
            console.log("Fetching User Data")
        } else if (error){
            console.log(error)
            console.log("Error Fetching User Data")
        } else {
            if(data){
                console.log(data);
                dispatch(setUserState({id:data._id, email:data.username, firstName:data.firstName, lastName:data.lastName, isTeacher:data.isTeacher,studentClasses:data.studentClasses, studentAssignmentInfo: data.studentAssignmentInfo}))
            } else{
                console.log("NO ONE is logged in.")
            }
        }
    },[isFetching, error, data, dispatch])

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return;
            }
            if (!divEl.current.contains(event.target)){
                setUserToggle(false);
                setHamburgerToggle(false);
            }
        }
        document.addEventListener("click",handler, true);
        return () => {
            document.removeEventListener("click", handler);
        }
    }, []);

    const toggleHamburgerMenu = () => {
        setHamburgerToggle(!hamburgerToggle);
    }
    const toggleUserMenu = () => {
        setUserToggle(!userToggle);
    }

    const toggleModal = () => {
        setShowModal(true)
    }

    const handleModalClose = () => {
        setShowModal(false)
    }
    
    const actionBar = <div><Link to="https://www.ph-zyx.com//auth/google"><Button primary><span className="text-lg pr-2"><AiOutlineGoogle/></span>| Login with Google</Button></Link></div>
    const modal = <Modal onClose={handleModalClose} actionBar={actionBar} >
        <p>Already have an account? Login!</p> 
         </Modal>;

    return(
<div className="relative h-20 flex justify-between items-center bg-white shadow-lg shadow-indigo-500/40">
    <a href="/" className="hidden md:flex relative left-10 content-center items-center lg:text-6xl text-4xl text-indigo-500 cursor-pointer">
        <GiUnbalanced className="relative right-2 bottom-1" />
        <div className=" pr-2 border-indigo-500 border-l-2">
            <p className="relative top-2 ml-2 text-center">ph-ZYX</p>
        </div>
    </a>

    {/* Desktop Menu */}
    <span className="hidden md:flex items-center">
        <Link className="no-underline text-indigo-500 text-xl px-3 hover:underline" to="/app/teacher">Teacher Demo</Link>
        <p className="text-xl">|</p>
        <Link className="no-underline text-indigo-500 text-xl px-3 hover:underline" to="/app/student">Student Demo</Link>
        <p className="text-xl">|</p>
        <Link className="no-underline text-indigo-500 text-xl px-3 hover:underline" to="/about">About</Link>
        <p className="text-xl">|</p>
        <Link className="no-underline text-indigo-500 text-xl px-3 hover:underline" to="/faq">FAQ</Link>
    </span>

    <span className={`hidden md:flex w-34 h-10 items-center pr-6 ${userId ? 'md:hidden' : 'md:flex'}`}>
        <Button onClick={toggleModal} className="h-8 w-23 text-sm mx-2" primary>Login</Button>
        <Link to="/register"><Button className="h-8 w-23 text-sm mx-2" primary outline>Register</Button></Link>
    </span>
    <span className={`hidden user-icon w-34 h-10 items-center pr-6 ${userId ? 'md:flex' : 'md:hidden'} md:flex`}>
        <UserDropdown />
    </span>

    {/* Mobile */}
    <button className={`${userId ? 'flex' : 'hidden'} md:hidden flex items-center text-4xl pr-3`} onClick={toggleUserMenu}>
        <BiUserCircle />
    </button>
    
    <a href="/" className="md:hidden pl-5 flex content-center items-center md:text-5xl text-4xl text-indigo-500 cursor-pointer">
        <GiUnbalanced className="relative right-2 bottom-1" />
        <div className=" pr-2 border-indigo-500 border-l-2">
            <p className="relative top-2 ml-2 text-center">ph-ZYX</p>
        </div>
    </a>
    
    <button className="md:hidden flex items-center text-4xl pr-3" onClick={toggleHamburgerMenu}>
        <HiMenu />
    </button>

    {/* Mobile User dropdown menu */}
    <div ref={divEl} className={`${userToggle ? 'flex' : 'hidden'} md:hidden text-2xl flex-col absolute top-full left-0 bg-white `} >
        <Link className="py-2 px-4 text-indigo-500" to={`/dashboard/${userId}`}><button onClick={()=> setUserToggle(false)}>Dashboard</button></Link>
        <Link className="py-2 px-4 text-indigo-500" to="https://www.ph-zyx.com//user/logout"><button onClick={()=> setUserToggle(false)}>Logout</button></Link>
    </div>


    {/* Mobile hamburger Dropdown (Hidden initially and shown on hamburger click) */}
    <div ref={divEl} className={`${hamburgerToggle ? 'flex' : 'hidden'} md:hidden text-2xl flex-col absolute top-full right-0 bg-white `} >
        <Link className="py-2 px-4 text-indigo-500" to="/app/teacher"><button onClick={()=> setHamburgerToggle(false)}>Teacher Demo</button></Link>
        <Link className="py-2 px-4 text-indigo-500" to="/demo/student"><button onClick={()=> setHamburgerToggle(false)}>Student Demo</button></Link>
        <Link className="py-2 px-4 text-indigo-500" to="/about"><button onClick={()=> setHamburgerToggle(false)}>About</button></Link>
        <Link className="py-2 px-4 text-indigo-500" to="/faq"><button onClick={()=> setHamburgerToggle(false)}>FAQ</button></Link>
        <div className={`${userId ? 'hidden' : 'flex'} flex-col justify-around py-2 px-4 `}>
            <Button onClick={toggleModal} className="h-8 w-full text-sm mx-2" rounded primary>Login</Button>
            <Link to="/register"><Button className="h-8 w-full text-sm mx-2" rounded primary outline>Register</Button></Link>
        </div>
    </div>
    {showModal && modal}
</div>
  )
};


export default MyNavbar;