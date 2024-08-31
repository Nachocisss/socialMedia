import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { UserTokenContainer } from "./UserIcon.styles";

export function UserIcon() {
  return (
    <UserTokenContainer>
      <FaUserCircle size={40} fill="grey" />
    </UserTokenContainer>
  );
}
