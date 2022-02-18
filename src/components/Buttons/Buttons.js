import React from 'react';
import "./Buttons.scss";

function Buttons ({setStatus}) {
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return(
    <div className='buttonstyle'>
        {/* <li >ASAD</li> */}
        <button type="button" onClick={statusHandler} value="All">
            All
        </button>
        <button type="button" onClick={statusHandler} value="completed">
            Completed
        </button>
        <button type="button" onClick={statusHandler} value="uncompleted">
            Uncompleted
        </button>
    </div>
    );
}

export default Buttons;