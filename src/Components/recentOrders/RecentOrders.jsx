import React from 'react';
import './RecentOrders.css';

function RecentOrders() {
  return (
    <div className="recent-orders">
      <h3>Recent Orders</h3>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="customer-info">
                <img src="path/to/avatar1.png" alt="Wade Warren" className="avatar" />
                <span>Wade Warren</span>
              </div>
            </td>
            <td>15478256</td>
            <td>$124.00</td>
            <td className="status delivered">Delivered</td>
          </tr>
          <tr>
            <td>
              <div className="customer-info">
                <img src="path/to/avatar2.png" alt="Jane Cooper" className="avatar" />
                <span>Jane Cooper</span>
              </div>
            </td>
            <td>48965786</td>
            <td>$365.02</td>
            <td className="status delivered">Delivered</td>
          </tr>
          <tr>
            <td>
              <div className="customer-info">
                <img src="path/to/avatar3.png" alt="Guy Hawkins" className="avatar" />
                <span>Guy Hawkins</span>
              </div>
            </td>
            <td>78958215</td>
            <td>$45.88</td>
            <td className="status cancelled">Cancelled</td>
          </tr>
          <tr>
            <td>
              <div className="customer-info">
                <img src="path/to/avatar4.png" alt="Kristin Watson" className="avatar" />
                <span>Kristin Watson</span>
              </div>
            </td>
            <td>20965732</td>
            <td>$65.00</td>
            <td className="status pending">Pending</td>
          </tr>
          <tr>
            <td>
              <div className="customer-info">
                <img src="path/to/avatar5.png" alt="Cody Fisher" className="avatar" />
                <span>Cody Fisher</span>
              </div>
            </td>
            <td>95715920</td>
            <td>$545.00</td>
            <td className="status delivered">Delivered</td>
          </tr>
          <tr>
            <td>
              <div className="customer-info">
                <img src="path/to/avatar6.png" alt="Savannah Nguyen" className="avatar" />
                <span>Savannah Nguyen</span>
              </div>
            </td>
            <td>78514568</td>
            <td>$128.20</td>
            <td className="status delivered">Delivered</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RecentOrders;
