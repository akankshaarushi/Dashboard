import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/sidebar/SideBar";
import Header from "./Components/header/Header";
import TotalOrders from "./Components/totalOrders/TotalOrders";
import NetProfit from "./Components/netProfit/NetProfit";
import Activity from "./Components/activity/Activity";
import GoalsPopularDishesMenus from "./Components/goalPopularMenu/GoalsPopularDishesMenus";
import RecentOrders from "./Components/recentOrders/RecentOrders";
import CustomerFeedback from "./Components/customerFeedback/CustomerFeedback";
import Login from "./Components/login/LogIn";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');
  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  const handleLogin = (user) => {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("username", user);
    setIsAuthenticated(true);
    setUsername(user);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("username");
    setIsAuthenticated(false);
    setUsername(""); // Clear the username on logout
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <Dashboard onLogout={handleLogout} username={username} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

const Dashboard = ({ onLogout, username }) => (
  <div className="app">
    <Sidebar />
    <div className="main-content">
      <Header onLogout={onLogout} username={username} />
      <div className="dashboard">
        <div className="heading">Dashboard</div>
        <div className="stats">
          <TotalOrders />
          <NetProfit />
        </div>
        <div className="other-sections">
          <Activity />
          <GoalsPopularDishesMenus />
        </div>
        <div className="lower-section">
          <RecentOrders />
          <CustomerFeedback />
        </div>
      </div>
    </div>
  </div>
);

export default App;
