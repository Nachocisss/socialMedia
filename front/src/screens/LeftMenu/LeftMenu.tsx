import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  LeftMenuContainer,
  LeftMenuContentContainer,
  LeftMenuItemContainer,
  LeftMenuLogo,
  LeftMenuLogoText,
  LeftMenuOptionsContainer,
  MenuItem,
  MenuItemTitle,
} from "./LeftMenu.styled";

const options = [
  {
    title: "About Me",
    icon: <FaUserCircle size={24} />,
    screen: "./",
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
        <LeftMenuItemContainer
          key={`${option.title}-LeftMenu-option`}
          onClick={() => onclickHandler(index, option.screen ?? "")}
        >
          <MenuItem selected={selected}>
            {option.icon}
            <MenuItemTitle>{option.title}</MenuItemTitle>
          </MenuItem>
        </LeftMenuItemContainer>
      );
    });
  }

  return (
    <LeftMenuContainer>
      <LeftMenuLogo>
        <LeftMenuLogoText>NachoCisss Dev</LeftMenuLogoText>
      </LeftMenuLogo>
      <LeftMenuContentContainer>
        <LeftMenuOptionsContainer>{optionsRender()}</LeftMenuOptionsContainer>
      </LeftMenuContentContainer>
    </LeftMenuContainer>
  );
}
