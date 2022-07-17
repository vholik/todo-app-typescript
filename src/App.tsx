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
        {todos.map((e, i) => (
          <TodoItem
            completed={e.completed}
            id={e.id}
            key={i}
            text={e.name}
            setTodos={setTodos}
            todos={todos}
            favorite={e.favorite}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
