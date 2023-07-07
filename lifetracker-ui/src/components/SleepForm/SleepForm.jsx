import React, { useState } from "react";
import "./SleepForm.css";

const SleepForm = ({ user_id, setStartTime, setEndTime }) => {
  const [sleeptime, setSleeptime] = useState("");
  const [waketime, setWaketime] = useState("");
  const [displayData, setDisplayData] = useState(false);

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

      console.log(data.message); // optional - display error message
    } catch (error) {
      console.error("Error:", error);
    }

    setStartTime("");
    setEndTime("");
    setDisplayData(true);
  };

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

      {displayData ? (
        <>
          <p>{sleeptime}</p>
          <p>{waketime}</p>
        </>
      ) : (
        <p>hi</p>
      )}
    </div>
  );
};

export default SleepForm;

// import React, { useState } from "react";
// import "./SleepForm.css";

// const SleepForm = ({ user_id, setStartTime, setEndTime }) => {
//   const [sleeptime, setSleeptime] = useState("");
//   const [waketime, setWaketime] = useState("");
//   const [displayData, setDisplayData] = useState([]);
//   const [formData, setFormData] = useState({ sleeptime: "", waketime: "" });

//   const handleSleepSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:3001/api/sleep", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData, user_id),
//       });
//       const data = await response.json();

//       console.log(data.message); // optional - display error message
//     } catch (error) {
//       console.error("Error:", error);
//     }

//     setStartTime("");
//     setEndTime("");
//     setDisplayData([...displayData, formData]);
//     setFormData({ sleeptime: "", waketime: "" });
//   };

//   return (
//     <div className="sleep-form">
//       <form onSubmit={handleSleepSubmit}>
//         <label>Start Time:</label>
//         <input
//           className="sleep-form-input"
//           type="datetime-local"
//           value={formData.sleeptime}
//           onChange={(e) =>
//             setFormData({ ...formData, sleeptime: e.target.value })
//           }
//           required
//         />
//         <label>End Time: </label>
//         <input
//           className="sleep-form-input"
//           type="datetime-local"
//           value={formData.waketime}
//           onChange={(e) =>
//             setFormData({ ...formData, waketime: e.target.value })
//           }
//           required
//         />
//         <button className="save-sleep" type="submit">
//           Save
//         </button>
//       </form>

//       {displayData.length > 0 ? (
//         displayData.map((data, index) => (
//           <div key={index}>
//             <p>{data.sleeptime}</p>
//             <p>{data.waketime}</p>
//           </div>
//         ))
//       ) : (
//         <p></p>
//       )}
//     </div>
//   );
// };

// export default SleepForm;

// import React, { useState, useEffect } from "react";
// import "./SleepForm.css";

// const SleepForm = ({ user_id, setStartTime, setEndTime }) => {
//   const [sleeptime, setSleeptime] = useState("");
//   const [waketime, setWaketime] = useState("");
//   const [displayData, setDisplayData] = useState(false);

//   useEffect(() => {
//     // Fetch sleep data for the user when the component mounts
//     const fetchSleepData = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/api/sleep/${user_id}`);
//         const data = await response.json();

//         if (response.ok) {
//           setSleeptime(data.sleeptime);
//           setWaketime(data.waketime);
//           setDisplayData(true);
//         } else {
//           console.log(data.message); // optional - display error message
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };

//     fetchSleepData();
//   }, [user_id]);

//   const handleSleepSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:3001/api/sleep", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ sleeptime, waketime, user_id }),
//       });
//       const data = await response.json();

//       if (response.ok) {
//         console.log(data.message); // optional - display success message
//       } else {
//         console.log(data.message); // optional - display error message
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }

//     setDisplayData(true);
//   };

//   return (
//     <div className="sleep-form">
//       <form onSubmit={handleSleepSubmit}>
//         <label>Start Time:</label>
//         <input
//           className="sleep-form-input"
//           type="datetime-local"
//           value={sleeptime}
//           onChange={(e) => setSleeptime(e.target.value)}
//           required
//         />
//         <label>End Time: </label>
//         <input
//           className="sleep-form-input"
//           type="datetime-local"
//           value={waketime}
//           onChange={(e) => setWaketime(e.target.value)}
//           required
//         />
//         <button className="save-sleep" type="submit">
//           Save
//         </button>
//       </form>

//       {displayData ? (
//         <>
//           <p>{sleeptime}</p>
//           <p>{waketime}</p>
//         </>
//       ) : (
//         <p>hi</p>
//       )}
//     </div>
//   );
// };

// export default SleepForm;
