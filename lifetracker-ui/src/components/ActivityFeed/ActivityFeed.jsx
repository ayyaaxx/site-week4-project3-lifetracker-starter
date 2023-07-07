import "./ActivityFeed.css"
import React from 'react'
import { Link } from "react-router-dom";
import ActivityHero from "../ActivityHero/ActivityHero";

const ActivityFeed = () => {
  return (
    <div className = "activity-feed">
      <ActivityHero/>
      <button>
        Add Excercise 
      </button>
      <button>
        <Link to="/sleep">Log Sleep</Link>
    </button>
      <button>
      <Link to="/nutrition">Record Nutrition</Link> 
      </button>
      <div className = "total-excercise">
      <h2>Total Excercise Minutes</h2>
      </div>
      <div className = "hour-sleep">
      <h2>Average Hours of Sleep</h2>
      </div>
      <div className = "avg-daily">
      <h2>Average Daily Calories</h2>
      </div>

      
    </div>
  )
}

export default ActivityFeed
