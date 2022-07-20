import React, { useState, useEffect } from "react";
import { ITodo, IPriority, Priority } from "../types";
import DeleteIcon from "../img/delete.svg";
import FavoriteIcon from "../img/favorite.svg";
import FavoriteFilledIcon from "../img/favorite-filled.svg";
import { TodoItemStyle } from "../style";

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
  // Set date to show
  const showDate = () => {
    if (Number(date) === 0) {
      return "Today";
    } else if (Number(date) === 1) {
      return "Tomorrow";
    } else {
      return date + " days";
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
        <p className="date">{showDate()}</p>
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
