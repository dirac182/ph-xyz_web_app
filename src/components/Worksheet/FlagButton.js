import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsFlagged } from "../../store";

function FlagButton({children, ...rest}) {
    const dispatch = useDispatch();
    const [clickedToggle, setClickToggle] = useState(false)
    const workpageData = useSelector(state => state.workpage.workpageData);
    const topicIndex = useSelector(state => state.workpage.topicIndex);
    const questionIndex = useSelector(state => state.workpage.questionIndex); 

    const handleClick = () => {
        setClickToggle(!clickedToggle);
        dispatch(setIsFlagged(!clickedToggle))
    }

    useEffect(()=> {
        if(workpageData[topicIndex][questionIndex].isFlagged) {
            setClickToggle(true);
        } else {
            setClickToggle(false);
        }
    },[topicIndex, questionIndex])

    const classes = clickedToggle ? "flex items-center justify-center px-3 py-1.5 rounded border-2 border-red-700 bg-red-500" : "flex items-center justify-center px-3 py-1.5 rounded border-2 border-gray-400"

    return(
        <div>
            <button onClick={handleClick} {...rest} className={classes} >{children}</button>
        </div>
        
    )
}
export default FlagButton;