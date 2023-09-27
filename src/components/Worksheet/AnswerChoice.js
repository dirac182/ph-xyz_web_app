import { useEffect, useRef, useState } from "react";


function AnswerChoice({children,questionIndex,answerIndex,setAnswerData,answerData,...rest}) {
    // const [checked, setChecked] = useState(false)
    const isChecked = useRef(false)

    useEffect(() => {
        console.log(answerData[questionIndex], questionIndex) 
        if(answerData[questionIndex] === null || answerData[questionIndex] !== answerIndex ){
            console.log("Made Loop")
            isChecked.current = false;
            
        } 
       },[answerData])


    const handleChange = (bool) => {
        isChecked.current = !isChecked.current
        if(isChecked.current === true) {
            setAnswerData(questionIndex,answerIndex)
        } else if (isChecked.current === false) {
            console.log(answerIndex)
            setAnswerData(questionIndex,null);
        }
    }
    
    return(
        <div {...rest} onClick={handleChange} className=" flex p-3 font-normal bg-gray-50 hover:bg-indigo-300 border-2 border-indigo-500 items-center cursor-pointer">
            <input onChange={handleChange} checked={isChecked.current} type="checkbox"/>
            <p className="pl-2" >{children}</p>
        </div>
    )
}

export default AnswerChoice;