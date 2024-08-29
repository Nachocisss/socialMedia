import React, { useState } from "react";
import "./LeftMenu.css";
import { FaHashtag } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MenuCard from "../../components/LeftMenu/MenuCard/MenuCard";
import { AiTwotoneFire } from "react-icons/ai";

const options = [
  {
    title: "About Me",
    icon: <FaUserCircle size={24} />,
    screen: "./Profile",
  },
  {
    title: "Portafolio",
    icon: <FaHome size={24} />,
    screen: "./",
  },
  {
    title: "Chat",
    icon: <FaHashtag size={24} />,
  },
  {
    title: "Try It!",
    icon: <FaHashtag size={24} />,
  },
];

export default function LeftMenu() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  function onclickHandler(index: number, screen: string) {
    setSelectedIndex(index);
    navigate(screen);
  }

  function optionsRender() {
    return options.map((option, index) => {
      const selected = selectedIndex === index;
      return (
        <div
          key={`${option.title}-LeftMenu-option`}
          className="LeftMenuItemContainer"
          onClick={() => onclickHandler(index, option.screen ?? "")}
        >
          <div className={`menuItem ${selected && "menuItemSelected"}`}>
            {option.icon}
            <span className={`menuItemTitle`}>{option.title}</span>
          </div>
        </div>
      );
    });
  }

  return (
    <aside className="LeftMenuContainer">
      <div className="leftMenuTop">
        <div className="leftMenuLogo">
          <span className="LeftMenuLogoText">NachoCisss Dev</span>
        </div>
      </div>
      <div className="LeftMenuContentContainer">
        <div className="LeftMenuOptionsContainer">{optionsRender()}</div>
      </div>
      <div className="leftMenuBottom">
        <MenuCard />
      </div>
    </aside>
  );
}
