import React, { useState } from "react";
import "./LeftMenu.css";
import { FaHashtag } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { UserIcon } from "../../components/UserIcon/UserIcon";

const options = [
  {
    title: "Home",
    icon: <FaHome size={25} />,
  },
  {
    title: "My Profile",
    icon: <FaUserCircle size={25} />,
  },
  {
    title: "Option 3",
    icon: <FaHashtag size={25} />,
  },
];
export default function LeftMenu() {
  const [selectedIndex, setSelectedIndex] = useState(0);
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
                onClick={() => setSelectedIndex(index)}
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
        </div>
      </div>
    </aside>
  );
}
