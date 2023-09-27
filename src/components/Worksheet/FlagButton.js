import { useEffect, useState} from "react";

function FlagButton({children,index,flagOn,flagOff,flaggedIndex,...rest}) {
    const [clickedToggle, setClickToggle] = useState(false)

    const handleClick = () => {
        if(!clickedToggle) {
            flagOn(index)
        } else {
            flagOff(index)
        }
        setClickToggle(!clickedToggle);
    }

    useEffect(()=> {
        if(flaggedIndex.includes(index)) {
            setClickToggle(true);
        } else {
            setClickToggle(false);
        }
    },[index])

    const classes = clickedToggle ? "flex items-center justify-center px-3 py-1.5 rounded border-2 border-red-700 bg-red-500" : "flex items-center justify-center px-3 py-1.5 rounded border-2 border-gray-400"

    return(
        <div>
            <button onClick={handleClick} {...rest} className={classes} >{children}</button>
        </div>
        
    )
}
export default FlagButton;