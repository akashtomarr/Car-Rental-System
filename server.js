import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

// ================= MIDDLEWARE =================
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// ================= MYSQL CONNECTION =================
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "driveease"
});

db.connect((err) => {
  if (err) {
    console.log("❌ DB Connection Error:", err);
  } else {
    console.log("✅ MySQL Connected");
  }
});

// ================= GET ALL CARS =================
app.get("/api/cars", (req, res) => {
  const sql = "SELECT * FROM cars";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch cars" });
    }
    res.json(result); // ✅ SIMPLE FORMAT (IMPORTANT)
  });
});

// ================= ADD CAR =================
app.post("/api/cars", (req, res) => {
  const { name, type, pricePerDay } = req.body;

  const sql = "INSERT INTO cars (name, type, pricePerDay) VALUES (?, ?, ?)";

  db.query(sql, [name, type, pricePerDay], (err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to add car" });
    }

    res.json({ message: "Car added successfully" });
  });
});

// ================= CREATE BOOKING =================
app.post("/api/bookings", (req, res) => {
  const {
    carId,
    userName,
    email,
    pickupDate,
    returnDate,
    days,
    totalPrice
  } = req.body;

  const sql = `
    INSERT INTO bookings 
    (carId, userName, email, pickupDate, returnDate, days, totalPrice)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [carId, userName, email, pickupDate, returnDate, days, totalPrice],
    (err) => {
      if (err) {
        return res.status(500).json({ error: "Booking failed" });
      }

      res.json({ success: true, message: "Booking saved" });
    }
  );
});

// ================= GET BOOKINGS =================
app.get("/api/bookings", (req, res) => {
  const sql = "SELECT * FROM bookings ORDER BY id DESC";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch bookings" });
    }

    res.json(result);
  });
});

// ================= START SERVER =================
const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});