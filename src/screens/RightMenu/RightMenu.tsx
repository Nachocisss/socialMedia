import React, { useState } from "react";
import { UserIcon } from "../../components/UserIcon/UserIcon";
import { IoIosChatbubbles } from "react-icons/io";
import {
  ChatContainerClose,
  ChatContainerOpen,
  ChatTitle,
  ContactCardButton,
  ContactCardContainer,
  ContactCardContainerText,
  ContactCardSubtitle,
  ContactCardTitle,
  RightMenuBottom,
  RightMenuContainer,
  RightMenuOthersContacts,
  RightMenuOthersContactsText,
  RightMenuTop,
} from "./RightMenu.styled";

const contactsData = [
  { title: "Name 1", subtitle: "@Account1" },
  { title: "User 2", subtitle: "@AccountOfUser2" },
  { title: "Person 3", subtitle: "@Account3Person" },
  { title: "Client 4", subtitle: "@MisterClient4x34" },
];

const contactCard = (c: { title: string; subtitle: string }) => {
  return (
    <ContactCardContainer>
      <UserIcon />
      <ContactCardContainerText>
        <ContactCardTitle> {c.title}</ContactCardTitle>
        <ContactCardSubtitle> {c.subtitle}</ContactCardSubtitle>
      </ContactCardContainerText>
      <ContactCardButton>Seguir</ContactCardButton>
    </ContactCardContainer>
  );
};
export function RightMenu() {
  const [openChat, setOpenChat] = useState(false);
  return (
    <RightMenuContainer>
      <RightMenuTop>
        <RightMenuOthersContacts>
          <RightMenuOthersContactsText>Other Users</RightMenuOthersContactsText>
          {contactsData.map((c) => {
            return contactCard(c);
          })}
        </RightMenuOthersContacts>
      </RightMenuTop>
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
