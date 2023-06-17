import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";
import { IconContext } from "react-icons";
import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from 'react-icons/io';
import { Data } from "./Data";

export function NavBar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <IconContext.Provider value={{color:"#fff"}}>
        <div className="navbar">
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar?"nav-menu active":"nav-menu"} >
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                    <AiIcons.AiOutlineClose/>
                </Link>
            </li>
            {Data.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}
