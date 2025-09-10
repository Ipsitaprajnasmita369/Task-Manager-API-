 // src/testDb.ts
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("✅ MySQL connected successfully!");

    // Optional: simple query to test
    const [rows] = await connection.query("SELECT NOW() AS now");
    console.log("Database response:", rows);

    connection.release();
  } catch (err) {
    console.error("❌ MySQL connection failed:", err);
  } finally {
    pool.end();
  }
}

testConnection();