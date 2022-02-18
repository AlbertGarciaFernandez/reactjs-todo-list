import React, { useState, useEffect } from "react";
// import "./App.css";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import "./sass/index.scss";



function App() {
  // State stuff
  const [inputText, setInputText] = useState ("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
    }
  };
  // Save to Local
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      const todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);
    }
  };

// use effect
  useEffect(() => {
    getLocalTodos();
  }, []);
  
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  
  
  return (
    <main className="App">
      <header>
      <img src="https://www.nationalgeographic.com.es/medio/2021/07/01/glory-of-damavand-and-milky-way_710ab66c_1348x890.jpg" alt="header-muntain" />
      </header>
      <section className="list-todo">
      <div className="header-list">
        <h1>TODO List </h1>
          <button className="" type="button">
            <span className="material-icons-outlined md-48">dark_mode</span>
          </button>
        </div>
      
      <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus}
      
      />
      <TodoList
      filteredTodos={filteredTodos} 
      setTodos={setTodos} 
      todos={todos} 
      />
      </section>
    </main>
    
  );
}

export default App;
