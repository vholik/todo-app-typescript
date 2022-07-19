import React, { useState, useEffect } from "react";
import { TodoItem } from "./components/TodoItem";
import { ITodo, IPriority, IPriorities } from "./types";
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
    IPriorities.High
  );

  //Priority function
  const priorityHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "High") {
      setPriorityStatus(IPriorities.High);
    } else if (e.target.value === "Medium") {
      setPriorityStatus(IPriorities.Medium);
    } else if (e.target.value === "No") {
      setPriorityStatus(IPriorities.No);
    } else if (e.target.value === "Habit") {
      setPriorityStatus(IPriorities.Habit);
    }
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
            <option value="High">High priority</option>
            <option value="Medium">Medium priority</option>
            <option value="No">No priority</option>
            <option value="Habit">Habit</option>
          </select>
        </div>
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
      </div>
    </AppWrapper>
  );
}

export default App;
