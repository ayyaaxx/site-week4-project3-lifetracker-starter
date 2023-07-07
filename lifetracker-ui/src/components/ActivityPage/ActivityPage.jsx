import React from "react";
import "./ActivityPage.css";
import Loading from "../Loading/Loading";
import ActivityFeed from "../ActivityFeed/ActivityFeed";

const ActivityPage = ({ appState }) => {

  const { isProcessing, activityData } = appState;

  return (
    <div className="activity-page">
     
     {isProcessing ? (
        <Loading />
      ) : (
        <ActivityFeed activityData={activityData} />
      )} 
  
    </div>
  );
};

export default ActivityPage;
