import React from "react";
import "./CustomerFeedback.css";
import Avatar from "@mui/material/Avatar"; // Import MUI Avatar component

function CustomerFeedback() {
  return (
    <div className="customer-feedback">
      <h3>Customer's Feedback</h3>
      <div className="feedback">
        <div className="feedback-item">
          <div className="feedback-header">
            <Avatar
              alt="Jenny Wilson"
              src="/path/to/jenny-wilson.jpg"
              className="avatar"
            />
            <p className="customer-name">Jenny Wilson</p>
          </div>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p className="review">
            The food was excellent and so was the service. s simply dummy text
            of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
        </div>
        <div className="feedback-item">
          <div className="feedback-header">
            <Avatar
              alt="Diane Russell"
              src="/path/to/diane-russell.jpg"
              className="avatar"
            />
            <p className="customer-name">Diane Russell</p>
          </div>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p className="review">
            We enjoyed the Eggs Benedict served on homemade focaccia bread and
            hot coffee. Perfect service.
          </p>
        </div>
        <div className="feedback-item">
          <div className="feedback-header">
            <Avatar
              alt="Devon Lane"
              src="/path/to/devon-lane.jpg"
              className="avatar"
            />
            <p className="customer-name">Devon Lane</p>
          </div>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p className="review">
            Normally wines are wines, but theirs are lean, meaty and tender, and
            lively.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CustomerFeedback;
