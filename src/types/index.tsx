export enum IPriorities {
  high = "high",
  medium = "medium",
  no = "no",
  habit = "habit",
}

export type Priority = "high" | "medium" | "no" | "habit";

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

// Current day
let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
export let yyyy = today.getFullYear();
export let currentDay: string = yyyy + "-" + mm + "-" + dd;
