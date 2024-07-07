import React, { useState } from "react";
import "./LeftMenu.css";
import { FaHashtag } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { UserIcon } from "../../components/UserIcon/UserIcon";
import { FaGear } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const options = [
  {
    title: "Home",
    icon: <FaHome size={25} />,
    screen: "./",
  },
  {
    title: "My Profile",
    icon: <FaUserCircle size={25} />,
    screen: "./Profile",
  },
  {
    title: "Option 3",
    icon: <FaHashtag size={25} />,
  },
];

export default function LeftMenu() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  function onclickHandler(index: number, screen: string) {
    setSelectedIndex(index);
    navigate(screen);
  }

  return (
    <aside className="LeftMenuContainer">
      <div className="LeftMenuContentContainer">
        <div>
          {options.map((option, index) => {
            const selected = selectedIndex === index;
            return (
              <div
                key={`${option.title}-LeftMenu-option`}
                className="LeftMenuOptionContainer"
                onClick={() => onclickHandler(index, option.screen ?? "")}
              >
                <div
                  className={`menuItemContainer ${
                    selected && "menuItemContainerSelected"
                  }`}
                >
                  {option.icon}
                  <span className={`menuItemTitle`}>{option.title}</span>
                </div>
                {}
              </div>
            );
          })}
        </div>
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
