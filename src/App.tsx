import React, { useState, useEffect } from "react";
import { TodoItem } from "./components/TodoItem";
import { Sidebar } from "./components/Sidebar";
import {
  ITodo,
  IPriority,
  IPriorities,
  Priority,
  ITodosShowing,
} from "./types";
import { AppWrapper } from "./style";
import ChevronDown from "./img/chevron-down.svg";
import moment from "moment";
import { group } from "console";

function App() {
  const [inputText, setInputText] = useState<string>("");
  const [plannedDate, setPlannedDate] = useState<number>(0);
  const [todos, setTodos] = useState<IPriority>({
    high: [],
    medium: [],
    no: [],
    habit: [],
  });
  const [isTodosShowing, setIsTodosShowing] = useState<ITodosShowing>({
    high: true,
    medium: true,
    no: true,
    habit: true,
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
            date: plannedDate,
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
  // Current day
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  let currentDay: string = yyyy + "-" + mm + "-" + dd;

  const getCurrentDay = (e: React.ChangeEvent<HTMLInputElement>) => {
    let start = moment(currentDay);
    let end = moment(e.target.value);
    setPlannedDate(end.diff(start, "days"));
  };
  return (
    <>
      <Sidebar />
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
              className="todo-input"
            />
            <input
              type="date"
              name="date"
              min={currentDay}
              placeholder="hey"
              max={yyyy + "-12-31"}
              onChange={(e) => getCurrentDay(e)}
              className="date-input"
            ></input>
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
          {todos.high.length !== 0 && (
            <div
              className="priority-header"
              onClick={() =>
                setIsTodosShowing({
                  ...isTodosShowing,
                  high: !isTodosShowing.high,
                })
              }
            >
              <img
                src={ChevronDown}
                alt="Hide todos"
                className="chevron"
                style={{
                  transform: isTodosShowing.high
                    ? "rotate(0deg)"
                    : "rotate(180deg)",
                }}
              />
              <h3>High priorities</h3>
              <p className="priority-count">{todos.high.length}</p>
            </div>
          )}
          {isTodosShowing.high &&
            todos.high
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
                    date={todo.date}
                  />
                );
              })}
        </div>
      </AppWrapper>
    </>
  );
}

export default App;
