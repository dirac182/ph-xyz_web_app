import React from "react";
import Button  from "./Button.js";
import Link from "./Link.js";
import {GiUnbalanced} from "react-icons/gi"
import Route from "./Route.js";
import Landing from "../../pages/Landing.js";

function Navbar () {
    

    return(
    <div className="h-20 flex flex-wrap justify-between items-center bg-white shadow-lg shadow-indigo-500/40">
        <a href="/">
        <div className="relative left-16 flex content-center items-center text-6xl text-indigo-500 cursor-pointer">
                <GiUnbalanced className="relative right-2 bottom-3" />
                <div className="pr-2 border-indigo-500 border-l-2">
                    <p className="relative top-2 ml-2  text-center" >ZYX</p>
                </div>
        </div>
        </a>
        <span className="flex items-center">   
            <Link className="no-underline text-indigo-500 text-xl px-3" to="/demo/teacher">Teacher Demo</Link>
            <p className="text-xl">|</p>
            <Link className="no-underline text-indigo-500 text-xl px-3" to="/demo/student">Student Demo</Link>
            <p className="text-xl">|</p>
            <Link className="no-underline text-indigo-500 text-xl px-3" to="/about">About</Link>
            <p className="text-xl">|</p>
            <Link className="no-underline text-indigo-500 text-xl px-3" to="/faq">FAQ</Link> 
        </span>
        <span className=" w-34 h-10 flex items-center pr-6">
            <Button className="h-8 w-23 text-sm mx-2" primary >Login</Button>
            <Button className="h-8 w-26 text-sm mx-2" primary outline>Sign Up</Button>
        </span>
    </div>
  )
};


export default Navbar;