export enum IPriorities {
  high = "high",
  medium = "medium",
  no = "no",
  habit = "habit",
}

export type Priority = "high" | "medium" | "no" | "habit";

export interface TodoItemProps {
  text: string;
  id: number;
  completed: boolean;
  favorite: boolean;
  setTodos: React.Dispatch<React.SetStateAction<IPriority>>;
  todos: IPriority;
  priority: string;
  date: string;
  setCompletedTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  completedTodos: Array<ITodo>;
  todoItem: ITodo;
  favoriteTodos: Array<ITodo>;
  setFavoriteTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  deletedTodos: Array<ITodo>;
  setDeletedTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export interface ITodo {
  name: string;
  id: number;
  favorite: boolean;
  completed: boolean;
  priority: Priority;
  date: string;
}

export interface IPriority {
  high: ITodo[];
  medium: ITodo[];
  no: ITodo[];
  habit: ITodo[];
}

export interface ITodosShowing {
  [key: string]: boolean;
}

export interface ISidebar {
  todos: IPriority;
  completedTodos: ITodo[];
  favoriteTodos: ITodo[];
  deletedTodos: ITodo[];
}

// Current day
let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
export let yyyy = today.getFullYear();
export let currentDay: string = yyyy + "-" + mm + "-" + dd;
