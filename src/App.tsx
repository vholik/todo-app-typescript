import React, { useState, useEffect } from "react";
import { TodoItem } from "./components/TodoItem";
import { Sidebar } from "./components/Sidebar";
import {
  ITodo,
  IPriority,
  IPriorities,
  Priority,
  ITodosShowing,
  currentDay,
  yyyy,
} from "./types";
import { AppWrapper } from "./style";
import ChevronDown from "./img/Caret.svg";
import moment from "moment";

function App() {
  const [inputText, setInputText] = useState<string>("");
  const [plannedDate, setPlannedDate] = useState<string>(currentDay);
  const [todos, setTodos] = useState<IPriority>({
    high: [],
    medium: [],
    no: [],
    habit: [],
  });
  const [completedTodos, setCompletedTodos] = useState<ITodo[]>([]);
  const [favoriteTodos, setFavoriteTodos] = useState<ITodo[]>([]);
  const [deletedTodos, setDeletedTodos] = useState<ITodo[]>([]);
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

  const getCurrentDay = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setPlannedDate(currentDay);
    } else {
      setPlannedDate(e.target.value);
    }
  };
  return (
    <>
      <Sidebar
        todos={todos}
        completedTodos={completedTodos}
        favoriteTodos={favoriteTodos}
        deletedTodos={deletedTodos}
      />
      <AppWrapper>
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
              max={yyyy + "-12-31"}
              onChange={(e) => getCurrentDay(e)}
              className="date-input"
              value={""}
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
          {Object.keys(todos).map((group) => {
            return (
              <>
                <div>
                  {todos[group as Priority].length !== 0 && (
                    <div
                      className="priority-header"
                      onClick={() =>
                        setIsTodosShowing({
                          ...isTodosShowing,
                          [group]: !isTodosShowing[group as Priority],
                        })
                      }
                    >
                      <img
                        src={ChevronDown}
                        alt="Hide todos"
                        className="chevron"
                        style={{
                          transform: isTodosShowing[group as Priority]
                            ? "rotate(0deg)"
                            : "rotate(180deg)",
                        }}
                      />
                      <h3>{group} priorities</h3>
                      <p className="priority-count">
                        {todos[group as Priority].length}
                      </p>
                    </div>
                  )}
                </div>
                <div>
                  {isTodosShowing[group as Priority] &&
                    todos[group as Priority]
                      .sort((x, y) => Number(y.favorite) - Number(x.favorite))
                      .map((todo) => {
                        return (
                          <TodoItem
                            deletedTodos={deletedTodos}
                            setDeletedTodos={setDeletedTodos}
                            favoriteTodos={favoriteTodos}
                            setFavoriteTodos={setFavoriteTodos}
                            todoItem={todo}
                            completedTodos={completedTodos}
                            setCompletedTodos={setCompletedTodos}
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
              </>
            );
          })}
        </div>
      </AppWrapper>
    </>
  );
}

export default App;
