import "./ActivityFeed.css";
import React from 'react';
import { Link } from "react-router-dom";
import ActivityHero from "../ActivityHero/ActivityHero";

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <ActivityHero/>
      <div className="button">
        <button>
          <Link to="/activity">Add Exercise</Link>
        </button>
        <button>
          <Link to="/sleep">Log Sleep</Link>
        </button>
        <button>
          <Link to="/nutrition">Record Nutrition</Link> 
        </button>
      </div>
      <div className="activity-line">
        <div className="total-exercise">
          <h2>Total Exercise Minutes</h2>
          <div className="activity-card">
            <p>Exercise Minutes:</p>
          </div>
        </div>
        <div className="hour-sleep">
          <h2>Average Hours of Sleep</h2>
          <div className="activity-card">
            <p>Hours of Sleep:</p>
          </div>
        </div>
        <div className="avg-daily">
          <h2>Average Daily Calories</h2>
          <div className="activity-card">
            <p>Daily Calories:</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivityFeed;

