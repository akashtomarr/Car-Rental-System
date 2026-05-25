# 🚗 DRIVEEASE – Smart Car Rental System

A modern full-stack car rental web application developed using HTML, CSS, JavaScript, Node.js, Express.js, and MySQL. DRIVEEASE provides users with a seamless platform to explore available vehicles, book rentals online, and manage rental data efficiently through a connected backend and database system.

---

# 📌 Project Overview

DRIVEEASE is designed to simulate a real-world online car rental platform where users can:

- Browse available cars
- View rental pricing
- Book vehicles online
- Store booking details in MySQL
- Manage rental data through backend APIs

The project demonstrates complete frontend-backend integration and database connectivity, making it an excellent full-stack development project for learning and portfolio purposes.

---

# ✨ Key Features

## 🚘 Car Listing System
- Dynamically fetches cars from MySQL database
- Displays vehicle name, type, and pricing
- Responsive car card UI
- Interactive rental buttons

---

## 📅 Online Booking System
Users can:
- Enter personal details
- Select pickup date
- Select return date
- Calculate rental duration automatically
- Save booking information to database

---

## 🗄️ MySQL Database Integration
- Cars stored in database
- Booking records saved permanently
- SQL queries handled through Express backend
- Real-time data fetching

---

## ⚡ REST API Backend

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/cars` | Fetch all cars |
| POST | `/api/cars` | Add new car |
| POST | `/api/bookings` | Save booking |
| GET | `/api/bookings` | Get booking history |

---

## 🎨 Modern Responsive UI
- Clean and modern interface
- Responsive layout for multiple devices
- Interactive modal booking system
- Hover effects and smooth user experience

---

# 🛠️ Technologies Used

## Frontend
- HTML5
- CSS3
- JavaScript (ES6)

## Backend
- Node.js
- Express.js

## Database
- MySQL

## Tools & Packages
- Nodemon
- CORS
- MySQL2

---

# 📂 Project Structure

```text
akkicars-backend/
│
├── public/
│   ├── index.html
│   ├── style.css
│
├── server.js
├── package.json
├── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone <your-github-repo-link>
```

---

## 2️⃣ Open Project Folder

```bash
cd akkicars-backend
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Configure MySQL Database

Create database:

```sql
CREATE DATABASE driveease;
```

---

## 5️⃣ Create Cars Table

```sql
CREATE TABLE cars (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  type VARCHAR(255),
  pricePerDay INT
);
```

---

## 6️⃣ Insert Sample Cars

```sql
INSERT INTO cars (name, type, pricePerDay)
VALUES
('BMW X5', 'SUV', 5000),
('Audi A6', 'Sedan', 4500),
('Toyota Fortuner', 'SUV', 4000),
('Hyundai Creta', 'SUV', 3000),
('Mercedes C-Class', 'Luxury', 7000);
```

---

## 7️⃣ Create Bookings Table

```sql
CREATE TABLE bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  carId INT,
  userName VARCHAR(255),
  email VARCHAR(255),
  pickupDate DATE,
  returnDate DATE,
  days INT,
  totalPrice INT
);
```

---

## 8️⃣ Start Server

```bash
npx nodemon server.js
```

---

## 9️⃣ Open Website

```text
http://localhost:5001
```

---

# 🔥 Functionalities Explained

## ✅ Dynamic Car Rendering
Cars are loaded directly from the backend API using JavaScript `fetch()`.

---

## ✅ Backend API Integration
Frontend communicates with backend APIs for:
- fetching cars
- storing bookings
- retrieving booking history

---

## ✅ Booking Workflow
1. User selects a car
2. Modal form opens
3. User enters booking details
4. Booking saved to MySQL database
5. Success message displayed

---

## ✅ Error Handling
The project includes:
- backend validation
- API error handling
- frontend try/catch handling

---

# 📸 Screenshots

## Home Page
- Responsive vehicle cards
- Pricing display
- Rental options

## Booking Modal
- User-friendly booking form
- Date selection
- Booking confirmation

---

# 🚀 Future Improvements

The following features can be added in future versions:

- User Authentication System
- Admin Dashboard
- Payment Gateway Integration
- Booking Cancellation
- Vehicle Images Upload
- Search & Filter Functionality
- JWT Authentication
- Deployment on Render/Vercel
- React Frontend Upgrade
- Email Notifications

---

# 🎯 Learning Outcomes

This project helped in understanding:

- Full-stack web development
- REST API creation
- CRUD operations
- Database integration
- Frontend & backend communication
- Asynchronous JavaScript
- Express.js routing
- MySQL query handling

---

# 💼 Portfolio Value

DRIVEEASE is a strong beginner-to-intermediate level full-stack project suitable for:

- Resume projects
- Internship applications
- GitHub portfolio
- College submissions
- MERN stack preparation

---

# 👨‍💻 Developer

## Akash Tomar

Passionate developer focused on:
- Full-stack web development
- Backend engineering
- Database management
- Building scalable web applications

---

# 📜 License

This project is created for educational and portfolio purposes.

---

# ⭐ Support

If you like this project:
- Give it a star on GitHub
- Fork the repository
- Improve and build upon it

---

# 🙌 Acknowledgements

Special thanks to:
- Open-source community
- Node.js ecosystem
- Express.js documentation
- MySQL documentation

---

# 📧 Contact

📩 Akash Tomar  
🚀 Full Stack Developer Enthusiast