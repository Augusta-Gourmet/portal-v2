import React from "react";
import "./Sidebar.css";

import { VscAccount, VscChevronDown } from "react-icons/vsc";
import { AiFillShopping, AiFillContacts, AiOutlineTeam, AiFillTool } from "react-icons/ai";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="head">
        <h5 className="title">Bem-vindo de volta!</h5>
      </div>

      <div className="body">
        <div className="menu">
          <div className="menu">
            <p className="title">Módulos</p>
            <ul>
              <li className="active">
                <a href="#">
                  <AiOutlineTeam className="icon" />
                  <span className="text">Funcionários</span>
                  <VscChevronDown className="arrow" />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillShopping className="icon" />
                  <span className="text">Compras</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillContacts className="icon" />
                  <span className="text">Atividades</span>
                  <VscChevronDown className="arrow" />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineTeam className="icon" />
                  <span className="text">Atividades</span>
                  <VscChevronDown className="arrow" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="foot"></div>
    </div>
  );
}
