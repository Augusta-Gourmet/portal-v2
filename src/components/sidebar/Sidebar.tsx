import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Sidebar.css";
import { SidebarData } from "./SidebarData.tsx";

import { VscChevronDown } from "react-icons/vsc";
import { GoGear, GoCodescan } from "react-icons/go";
import { AiFillHome, AiOutlineQuestionCircle, AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";

export default function Sidebar() {
  const [hidden, setHidden] = useState(false);

  const toggleSidebar = () => setHidden(!hidden);

  function log(e) {
    console.log("oi")
    // console.log(e.target.querySelector('.sub-menu'))
    // e.target.querySelector('.sub-menu').classList.toggle('show')
  }

  return (
    <div className="sidebar">
      <div className="head">
        <AiFillHome className="icon" />
        <h5 className="title">Bem-vindo de volta!</h5>
        <AiOutlineMenu />
      </div>

      <div className="body">
        <div className="menu">
          <p className="title">Módulos</p>

          <ul>
            {SidebarData.map((item, i) => {
              
              const hasSubMenu = item.sub.length > 0;

              return (
                <li key={i}>
                  { hasSubMenu ? (
                    <div onClick={(e) => log(e)}>
                      <a>
                        {item.icon}
                        <span className="text">{item.title}</span>
                        <VscChevronDown />
                      </a>

                      <ul className="sub-menu">
                        {item.sub.map((subItem, j) => {
                          return (
                            <li key={j}>
                              <NavLink to={item.path + subItem.path}>
                                <span className="text">{subItem.title}</span>
                              </NavLink>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    ) : (
                      <NavLink to={item.path}>
                        {item.icon}
                        <span className="text">{item.title}</span>
                      </NavLink>
                    )
                  }
                </li>
              );
            })}
          </ul>
        </div>

        <div className="menu">
          <p className="title">Configurações</p>
          <ul>
            <li>
              <a href="#">
                <GoCodescan />
                <span className="text">Parâmetros</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="foot">
        <div className="menu">
          <p className="title">Sessão</p>
          <ul>
            <li>
              <a href="#">
                <AiOutlineQuestionCircle />
                <span className="text">Ajuda</span>
              </a>
            </li>
            <li>
              <a href="#">
                <AiOutlineLogout />
                <span className="text">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
