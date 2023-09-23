import React from "react";
import Button  from "./Button.js";
import Link from "./Link.js";

function Navbar () {
    return(
    <div className="h-20 flex justify-between items-center bg-white shadow-md">
        <span className="pl-16">
            <a href="/">
            <img src="./images/logo_indigo.png" href="/" width="200" height="175" alt="Site Logo"/>
            </a>
        </span>
        <span className="flex items-center">
            
            <Link className="no-underline text-indigo-500 text-xl px-3" to="/demo">Demo</Link>
            <p className=" text-xs pt-3">|</p>
            <Link className="no-underline text-indigo-500 text-xl px-3" to="/about">About</Link>
            <p className=" text-xs pt-3">|</p>
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