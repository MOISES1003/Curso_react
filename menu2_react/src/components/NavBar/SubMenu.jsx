import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export function SubMenu({ item, close }) {
  const [subnav, setSubnav] = useState(false);
  const ShowSubNav = () => setSubnav(!subnav);
  return (
    <div>
      <SidebarLink to={item.path} onClick={item.subNav && ShowSubNav}>
        <div onClick={!item.subNav && close}>
          {item.icon}
          <SiderbarLabel>{item.title}</SiderbarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index} onClick={close}>
              {item.icon}
              <SiderbarLabel>{item.title}</SiderbarLabel>
            </DropdownLink>
          );
        })}
    </div>
  );
}

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SiderbarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;
