import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.css";
import logo from "../../assets/images/logo.png";
import sidebar_items from "../../assets/JsonData/sidebar_routes.json";

const SidebarItem = (props) => {
  const active = props.active ? "active" : "";
  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const Sidebar = (props) => {
  const activeItem = sidebar_items.findIndex(
    (item) => item.route === props.location.pathname
  );
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="company logo" />
        {sidebar_items.map((item, idx) => (
          <Link to={item.route} key={idx}>
            <SidebarItem
              active={activeItem === idx ? true : false}
              icon={item.icon}
              title={item.display_name}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
