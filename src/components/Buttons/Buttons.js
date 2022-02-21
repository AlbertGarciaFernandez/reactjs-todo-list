import React from 'react';
import "./Buttons.scss";

function Buttons ({setStatus,todos,setTodos}) {
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    const deleteHandler =()=>{
        setTodos(todos.filter((el)=>el.completed!==true));
    }
    
    return(
    <div className='buttonstyle'>
        <button type="button" onClick={statusHandler} value="All">
            All
        </button>
        <button type="button" onClick={statusHandler} value="completed">
            Completed
        </button>
        <button type="button" onClick={statusHandler} value="uncompleted">
            Uncompleted
        </button>
        <button type="button" onClick={deleteHandler} value="clearCompleted">
            Clear Completed
        </button>
    </div>
    );
}

export default Buttons;