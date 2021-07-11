import React from "react";
import { Link } from "react-router-dom";

import "./topnav.css";
import notifications from "../../assets/JsonData/notification.json";
import Dropdown from "../dropdown/Dropdown";
import user_image from "../../assets/images/tuat.png";
import user_menus from "../../assets/JsonData/user_menus.json";

const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

const current_user = {
  display_name: "UserName",
  image: user_image,
};

const renderUserToggle = (user) => {
  <div className="topnav_right-user">
    <div className="topnav_right-user__image">
      <img src={user.image} alt="" />
    </div>
    <div className="topnav__right-user__name">{user.display_name}</div>
  </div>;
};

const renderUserMenus = (item, index) => {};

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Search here..." />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          {/* dropdown here */}
          <Dropdown icon="bx bx-user" />
        </div>
        <div className="topnav__right-item">
          {/* dropdown here */}
          <Dropdown
            icon="bx bx-bell"
            badge="12"
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to="/">View All</Link>}
          />
        </div>
        <div className="topnav__right-item">
          {/* theme setting */}
          <Dropdown customToggler={() => renderUserToggle(current_user)} />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
