import React from "react";
import "./App.css";
import Sidebar from "./Components/sidebar/SideBar";
import Header from "./Components/header/Header";
import TotalOrders from "./Components/totalOrders/TotalOrders";
import NetProfit from "./Components/netProfit/NetProfit";
import Activity from "./Components/activity/Activity";
import GoalsPopularDishesMenus from "./Components/goalPopularMenu/GoalsPopularDishesMenus";
import RecentOrders from "./Components/recentOrders/RecentOrders";
import CustomerFeedback from "./Components/customerFeedback/CustomerFeedback";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
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
}

export default App;
