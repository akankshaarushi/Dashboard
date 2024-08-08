import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import "./Activity.css";

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement);

const data = {
  labels: [
    5,
    "",
    9,
    "",
    11,
    "",
    13,
    "",
    15,
    "",
    17,
    "",
    19,
    "",
    21,
    "",
    23,
    "",
    25,
    "",
    27,
  ],
  datasets: [
    {
      label: "Activity",
      data: [
        4000, 8000, 4000, 5000, 7000, 7000, 5000, 6000, 7000, 6000, 3000, 7000,
        8000, 9000, 8000, 7000, 6000, 5000, 12000, 7000, 6000, 7000, 5000,
        8000, 7000, 8000, 6000, 8000, 4000, 5000,
      ],
      backgroundColor: "#7699e1",
      borderRadius: 20, // Apply the rounded corners here
      barPercentage: 0.7,
      categoryPercentage: 0.9,
      borderSkipped: false, // Make sure the border is not skipped
    },
  ],
};
const options = {
  scales: {
    y: {
      beginAtZero: true,
      max: 15000, // Set the maximum value of y-axis to 15000
      ticks: {
        stepSize: 5000, // Step size between ticks
        color: "white",
        font: {
          size: 14,
        },
        callback: function (value) {
          return value >= 1000 ? `${value / 1000}k` : value; // Format the ticks
        },
      },
      grid: {
        color: "rgba(255, 255, 255, 0.2)",
      },
    },
    x: {
      ticks: {
        color: "white",
        font: {
          size: 14,
        },
      },
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: 20, // Add some space at the top
      bottom: 10, // Add some space at the bottom
    },
  },
};

function Activity() {
  return (
    <div className="activity">
      <div className="header">
        <h3>Activity</h3>
        <select className="dropdown">
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <div style={{ height: "300px" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default Activity;
