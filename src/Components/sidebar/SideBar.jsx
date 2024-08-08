import React from 'react';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailIcon from '@mui/icons-material/Mail';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-icons">
        <div className="sidebar-icon"><HomeIcon /></div>
        <div className="sidebar-icon"><BarChartIcon /></div>
        <div className="sidebar-icon"><MailIcon /></div>
        <div className="sidebar-icon"><AssignmentIcon /></div>
        <div className="sidebar-icon"><ShoppingCartIcon /></div>
      </div>
      <div className="sidebar-icon sidebar-icon-settings"><SettingsIcon /></div>
    </div>
  );
}

export default Sidebar;
