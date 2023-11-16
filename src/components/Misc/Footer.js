import {GiUnbalanced} from "react-icons/gi"
import { Link } from 'react-router-dom';

function Footer() {
    const year = new Date().getFullYear()

    return (
        <div className="">
            <footer className="flex md:flex-wrap bg-indigo-700 justify-around text-center">
                <span className="">
                    <a href="/" className="flex left-10 content-center items-center lg:text-6xl text-4xl ml-6 text-white cursor-pointer">
                        <GiUnbalanced className="relative right-2 bottom-1" />
                        <div className=" pr-2 border-white border-l-2">
                            <p className="relative top-2 ml-2 text-center">ph-ZYX</p>
                        </div>
                    </a>
                </span>
                <span className="hidden md:flex items-center">
                    <p>© {year} ZYX inc.</p>
                </span>
                <span className="flex items-center m-5">   
                    <Link className="no-underline text-indigo-100 md:text-xl px-3" to="/demo/teacher">Privacy Policy</Link>
                    <p className="text-xl">|</p>
                    <Link className="no-underline text-indigo-100 md:text-xl px-3" to="/demo/student">Terms of Service</Link>
                </span>
            </footer>
        </div>
    )
}

export default Footer;