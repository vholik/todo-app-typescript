import React, { useState, useEffect } from "react";
import { TodoItem } from "./components/TodoItem";
import { ITodo, IPriority, IPriorities, Priority } from "./types";
import { AppWrapper } from "./style";

function App() {
  const [inputText, setInputText] = useState<string>("");
  const [todos, setTodos] = useState<IPriority>({
    high: [],
    medium: [],
    no: [],
    habit: [],
  });
  const [priorityStatus, setPriorityStatus] = useState<IPriorities>(
    IPriorities.high
  );
  // Priority function
  const priorityHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriorityStatus(IPriorities[e.target.value as Priority]);
  };
  // Add to do function
  const addToDo = () => {
    if (inputText) {
      setTodos({
        ...todos,
        [priorityStatus]: [
          ...todos[priorityStatus],
          {
            name: inputText,
            id: Math.random(),
            completed: false,
            favorite: false,
            priority: priorityStatus,
          },
        ],
      });
      setInputText("");
    }
  };
  // Envoke addTodo function on enter
  window.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addToDo();
    }
  });
  return (
    <AppWrapper>
      {/* {todos.length === 0 && <h1 className="no-todos">Nothing to do :(</h1>} */}
      <div className="container">
        <h2>🚀 Viktor's Organizer</h2>
        <div className="input-wrapper">
          <input
            type="text"
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
            placeholder="+Add task to do. Press Enter to save."
          />
          <select
            name="priority-select"
            id="priority-select"
            onChange={(e) => priorityHandler(e)}
          >
            <option value="high">High priority</option>
            <option value="medium">Medium priority</option>
            <option value="no">No priority</option>
            <option value="habit">Habit</option>
          </select>
        </div>
        {/* High priorities */}
        {todos.high.length !== 0 && <h3>High priorities</h3>}
        {todos.high
          .sort((x, y) => Number(y.favorite) - Number(x.favorite))
          .map((todo) => {
            return (
              <TodoItem
                priority={todo.priority}
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
        {/* Medium priorities */}
        {todos.medium.length !== 0 && <h3>Medium priorities</h3>}
        {todos.medium
          .sort((x, y) => Number(y.favorite) - Number(x.favorite))
          .map((todo) => {
            return (
              <TodoItem
                priority={todo.priority}
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
        {/* No priorities */}
        {todos.no.length !== 0 && <h3>No priorities</h3>}
        {todos.no
          .sort((x, y) => Number(y.favorite) - Number(x.favorite))
          .map((todo) => {
            return (
              <TodoItem
                priority={todo.priority}
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
        {/* Habit priorities */}
        {todos.habit.length !== 0 && <h3>Habits</h3>}
        {todos.habit
          .sort((x, y) => Number(y.favorite) - Number(x.favorite))
          .map((todo) => {
            return (
              <TodoItem
                priority={todo.priority}
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
    </AppWrapper>
  );
}

export default App;
