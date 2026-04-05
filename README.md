# RoutePulse – Smart Bus Management System 🚌

A full-stack smart bus management platform built for **Smart India Hackathon 2024**, securing **Finalist rank** among 1000+ participating teams. RoutePulse supports real-time bus tracking, ticket booking with QR code confirmation, and a multi-role system for Passengers, Crew, and Admins.

> ⚠️ This project is currently a work in progress / demo. Some features may be incomplete.

---

## 📸 App Overview

![RoutePulse App Overview]([https://ibb.co/397QjtX0](https://media.discordapp.net/attachments/717998252602949632/1490419103331258468/Gemini_Generated_Image_gkflkngkflkngkfl.png?ex=69d3fc74&is=69d2aaf4&hm=33bb80dd251fa41f96f746f48b3c8f1ffb0f53e41047a4d305e6e6d80d34d2f1&=&format=webp&quality=lossless&width=649&height=974))

> Features authentication, route search, live tracking, seat booking with QR confirmation, and a 3-role system architecture (Passenger / Crew / Admin).

---

## ✨ Features

**Passenger**
- 🔐 Secure Login / Signup authentication
- 🔍 Search buses by route number
- 🗺️ Real-time bus tracking on live map
- 📋 View detailed route info — stops, timing, bus number
- 🎫 Book tickets with passenger details and travel date
- ✅ Payment confirmation with downloadable QR code (Booking ID)

**Crew**
- 👤 Crew login with dedicated dashboard
- 🚌 View assigned routes and stops
- 📍 Live location updates

**Admin**
- 🛠️ Manage passengers, crew, buses, and routes
- 📊 Monitor all active bookings and system activity
- ➕ Add or update route and seat information

---

## 🏗️ System Architecture

The platform follows a 3-role workflow:

```
          Guest              Start
            │                 │
         Home Page ←──── Login Page ──→ Forgot Password
            │
    ┌───────┴────────┐
    │                │
  Passenger        Admin / Crew
    │                │
Trip Planner      Passenger & Crew Info
Bus Availability  Routes, Buses, Stops
Book Tickets      ──────────────────────
Live Tracking         Add / Edit Info
    │
Confirm Vehicle
    │
Search Bus Stop, Routes, Destination
    │
  ┌─Yes─┐
  │     │
Booking  Search
Success  Results
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js, JavaScript |
| Backend | Node.js, Express.js, Python |
| Database | MongoDB |
| Real-time | Socket.IO |
| Maps | Google Maps API |
| Infrastructure | AWS |

---

## 📁 Project Structure

```
RoutePulse/
├── frontend/       # React.js client
└── Backend/        # Node.js + Express + Python server
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- Python >= 3.8
- npm or yarn

### Installation

```bash
git clone https://github.com/Parastud/RoutePulse.git
cd RoutePulse
```

### Running the Frontend

```bash
cd frontend
npm install
npm start
```

### Running the Backend

```bash
cd Backend
npm install
node index.js
```

### Environment Variables

Create a `.env` file inside `Backend/`:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

---

## 🏆 Hackathon

Built for **Smart India Hackathon 2024** — secured **Finalist** rank among **1000+ participating teams** nationwide. Collaborated in a cross-functional team of 4.

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built by [Parth Sharma](https://github.com/parastud)
