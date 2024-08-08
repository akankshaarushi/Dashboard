import React from 'react';
import './NetProfit.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function NetProfit() {
  return (
    <div className="net-profit">
      <div className="text-section">
        <h3>Net Profit</h3>
        <p>$ 6759.25</p>
        <div className="percentage-change">▲ 3%</div>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar-wrapper">
          <CircularProgressbar
            value={70}
            strokeWidth={12} // Thicker progress bar
            styles={buildStyles({
              textColor: "white",
              pathColor: "#7699e1",
              trailColor: "#444",
            })}
          />
          <div className="progress-bar-text">
            <div className="percentage-text">70%</div>
            <div className="goal-text">Goal<div>Completed</div></div>
          </div>
        </div>
        <p className="additional-text">The values here have been rounded off</p>
      </div>
    </div>
  );
}

export default NetProfit;
