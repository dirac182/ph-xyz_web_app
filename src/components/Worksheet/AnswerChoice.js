import { useEffect, useRef, useState } from "react";


function AnswerChoice({children,questionIndex,answerIndex,setAnswerData,answerData,...rest}) {
    const [isChecked, setIsChecked] = useState(false)
    // const isChecked = useRef(false)

    useEffect(() => {
        if(answerData[questionIndex] === null || answerData[questionIndex] !== answerIndex ){
            setIsChecked(false)
        } 
       },[answerData])

    useEffect(() => {
        if(answerData[questionIndex] === answerIndex){
            setIsChecked(true);
        }
    },[questionIndex])

    const handleChange = () => {
        setIsChecked(!isChecked)
        if(isChecked === true) {
            setAnswerData(questionIndex,null)
        } else if (isChecked === false) {
            console.log(answerIndex)
            setAnswerData(questionIndex,answerIndex);
        }
    }

    const classes = isChecked ? "bg-indigo-300 flex p-3 font-normal border-2 border-indigo-500 items-center cursor-pointer" : "flex p-3 font-normal bg-gray-50 hover:bg-indigo-300 border-2 border-indigo-500 items-center cursor-pointer"

    
    return(
        <div {...rest} onClick={handleChange} className={classes}>
            <input onChange={handleChange} checked={isChecked} type="checkbox"/>
            <p className="pl-2" >{children}</p>
        </div>
    )
}

export default AnswerChoice;