import "./ActivityFeed.css"
import React from 'react'
      // totalCaloriesPerDay - an array of items containing summary data about the total calories consumed per day
      // avgCaloriesPerCategory - an array of items containing summary data about the average calories consumed per category

const ActivityFeed = () => {
  return (
    <div className = "activity-feed">
      <button>
        Add Excercise 
      </button>
      <button>
        Log Sleep 
      </button>
      <button>
        Record Nutrition
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
