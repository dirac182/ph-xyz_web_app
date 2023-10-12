import React from "react";
import Button  from "./Button.js";
import { Link } from 'react-router-dom';
import {GiUnbalanced} from "react-icons/gi"
import {HiMenu} from "react-icons/hi"
import { useState } from "react";

function MyNavbar () {
    const [menuToggle, setMenuToggle] = useState(false);

    const toggleMobileMenu = () => {
        setMenuToggle(!menuToggle);
        console.log("Click");
    }

    return(
<div className="relative h-20 flex flex-wrap justify-between items-center bg-white shadow-lg shadow-indigo-500/40">
    <a href="/" className="relative left-10 flex content-center items-center text-6xl text-indigo-500 cursor-pointer">
        <GiUnbalanced className="relative right-2 bottom-3" />
        <div className="pr-2 border-indigo-500 border-l-2">
            <p className="relative top-2 ml-2 text-center">ph-ZYX</p>
        </div>
    </a>

    {/* Desktop Menu */}
    <span className="hidden md:flex items-center">
        <Link className="no-underline text-indigo-500 text-xl px-3" to="/app/teacher">Teacher Demo</Link>
        <p className="text-xl">|</p>
        <Link className="no-underline text-indigo-500 text-xl px-3" to="/app/student">Student Demo</Link>
        <p className="text-xl">|</p>
        <Link className="no-underline text-indigo-500 text-xl px-3" to="/about">About</Link>
        <p className="text-xl">|</p>
        <Link className="no-underline text-indigo-500 text-xl px-3" to="/faq">FAQ</Link>
    </span>

    <span className="hidden md:flex w-34 h-10 items-center pr-6">
        <Button className="h-8 w-23 text-sm mx-2" primary>Login</Button>
        <Button className="h-8 w-26 text-sm mx-2" primary outline>Sign Up</Button>
    </span>

    {/* Mobile Menu - Hamburger Icon (You'll need to handle its functionality) */}
    <button className="md:hidden flex items-center text-5xl" onClick={toggleMobileMenu}>
        <HiMenu />
    </button>

    {/* Mobile Dropdown (Hidden initially and shown on hamburger click) */}
    <div className={`absolute top-full left-0 w-full bg-white ${menuToggle ? 'block' : 'hidden'}`} id="mobileMenu">
        <Link className="block py-2 px-4 no-underline text-indigo-500" to="/demo/teacher">Teacher Demo</Link>
        <Link className="block py-2 px-4 no-underline text-indigo-500" to="/demo/student">Student Demo</Link>
        <Link className="block py-2 px-4 no-underline text-indigo-500" to="/about">About</Link>
        <Link className="block py-2 px-4 no-underline text-indigo-500" to="/faq">FAQ</Link>
        <div className="flex flex-col justify-around py-2 px-4">
            <Button className="h-8 w-full text-sm mx-2" rounded primary>Login</Button>
            <Button className="h-8 w-full text-sm mx-2" rounded primary outline>Sign Up</Button>
        </div>
    </div>
</div>
  )
};


export default MyNavbar;