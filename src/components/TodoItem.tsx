import React from "react";
import { ITodo } from "../types";

interface TodoItemProps {
  text: string;
  id: number;
  completed: boolean;
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  todos: Array<ITodo>;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  text,
  id,
  completed,
  setTodos,
  todos,
}) => {
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
  return (
    <div>
      <button onClick={() => completeHandler()}>Completed</button>
      {completed && "It's Completed!"}
      <h1>{text}</h1>
      <button onClick={() => deleteHandler()}>Delete that shit</button>
    </div>
  );
};
