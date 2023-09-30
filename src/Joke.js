import React, {useState} from "react"
// this was only showing the button show punchline, added code to toggle between show and hide
export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }
    return (
        <div>
            {/* old code code new code uses ternary operators to toggle between show and hide based on whether  the punchline is show or not, IE the show button will be show if punchline is hidden, and hide punchline will be shown if punchline is hidden */}
            
            {/* New code  */}

        {/* //   onClick={toggleShown}: This is an event handler. It specifies that when the button is clicked, it should call the toggleShown function */}
{/* it asks,  is pnchline shown? if yes, show hide button if not show, show button 
// if isShown is truthy, it displays "Hide "; otherwise, it displays "Shown". */}


{props.setup && <h3>{props.setup}</h3>}
{isShown && <p>{props.punchline}</p>}
<button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline </button>
{/* hr makes a repeated line underneath jokes  */}
<hr/>

 

        </div>
    )
}
