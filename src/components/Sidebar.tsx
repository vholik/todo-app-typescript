import React from "react";
import { SidebarStyle } from "../style";
import { ISidebar } from "../types";
import AllIcon from "../img/Home.svg";
import ImportantIcon from "../img/Bookmark.svg";
import CompletedIcon from "../img/Checked-box.svg";
import TrashIcon from "../img/TrashFilled.svg";

export const Sidebar: React.FC<ISidebar> = ({
  todos,
  completedTodos,
  favoriteTodos,
  deletedTodos,
}) => {
  let allTodosCount =
    todos.habit.length +
    todos.high.length +
    todos.medium.length +
    todos.no.length;
  return (
    <SidebarStyle>
      <div className="option">
        <div className="left">
          <img src={AllIcon} alt="All todos" />
          <p>All</p>
        </div>
        <p className="option-count">{allTodosCount}</p>
      </div>
      <div className="option">
        <div className="left">
          <img src={ImportantIcon} alt="Important todos" />
          <p>Important</p>
        </div>
        <p className="option-count">{favoriteTodos.length}</p>
      </div>
      <div className="option">
        <div className="left">
          <img src={CompletedIcon} alt="Completed todos" />
          <p>Completed</p>
        </div>
        <p className="option-count">{completedTodos.length}</p>
      </div>
      <div className="option">
        <div className="left">
          <img src={TrashIcon} alt="Trash" />
          <p>Trash</p>
        </div>
        <p className="option-count">{deletedTodos.length}</p>
      </div>
    </SidebarStyle>
  );
};
