// //import statements 

// const express = require('express');
// const router = express.Router();
// const pool = require("../db/pool");

// // get the sleep information 
// router.get("/", async (req, res) => {
//     try{
//         const query = 'SELECT * FROM sleep'; 
//         const result = await pool.query(query);
//         res.json(result.rows)
//     }
//     catch (error){
//         console.error("Error:", error);
//         res.status(500).json({error: "Internal server error"})
//     }
// }); 

// //post request that pushes data to front-end displaying the sleep time 
// router.post("/", async (req, res) => {
//     try{
//         const {sleeptime, waketime } = req.body;
//         const user_id = req.user.id; 

//         const query = 
//         "INSERT INTO sleep (sleeptime, waketime, user_id) VALUES ($1, $2, $3) RETURNING *";
//         const values = [sleeptime, waketime, user_id];

//         const result = await pool.query(query, values);
//         res.status(201).json(result.rows[0]);
//     }   catch (error) {
//         console.error("Error:", error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// });
    
// module.exports = router; 

// import statements
const express = require('express');
const router = express.Router();
const pool = require("../db/pool");

// get the sleep information
router.get("/", async (req, res) => {
  try {
    const query = 'SELECT * FROM users, sleep WHERE sleep.user_id = users.id';
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// post request that pushes data to front-end displaying the sleep time
router.post("/", async (req, res) => {
  try {
    const { sleeptime, waketime, user_id } = req.body;

    const query =
      "INSERT INTO sleep (sleeptime, waketime, user_id) VALUES ($1, $2, $3) RETURNING *";
    const values = [sleeptime, waketime, user_id];

    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
