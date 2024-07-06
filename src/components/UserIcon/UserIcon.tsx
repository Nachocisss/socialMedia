import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "./UserIcon.css";

export function UserIcon() {
  return (
    <div className="userTokenContainer">
      <FaUserCircle size={40} fill="black" />
    </div>
  );
}
