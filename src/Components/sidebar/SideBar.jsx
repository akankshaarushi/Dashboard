import React from 'react';
import './Sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ListIcon from '@mui/icons-material/List';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-icon"><DashboardIcon /></div>
      <div className="sidebar-icon"><AssignmentIcon /></div>
      <div className="sidebar-icon"><ListIcon /></div>
    </div>
  );
}

export default Sidebar;
