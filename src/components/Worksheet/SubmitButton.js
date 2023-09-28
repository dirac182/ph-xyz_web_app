import Button from "../Misc/Button";

function SubmitButton({isCorrect, questionSubmit , onClick, qIndex}) {
    
    const regenerateProblem = () => {

    }

    const renderedButton = isCorrect[qIndex] === 0    
    ?<div>
    <button onClick={regenerateProblem} className={"hidden flex items-center justify-center px-3 py-1.5 border border-indigo-500 bg-indigo-500 text-white rounded-full shadow-lg shadow-indigo-500/40 hover:bg-indigo-700"}>Try again!</button>
    </div>
    : isCorrect[qIndex] === 1 
    ? <div className=""></div>
    : <div>
        <button onClick={onClick} className={"flex items-center justify-center px-3 py-1.5 border border-indigo-500 bg-indigo-500 text-white rounded-full shadow-lg shadow-indigo-500/40 hover:bg-indigo-700"}>Submit Answer</button>
    </div>
 
    return (
        <div>
            {renderedButton}
        </div>
    )
}

export default SubmitButton;


// <Button onClick={questionSubmit} qIndex={qIndex} primary rounded submit>Submit Answer</Button>