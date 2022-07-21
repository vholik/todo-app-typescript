import React from "react";
import { SidebarStyle } from "../style";
import AllIcon from "../img/Home.svg";
import ImportantIcon from "../img/Bookmark.svg";
import CompletedIcon from "../img/Checked-box.svg";
import TrashIcon from "../img/TrashFilled.svg";

export const Sidebar: React.FC = () => {
  return (
    <SidebarStyle>
      <div className="option">
        <div className="left">
          <img src={AllIcon} alt="All todos" />
          <p>All</p>
        </div>
        <p className="option-count">2</p>
      </div>
      <div className="option">
        <div className="left">
          <img src={ImportantIcon} alt="Important todos" />
          <p>Important</p>
        </div>
        <p className="option-count">2</p>
      </div>
      <div className="option">
        <div className="left">
          <img src={CompletedIcon} alt="Completed todos" />
          <p>Completed</p>
        </div>
        <p className="option-count">2</p>
      </div>
      <div className="option">
        <div className="left">
          <img src={TrashIcon} alt="Trash" />
          <p>Trash</p>
        </div>
        <p className="option-count">2</p>
      </div>
    </SidebarStyle>
  );
};
