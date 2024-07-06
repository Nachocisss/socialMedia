import React from "react";
import "./RightMenu.css";
export function RightMenu() {
  return (
    <aside className="RightMenuContainer">
      <input type="text" placeholder="Search" />
      <p className="RightOthersContainer">Others Profiles</p>
    </aside>
  );
}
