import React from "react";
import { SidebarStyle } from "../style";

export const Sidebar: React.FC = () => {
  return (
    <SidebarStyle>
      <h2>All</h2>
      <h2>Important</h2>
      <h2>Completed</h2>
      <h2>Trash</h2>
    </SidebarStyle>
  );
};
