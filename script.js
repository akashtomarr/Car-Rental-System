const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// ================= MYSQL CONNECTION =================
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",   // change if needed
  database: "car_rental"
});

// Better connection handling
db.connect((err) => {
  if (err) {
    console.log("❌ MySQL Connection Failed:", err);
  } else {
    console.log("✅ MySQL Connected Successfully");
  }
});

// ================= ROUTES =================

// Get all cars
app.get("/api/cars", (req, res) => {
  db.query("SELECT * FROM cars", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error fetching cars" });
    }
    res.json(data);
  });
});

// Add new car
app.post("/api/cars", (req, res) => {
  const { name, type, pricePerDay } = req.body;

  if (!name || !type || !pricePerDay) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const sql =
    "INSERT INTO cars (name, type, pricePerDay) VALUES (?, ?, ?)";

  db.query(sql, [name, type, pricePerDay], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error adding car" });
    }

    res.json({
      message: "Car added successfully",
      id: result.insertId
    });
  });
});

// ================= START SERVER =================
const PORT = 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server Running on http://localhost:${PORT}`);
});