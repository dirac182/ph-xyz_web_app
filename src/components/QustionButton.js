

function QuestionButton({index,onClick,...rest}) {

    const handleClick = () => {
        onClick(index)
    }

    return(
        <div className="flex items-center align-center">
            <button onClick={handleClick} {...rest} className="px-4 py-2 bg-gradient-to-b text-indigo-100 from-indigo-700 via-indigo-500 to-indigo-400 shadow-lg text-xl border-2 rounded-full border-indigo-500 focus:ring focus:ring-gray-500">{index+1}</button>
         </div>
    )
}

export default QuestionButton;