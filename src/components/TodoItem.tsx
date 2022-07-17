import React, { useEffect } from "react";
import { ITodo } from "../types";
import DeleteIcon from "../img/delete.svg";
import FavoriteIcon from "../img/favorite.svg";
import FavoriteFilledIcon from "../img/favorite-filled.svg";
import { TodoItemStyle } from "../style";

interface TodoItemProps {
  text: string;
  id: number;
  completed: boolean;
  favorite: boolean;
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  todos: Array<ITodo>;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  text,
  id,
  completed,
  setTodos,
  todos,
  favorite,
}) => {
  useEffect(() => {
    setTodos(todos.sort((x, y) => Number(y.favorite) - Number(x.favorite)));
  }, [todos]);

  // Delete an item function
  const deleteHandler = () => {
    setTodos(todos.filter((e) => e.id !== id));
  };
  // Set a todo like a completed one
  const completeHandler = () => {
    setTodos(
      todos.map((e) => {
        if (e.id === id) {
          return {
            ...e,
            completed: !e.completed,
          };
        }
        return e;
      })
    );
  };
  //Add to favorite function
  const favoriteHandler = () => {
    setTodos(
      todos.map((e) => {
        if (e.id === id) {
          return {
            ...e,
            favorite: !e.favorite,
          };
        }
        return e;
      })
    );
    // Sort array of objects with favorite true were first
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
        <div className="delete-button" onClick={() => deleteHandler()}>
          <img src={DeleteIcon} alt="Delete" />
        </div>
        <div className="favorite-button" onClick={() => favoriteHandler()}>
          {favorite ? (
            <img src={FavoriteFilledIcon} alt="Remove from favorite" />
          ) : (
            <img src={FavoriteIcon} alt="Add to favorite" />
          )}
        </div>
      </div>
    </TodoItemStyle>
  );
};
