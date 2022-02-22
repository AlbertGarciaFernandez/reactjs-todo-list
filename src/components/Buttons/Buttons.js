import React from 'react';
import { Route, Link } from 'react-router-dom';

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
        <Route>
        <Link to="/all">
        <button type="button" onClick={statusHandler} value="All">
            All
        </button>
        </Link>
        <Link to="/completed">
        <button type="button" onClick={statusHandler} value="completed">
            Completed
        </button>
        </Link>
        <Link to="/uncompleted">
        <button type="button" onClick={statusHandler} value="uncompleted">
            Uncompleted
        </button>
        </Link>
        </Route>
        <button type="button" onClick={deleteHandler} value="clearCompleted">
            Clear Completed
        </button>
    </div>
    );
}

export default Buttons;