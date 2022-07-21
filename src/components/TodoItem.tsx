import React, { useState, useEffect } from "react";
import { ITodo, IPriority, Priority, currentDay } from "../types";
import DeleteIcon from "../img/Trash.svg";
import FavoriteIcon from "../img/favorite.svg";
import FavoriteFilledIcon from "../img/favorite-filled.svg";
import { TodoItemStyle } from "../style";
import moment from "moment";

interface TodoItemProps {
  text: string;
  id: number;
  completed: boolean;
  favorite: boolean;
  setTodos: React.Dispatch<React.SetStateAction<IPriority>>;
  todos: IPriority;
  priority: string;
  date: string;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  text,
  id,
  completed,
  setTodos,
  todos,
  favorite,
  priority,
  date,
}) => {
  // Delete an item function
  const deleteHandler = () => {
    setTodos({
      ...todos,
      [priority]: todos[priority as Priority].filter((todo) => todo.id !== id),
    });
  };
  // Set a todo like a completed one
  const completeHandler = () => {
    setTodos({
      ...todos,
      [priority]: todos[priority as Priority].map((e) => {
        if (e.id === id) {
          return {
            ...e,
            completed: !e.completed,
          };
        }
        return e;
      }),
    });
  };
  //Add to favorite function
  const favoriteHandler = () => {
    setTodos({
      ...todos,
      [priority]: todos[priority as Priority].map((e) => {
        if (e.id === id) {
          return {
            ...e,
            favorite: !e.favorite,
          };
        }
        return e;
      }),
    });
  };
  // Days left to do
  const daysLeft = (): number => {
    let start = moment(currentDay);
    let end = moment(date);
    return end.diff(start, "days");
  };
  // Set date to show
  const showDate = () => {
    if (daysLeft() === 0) {
      return "Today";
    } else if (daysLeft() === 1) {
      return "Tomorrow";
    } else {
      return daysLeft() + " days";
    }
  };

  return (
    <TodoItemStyle>
      <div className="leftside-wrapper">
        <input
          type="checkbox"
          name=""
          id=""
          onClick={() => completeHandler()}
        />
        <h1 style={{ textDecoration: completed ? "line-through" : "none" }}>
          {text}
        </h1>
      </div>

      <div className="button-wrapper">
        {date === "" ? null : <p className="date">{showDate()}</p>}
        {completed && (
          <div className="delete-button" onClick={() => deleteHandler()}>
            <img src={DeleteIcon} alt="Delete" />
          </div>
        )}
        <div className="favorite-button" onClick={() => favoriteHandler()}>
          {!completed &&
            (favorite ? (
              <img src={FavoriteFilledIcon} alt="Remove from favorite" />
            ) : (
              <img src={FavoriteIcon} alt="Add to favorite" />
            ))}
        </div>
      </div>
    </TodoItemStyle>
  );
};
