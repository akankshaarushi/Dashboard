import React from "react";
import "./TotalOrders.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';

function TotalOrders() {
  return (
    <div className="total-orders">
      <div className="order card">
        <div className="icon-container blue">
          <ShoppingBasketIcon />
        </div>
        <h3>Total Orders</h3>
        <div className="percentage">
          <p>75</p>
          <p className="up">▲ 3%</p>
        </div>
      </div>
      <div className="order card">
        <div className="icon-container green">
          <LocalMallIcon />
        </div>
        <h3>Total Delivered</h3>
        <div className="percentage">
          <p>70</p>
          <p className="down">▼ 3%</p>
        </div>
      </div>
      <div className="order card">
        <div className="icon-container orange">
          <ShoppingBagIcon />
        </div>
        <h3>Total Cancelled</h3>
        <div className="percentage">
          <p>05</p>
          <p className="up">▲ 3%</p>
        </div>
      </div>
      <div className="order card">
        <div className="icon-container pink">
          <AssignmentReturnedIcon />
        </div>
        <h3>Total Revenue</h3>
        <div className="percentage">
          <p>$12k</p>
          <p className="down">▼ 3%</p>
        </div>
      </div>
    </div>
  );
}

export default TotalOrders;
