import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// import "./App.css";
import "./App.scss";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import "./sass/index.scss";

const classNames = require("classnames");

function App() {
  // State stuff
  const [inputText, setInputText] = useState ("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [themeDark, setThemeDark] = useState(false);

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

  function changeTheme() {
    setThemeDark(!themeDark);
  }

  return (
    <Router>
    <main className={themeDark? classNames("dark-mode") : "App"}>
      <header>
      <img src="https://www.nationalgeographic.com.es/medio/2020/06/30/dark-night-in-pyrenees-mountains_3dc0fd2b_1332x2000.jpg" alt="header-muntain" />
      </header>
      <section className="list-todo">
      <div className="header-list">
        <h1>TODO List </h1>
          <button className="" type="button" onClick={changeTheme}>
            <span className="material-icons-outlined md-48">{themeDark ? "light_mode" : "dark_mode"}</span>
          </button>
        </div>
       
      <Form
      inputText={inputText}
      todos={todos}
      setTodos={setTodos}
      setInputText={setInputText}
      theme={themeDark}
      />
    <Switch>
      <Route /* path={`/${status}`} */ >
      <TodoList
      filteredTodos={filteredTodos}
      setTodos={setTodos}
      todos={todos}
      setStatus={setStatus}
      />
      </Route>
    </Switch>
      </section>
    </main>
    </Router>
  );
}

export default App;
