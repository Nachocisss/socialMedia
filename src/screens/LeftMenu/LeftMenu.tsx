import React from "react";
import "./LeftMenu.css";
import { MenuItem } from "../../components/menuItem/MenuItem";
import { FaBeer } from "react-icons/fa";

const options = [
  {
    title: "Option 1",
    icon: <FaBeer fill="black" />,
  },
  {
    title: "Option 2",
    icon: <FaBeer fill="black" />,
  },
  {
    title: "Option 3",
    icon: <FaBeer fill="black" />,
  },
];
export default function LeftMenu() {
  return (
    <aside className="LeftMenuContainer">
      <div className="circle"></div>
      {options.map((option) => {
        return (
          <div
            key={`${option.title}-LeftMenu-option`}
            className="LeftMenuOptionContainer"
          >
            <div className="menuItemContainer">
              {option.icon}
              <span className="menuItemTitle">{option.title}</span>
            </div>
          </div>
        );
      })}
    </aside>
  );
}
