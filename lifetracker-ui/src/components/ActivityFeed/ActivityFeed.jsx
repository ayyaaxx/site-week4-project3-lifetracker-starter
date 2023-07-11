// import "./ActivityFeed.css";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import ActivityHero from "../ActivityHero/ActivityHero";

// const ActivityFeed = () => {
//   const [avgSleep, setAvgSleep] = useState([]);

//   const fetchSleepAvg = async () => {
//     try {
//       const response = await axios.get("http://localhost:3001/api/activity");
//       setAvgSleep(response.data);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   useEffect(() => {
//     fetchSleepAvg();
//   }, []);

//   return (
//     <div className="activity-feed">
//       <ActivityHero />
//       <div className="button">
//         <button>
//           <Link to="/activity">Add Exercise</Link>
//         </button>
//         <button>
//           <Link to="/sleep">Log Sleep</Link>
//         </button>
//         <button>
//           <Link to="/nutrition">Record Nutrition</Link>
//         </button>
//       </div>
//       <div className="activity-line">
//         <div className="total-exercise">
//           <h2>Total Exercise Minutes</h2>
//           <div className="activity-card">
//             <p>Exercise Minutes:</p>
//           </div>
//         </div>
//         <div className="hour-sleep">
//           <h2>Average Hours of Sleep</h2>
//           <div className="activity-card">
//             <p>Hours of Sleep:</p>
//             <ul>
//               {avgSleep.map((time) => (
//                 <li key={time.id}>
//                   <div className="cards">
//                     {/* <p>Sleep Time:</p> */}
//                     <p>{time.average_sleep_duration}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div className="avg-daily">
//           <h2>Average Daily Calories</h2>
//           <div className="activity-card">
//             <p>Daily Calories:</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ActivityFeed;

import "./ActivityFeed.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ActivityHero from "../ActivityHero/ActivityHero";

const ActivityFeed = () => {
  const [avgSleep, setAvgSleep] = useState([]);

  const fetchSleepAvg = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/activity");
      setAvgSleep(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchSleepAvg();
  }, []);

  const removeZeros = (value) => {
    if (value === null || typeof value !== "string") {
      return ""; // or return a suitable fallback value
    }
    return value.replace(/^0+|0+$/g, "");
  };
  

  return (
    <div className="activity-feed">
      <ActivityHero />
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
            <ul>
              {avgSleep.map((time) => (
                <li key={time.id}>
                  <div className="cards">
                    {/* <p>Sleep Time:</p> */}
                    <p>{removeZeros(time.average_sleep_duration)}</p>
                  </div>
                </li>
              ))}
            </ul>
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
  );
};

export default ActivityFeed;

