import React, { useState, useEffect } from "react";
import { Priority, currentDay, TodoItemProps } from "../types";
import DeleteIcon from "../img/Trash.svg";
import FavoriteIcon from "../img/favorite.svg";
import FavoriteFilledIcon from "../img/favorite-filled.svg";
import { TodoItemStyle } from "../style";
import moment from "moment";

export const TodoItem: React.FC<TodoItemProps> = ({
  text,
  id,
  completed,
  setTodos,
  todos,
  favorite,
  priority,
  date,
  completedTodos,
  setCompletedTodos,
  todoItem,
  favoriteTodos,
  setFavoriteTodos,
  deletedTodos,
  setDeletedTodos,
}) => {
  // Delete an item function
  const deleteHandler = () => {
    setCompletedTodos(completedTodos.filter((todo) => todo.id !== id));
    setFavoriteTodos(favoriteTodos.filter((todo) => todo.id !== id));
    setDeletedTodos([...deletedTodos, todoItem]);
    setTodos({
      ...todos,
      [priority]: todos[priority as Priority].filter((todo) => todo.id !== id),
    });
  };
  // Set a todo like a completed one
  const completeHandler = () => {
    // Set completed todos
    let isObjectExist = completedTodos.find((todo) => todo.id === id);
    if (isObjectExist) {
      setCompletedTodos(completedTodos.filter((todo) => todo.id !== id));
    } else {
      setCompletedTodos([...completedTodos, todoItem]);
    }
    setTodos({
      ...todos,
      [priority as Priority]: todos[priority as Priority].map((e) => {
        if (e.id === id) {
          return {
            ...e,
            completed: !todoItem.completed,
          };
        }
        return e;
      }),
    });
  };
  //Add to favorite function
  const favoriteHandler = () => {
    // Set favorited todos
    let isObjectExist = favoriteTodos.find((todo) => todo.id === id);
    if (isObjectExist) {
      setFavoriteTodos(favoriteTodos.filter((todo) => todo.id !== id));
    } else {
      setFavoriteTodos([...favoriteTodos, todoItem]);
    }
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
          defaultChecked={completed}
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
