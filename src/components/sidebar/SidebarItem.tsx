import React from "react";

export default function SidebarGroup() {
  return (
    <li className="active">
      <a href="#">
        <AiOutlineTeam className="icon" />
        <span className="text">Funcionários</span>
        <VscChevronDown className="arrow" />
      </a>
    </li>
  );
}
