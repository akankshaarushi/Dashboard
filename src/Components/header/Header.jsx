import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar"; // Import MUI Avatar component


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="search-bar">
        <SearchIcon className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="hamburger-menu" onClick={handleMenuToggle}>
        <MenuIcon />
      </div>
      <div className={`header-icons ${isMenuOpen ? "show" : ""}`}>
        <EmailIcon className="icons email-icon" />
        <SettingsIcon className="icons settings-icon" />
        <div className="notification-container">
          <NotificationsIcon className="icons notification-icon" />
          <span className="notification-badge"></span>
        </div>
        <div className="user-avatar">
        <Avatar
              alt="Devon Lane"
              src="/images.jpg"
              className="abcd"
            />
        </div>
      </div>
    </div>
  );
}

export default Header;
