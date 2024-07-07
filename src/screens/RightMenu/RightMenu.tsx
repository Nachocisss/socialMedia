import React from "react";
import "./RightMenu.css";
import { UserIcon } from "../../components/UserIcon/UserIcon";

const contactsData = [
  { title: "Name 1", subtitle: "@Account1" },
  { title: "User 2", subtitle: "@AccountOfUser2" },
  { title: "Person 3", subtitle: "@Account3Person" },
  { title: "Client 4", subtitle: "@MisterClient4x34" },
];

const contactCard = (c) => {
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
  return (
    <aside className="rightMenuContainer">
      <input type="text" placeholder="Search" />
      <div className="rightMenuOthersContacts">
        <span className="rightMenuOthersContactsText">Other Users</span>
        {contactsData.map((c) => {
          return contactCard(c);
        })}
      </div>
    </aside>
  );
}
