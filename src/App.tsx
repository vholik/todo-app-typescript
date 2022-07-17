import React, { useState } from "react";
import { TodoItem } from "./components/TodoItem";
import { ITodo } from "./types";
import styled from "styled-components";

function App() {
  const [inputText, setInputText] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  // Add to do function
  const addToDo = () => {
    if (inputText) {
      setTodos([
        ...todos,
        {
          name: inputText,
          id: Math.random(),
          completed: false,
        },
      ]);
    }
  };
  return (
    <div className="App">
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
        />
      ))}
    </div>
  );
}

export default App;
