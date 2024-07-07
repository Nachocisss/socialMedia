import React, { useState } from "react";
import "./LeftMenu.css";
import { FaHashtag } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { UserIcon } from "../../components/UserIcon/UserIcon";
import { FaGear } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { BsHeadphones } from "react-icons/bs";

const options = [
  {
    title: "Home",
    icon: <FaHome size={24} />,
    screen: "./",
  },
  {
    title: "My Profile",
    icon: <FaUserCircle size={24} />,
    screen: "./Profile",
  },
  {
    title: "Chat",
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
          {}
        </div>
      );
    });
  }

  return (
    <aside className="LeftMenuContainer">
      <div className="leftMenuLogo">
        <BsHeadphones size={40} fill="black" />
        <span className="LeftMenuLogoText">MyndGarage</span>
      </div>
      <div className="LeftMenuContentContainer">
        <div className="LeftMenuOptionsContainer">{optionsRender()}</div>
        <div className="leftMenuMyProfileContainer">
          <UserIcon />
          <div className="leftMenuMyProfiletextContainer">
            <span className="leftMenuMyProfileTitle">Username</span>
            <span className="leftMenuMyProfileSubtitle">@Username43</span>
          </div>
          <div className="leftMenuMyProfileGearContainer">
            <FaGear fill="black" size={25} />
          </div>
        </div>
      </div>
    </aside>
  );
}
