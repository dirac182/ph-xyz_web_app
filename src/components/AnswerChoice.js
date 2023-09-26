

function AnswerChoice({children,index,onClick,...rest}) {

    return(
        <div className=" flex p-3 font-normal bg-gray-50 hover:bg-indigo-300 border-2 border-indigo-500 items-center cursor-pointer">
            <input type="checkbox"/>
            <p className="pl-2">{children}</p>
        </div>
    )
}

export default AnswerChoice;