import React, { useState } from "react";
import "./RightMenu.css";
import { UserIcon } from "../../components/UserIcon/UserIcon";
import { IoIosChatbubbles } from "react-icons/io";

const contactsData = [
  { title: "Name 1", subtitle: "@Account1" },
  { title: "User 2", subtitle: "@AccountOfUser2" },
  { title: "Person 3", subtitle: "@Account3Person" },
  { title: "Client 4", subtitle: "@MisterClient4x34" },
];

const contactCard = (c: { title: string; subtitle: string }) => {
  return (
    <div className="contactCardContainer">
      <UserIcon />
      <div className="contactCardContainerText">
        <span className="contactCardTitle"> {c.title}</span>
        <span className="contactCardSubtitle"> {c.subtitle}</span>
      </div>
      <button className="contactCardButton">Seguir</button>
    </div>
  );
};
export function RightMenu() {
  const [openChat, setOpenChat] = useState(false);
  return (
    <aside className="rightMenuContainer">
      <div className="rightMenuTop">
        <input type="text" placeholder="Search" />
        <div className="rightMenuOthersContacts">
          <span className="rightMenuOthersContactsText">Other Users</span>
          {contactsData.map((c) => {
            return contactCard(c);
          })}
        </div>
      </div>
      <div className="rightMenuBottom">
        {openChat ? (
          <div className="chatContainerOpen" onClick={() => setOpenChat(false)}>
            <IoIosChatbubbles fill="black" size={20} />
            <span className="chatTitle">Chats</span>
          </div>
        ) : (
          <div className="chatContainerClose" onClick={() => setOpenChat(true)}>
            <IoIosChatbubbles fill="black" size={20} />
            <span className="chatTitle">Chats</span>
          </div>
        )}
      </div>
    </aside>
  );
}
