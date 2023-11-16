import React, { useState } from "react";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData.tsx";

import { VscAccount, VscChevronDown } from "react-icons/vsc";
import {
  AiOutlineShopping,
  AiOutlineTeam,
  AiOutlineTool,
  AiFillHome,
  AiOutlineReconciliation,
} from "react-icons/ai";

export default function Sidebar() {
  const [show, setShow] = useState(true);

  const toggleSidebar = () => setShow(!show);

  return (
    <div className="sidebar">
      <div className="head">
        <AiFillHome className="icon" />
        <h5 className="title">Bem-vindo de volta!</h5>
      </div>

      <div className="body">
        <div className="menu">
          <p className="title">Módulos</p>

          <ul>
            {SidebarData.map((item, i) => {
              return (
                <li key={i}>
                  <a href="#">
                    {item.icon}
                    <span className="text">{item.title}</span>
                    {item.sub.length > 0 ? <VscChevronDown /> : null}
                  </a>
                  {/*TODO: simplify length verification twice*/}
                  {item.sub.length > 0 && (
                    <ul className="sub-menu">
                      {item.sub.map((subItem, j) => {
                        return (
                          <li>
                            <a href="#">
                              <span className="text">{subItem.title}</span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="foot"></div>
    </div>
  );
}
