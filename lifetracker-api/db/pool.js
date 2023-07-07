const { Pool } = require("pg"); //importing pg module/depedency

//SQL script as a string to create a table called users
const sqlScript = `
CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        username VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL
    );
    
CREATE TABLE IF NOT EXISTS nutrition(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL,
        calories VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL,
        user_id VARCHAR(255) NOT NULL,
        created_at DATE NOT NULL
    );

CREATE TABLE IF NOT EXISTS sleep(
        id SERIAL PRIMARY KEY,
        sleeptime TIMESTAMP NOT NULL,
        waketime TIMESTAMP NOT NULL,
        user_id INTEGER NOT NULL
  );
`;

//DB information to connect
const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "life_tracker",
});

//Execute the SQL script
pool
  .query(sqlScript)
  .then(() => {
    console.log("Table create query successfully");
  })
  .catch((error) => {
    console.error("Error creating table", error);
  });

//export the pool to be used in a different file
module.exports = pool;