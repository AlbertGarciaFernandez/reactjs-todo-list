import React from 'react'
import Todo from '../Todo/Todo'
import "./TodoList.scss";
import Buttons from "../Buttons/Buttons";

function TodoList ({todos, setTodos, filteredTodos, setStatus }) {
  return (
    <div className="todo-container">
        <ul className="todo-list">
            {filteredTodos.map((todo) => (
                <Todo
                text={todo.text}
                setTodos={setTodos}
                todos={todos}
                key={todo.id}
                todo={todo}
                />
            ))}
              <Buttons
                todos={todos}
                setStatus={setStatus}
                setTodos={setTodos}
                />
        </ul>
    </div>
  )
}

export default TodoList;