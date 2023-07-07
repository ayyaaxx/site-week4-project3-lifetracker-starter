import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SleepForm.css";

const SleepForm = ({ user_id, setStartTime, setEndTime }) => {
  const [sleeptime, setSleeptime] = useState("");
  const [waketime, setWaketime] = useState("");
  const [displayData, setDisplayData] = useState(false);
  const [timeData, setTimeData] = useState([]);

  const fetchSleep = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/sleep`);
      setTimeData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSleepSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/sleep", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sleeptime, waketime, user_id }),
      });
      const data = await response.json();
      console.log(data); // optional - display error message
    } catch (error) {
      console.error("Error:", error);
    }
    fetchSleep();
    setStartTime("");
    setEndTime("");
  };

  useEffect(() => {
    fetchSleep();
  }, []);

  return (
    <div className="sleep-form">
      <form onSubmit={handleSleepSubmit}>
        <label>Start Time:</label>
        <input
          className="sleep-form-input"
          type="datetime-local"
          value={sleeptime}
          onChange={(e) => setSleeptime(e.target.value)}
          required
        />
        <label>End Time: </label>
        <input
          className="sleep-form-input"
          type="datetime-local"
          value={waketime}
          onChange={(e) => setWaketime(e.target.value)}
          required
        />
        <button className="save-sleep" type="submit">
          Save
        </button>
      </form>

      <ul>
        {timeData.map((time) => (
          <li key={time.id}>
            <div className="card">
              <div><p> Sleep Time: </p>{time.sleeptime}</div>
              <div><p> Wake Time: </p>{time.waketime}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SleepForm;
