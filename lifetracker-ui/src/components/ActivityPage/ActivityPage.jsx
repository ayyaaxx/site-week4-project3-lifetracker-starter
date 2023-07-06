import React from "react";
import "./ActivityPage.css";
import Loading from "../Loading/Loading";
import ActivityFeed from "../ActivityFeed/ActivityFeed";

const ActivityPage = ({ appState }) => {
  // const ActivityPage = ({isProcessing}) => {

  const { isProcessing, activityData } = appState;

  return (
    <div className="activity-page">
      <div className = "activity-label">
      <h3>Activity Feed</h3>
      </div>
     {isProcessing ? (
        <Loading />
      ) : (
        <ActivityFeed activityData={activityData} />
        // <ActivityFeed />
      )} 
  
    </div>
  );
};

export default ActivityPage;
