import JsxParser from 'react-jsx-parser';

function Solution({data}) {
    const jsxString = data;
    console.log(data);
    //This finds any LAtex after each render of whatever is in the parenthesis.
    // useEffect(()=>{
    //     if( typeof window?.MathJax !== "undefined"){
    //       window.MathJax.typesetClear()
    //       window.MathJax.typeset()
    //     }
    //   },[isCorrect])

    return (
        <div className="flex justify-center text-xl">
            <JsxParser jsx={jsxString}/>
        </div>
    )
}

export default Solution;



{/* <h3>1. Accelerations of the Balls:</h3>
            <p>The only force acting on the balls, if we neglect air resistance, is gravity. This means that both balls will have the same acceleration due to gravity, regardless of their initial horizontal velocities.</p>
            <p><strong>Answer for Acceleration:</strong></p>
            <p>
                {String.raw`Both balls have the same acceleration, which is equal to the acceleration due to gravity \( g \), typically approximately \( 9.81 \, \text{m/s}^2 \) on the surface of the Earth.`}
            </p>

            <h3>2. Time to Hit the Ground:</h3>
            <p>The time it takes for an object to fall from a certain height under the influence of gravity (with no initial vertical velocity and neglecting air resistance) is given by the kinematic equation:</p>
            <p>
                {String.raw`\( h = \frac{1}{2} g t^2 \)`}
            </p>
            <p>Where:</p>
            <ul>
                <li>{String.raw`\( h \)`} is the height from which the ball is thrown.</li>
                <li>{String.raw`\( g \)`} is the acceleration due to gravity.</li>
                <li>{String.raw`\( t \)`} is the time it takes for the ball to hit the ground.</li>
            </ul>
            <p>Rearranging for {String.raw`\( t \)`}:</p>
            <p>
                {String.raw`\( t = \sqrt{\frac{2h}{g}} \)`}
            </p>
            <p>From this equation, we can see that the time {String.raw`\( t \)`} it takes for the ball to hit the ground is only dependent on the height {String.raw`\( h \)`} from which it is thrown and the acceleration due to gravity {String.raw`\( g \)`}. The initial horizontal velocity does not factor into this equation.</p>
            <p><strong>Answer for Time:</strong></p>
            <p>
                {String.raw`Both balls will hit the ground at the same time since their time of descent is only dependent on the height from which they were thrown and the acceleration due to gravity, not their horizontal velocities.`}
            </p>

            <h3>Summary:</h3>
            <ul>
                <li>Both balls have the same acceleration, equal to the acceleration due to gravity.</li>
                <li>Both balls will hit the ground at the same time.</li>
            </ul> */}