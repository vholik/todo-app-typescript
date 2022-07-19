export enum IPriorities {
  High = "high",
  Medium = "medium",
  No = "no",
  Habit = "habit",
}

export type Priority = "high" | "medium" | "no" | "habit";

export interface ITodo {
  name: string;
  id: number;
  favorite: boolean;
  completed: boolean;
  priority: Priority;
}

export interface IPriority {
  high: ITodo[];
  medium: ITodo[];
  no: ITodo[];
  habit: ITodo[];
}
