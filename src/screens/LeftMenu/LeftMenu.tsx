import React from "react";
import "./LeftMenu.css";
import { FaHashtag } from "react-icons/fa";

const options = [
  {
    title: "Option 1",
    icon: <FaHashtag size={25} fill="black" />,
  },
  {
    title: "Option 2",
    icon: <FaHashtag size={25} fill="black" />,
  },
  {
    title: "Option 3",
    icon: <FaHashtag size={25} fill="black" />,
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
