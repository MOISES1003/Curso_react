import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";
import { IconContext } from "react-icons";
import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { Data } from "./Data";
import styled from "styled-components"

export function NavBar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <IconContext.Provider value={{color:"#fff"}}>
        <Nav>
          <NavIcon to="#">
              <FaIcons.FaBars onClick={showSidebar}/>
          </NavIcon>
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              <NavIcon to="#">
                <AiIcons.AiOutlineClose  onClick={showSidebar}/>  
              </NavIcon>
              {Data.map((item,index)=>{
                  
              })} 
            </SidebarWrap>
          </SidebarNav>
        </Nav>
      </IconContext.Provider>
    </div>
  );
}

const Nav = styled.div`
  background: #15171c;
  height:80px;
  display:flex;
  justify-content:flex-start;
  align-items:center;
`;
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height:80px;
  display:flex;
  justify-content: flex-start;
  align-items: center;
`;
const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;
const SidebarWrap = styled.div`
  width:100%;
`;