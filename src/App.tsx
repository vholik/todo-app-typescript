import React, { useState, useEffect } from "react";
import { TodoItem } from "./components/TodoItem";
import { ITodo } from "./types";
import styled from "styled-components";

function App() {
  const [inputText, setInputText] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    setTodos(todos);
  });
  // Add to do function
  const addToDo = () => {
    if (inputText) {
      setTodos([
        ...todos,
        {
          name: inputText,
          id: Math.random(),
          completed: false,
          favorite: false,
        },
      ]);
      setInputText("");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <input
          type="text"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
        <button onClick={() => addToDo()}>Add to do</button>
        {todos
          .sort((x, y) => Number(y.favorite) - Number(x.favorite))
          .map((todo) => {
            return (
              <TodoItem
                completed={todo.completed}
                id={todo.id}
                key={todo.id}
                text={todo.name}
                setTodos={setTodos}
                todos={todos}
                favorite={todo.favorite}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
