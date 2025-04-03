import { useState } from "react";
import { IoIosChatbubbles } from "react-icons/io";
import {
  ChatContainerClose,
  ChatContainerOpen,
  ChatTitle,
  RightMenuBottom,
  RightMenuContainer,
} from "./RightMenu.styled";

export function RightMenu() {
  const [openChat, setOpenChat] = useState(false);
  return (
    <RightMenuContainer>
      <RightMenuBottom>
        {openChat ? (
          <ChatContainerOpen onClick={() => setOpenChat(false)}>
            <IoIosChatbubbles fill="black" size={20} />
            <ChatTitle>Latest</ChatTitle>
          </ChatContainerOpen>
        ) : (
          <ChatContainerClose onClick={() => setOpenChat(true)}>
            <IoIosChatbubbles fill="black" size={20} />
            <ChatTitle>Latest</ChatTitle>
          </ChatContainerClose>
        )}
      </RightMenuBottom>
    </RightMenuContainer>
  );
}
