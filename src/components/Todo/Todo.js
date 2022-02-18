import React from 'react'
import "./Todo.scss";

function Todo ({text, todo, todos, setTodos}){
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };    
    const completeHandler = () => {
        setTodos(todos.map(item =>{
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed,
                };
            }
            return item;
        })
        );
    };

return (
    <div className="todo">
        <section className="todo-item">
        <button onClick={completeHandler} type="button" className="btn">
            <i className="fas fa-check" />
        </button>
        <li className={`todo-item ${todo.completed ? "completed" : "" }`}>{text}</li>
        <button onClick={deleteHandler} type="button" className="btn">
            <i className="fas fa-trash-alt" />
        </button>
        </section>
        
    </div>
)
}

export default Todo