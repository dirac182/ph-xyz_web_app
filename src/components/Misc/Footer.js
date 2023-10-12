import {GiUnbalanced} from "react-icons/gi"
import { Link } from 'react-router-dom';
import { useState } from "react";

function Footer() {
    const year = new Date()
    const [thisYear, setThisYear] =useState(year.getFullYear())

    return (
        <div className="pt-2">
            <footer className="flex flex-wrap bg-indigo-700 h-16 justify-between text-center">
                <a href="/">
                    <div className="relative left-16 flex content-center pt-3 items-center text-5xl text-white cursor-pointer">
                        <GiUnbalanced className="relative right-2 bottom-3" />
                        <div className="pr-2 border-indigo-500 border-l-2">
                            <p className="relative ml-2 text-center" >ph-ZYX</p>
                        </div>
                    </div>
                </a>
                <span className="flex items-center">
                    <p>© {thisYear} ZYX inc.</p>
                </span>
                <span className="flex items-center">   
                    <Link className="no-underline text-indigo-100 text-xl px-3" to="/demo/teacher">Privacy Policy</Link>
                    <p className="text-xl">|</p>
                    <Link className="no-underline text-indigo-100 text-xl px-3" to="/demo/student">Terms of Service</Link>
                </span>
            </footer>
        </div>
        
    )
}

export default Footer;