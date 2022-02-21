import React from 'react'
import "./Form.scss";

function Form({setInputText, todos, setTodos, inputText}) {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText("");
    };

    return (
    <form className="form-input">
    <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
    <button onClick={submitTodoHandler} className="todo-button" type="submit" />
    </form>
    )
}

export default Form;