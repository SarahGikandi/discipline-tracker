# 🔥 The Flame System

A personal discipline and life balance tracker built with React + Vite.

This project is a **personal student control dashboard** that tracks study time, entertainment time, mental energy, and daily streaks represented by a growing flame.


## 🌟 Purpose

The Flame System helps me stay intentional with how I spend my time by visually tracking:

- 📚 Study time
- 🎮 Entertainment time
- 🧠 Mental energy (mood tracking)
- 🔥 Daily discipline streak

It is designed to represent balance, growth, and self-control.


## 🚀 Features

### ⏱ Study Timer
- Start/stop study sessions
- Automatically calculates total study time per day
- Saves data using LocalStorage

### 🎮 Entertainment Tracker
- Manual input of entertainment hours
- Used in streak calculations

### 🧠 Mood Tracker
- Daily mood rating (1–10 scale)
- Helps measure mental energy

### 🔥 Flame Streak System
- Visual flame grows with consistency:
  - Small flame (1–3 streak)
  - Medium flame (4–7 streak)
  - Large glowing flame (8+ streak)
- Resets if discipline conditions are not met

### 💕 Animated Background
- Floating soft heart animations
- Personal background image with overlay

### 💾 Local Storage Support
- Saves all data in the browser
- No backend required


## 🛠 Tech Stack

- React (Functional Components)
- Vite
- JavaScript (ES6+)
- CSS / CSS Modules
- LocalStorage API

## 📁 Project Structure
src/
├── components/
│ ├── Flame.jsx
│ ├── Timer.jsx
│ ├── MoodTracker.jsx
│ ├── EntertainmentInput.jsx
│ ├── HeartsBackground.jsx
│ └── Dashboard.jsx
│
├── App.jsx
├── main.jsx

# Install dependencies
npm install

# Run development server
npm run dev


## 🌍 Deployment
This project is optimized for deployment on:
Netlify

## 💡 Future Improvements
Backend integration (Java + Spring Boot)
User authentication system
Cloud database (MySQL / Firebase)
Weekly and monthly analytics
Burnout detection system
AI-based productivity suggestions