# ✈️ Flight Status Tracker

<p align="center">
  <strong>A modern and interactive Flight Status Tracking Web Application that allows users to search flights, view flight information, and visualize routes between airports using an interactive live map powered by OpenStreetMap and Leaflet.js.</strong>
</p>

<p align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white">
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black">
  <img alt="Leaflet" src="https://img.shields.io/badge/Maps-Leaflet-199900?logo=leaflet&logoColor=white">
  <img alt="OpenStreetMap" src="https://img.shields.io/badge/Map-OpenStreetMap-7EBC6F">
  <img alt="Deployment" src="https://img.shields.io/badge/Deployment-Netlify-00C7B7?logo=netlify&logoColor=white">
</p>

<p align="center">
  <a href="YOUR_DEPLOY_LINK">🌐 Live Demo</a> •
  <a href="https://github.com/parveen1234567/Flight-Status-Tracker">💻 Source Code</a>
</p>

---

# 🚀 Project Overview

Flight Status Tracker is a responsive web application that enables users to search for flights, view flight details, and visualize flight routes on an interactive map.

The platform simulates real-world flight tracking functionality by displaying airline information, departure and arrival locations, flight status, and route mapping using OpenStreetMap and Leaflet.js.

The project demonstrates frontend development skills, map integration, responsive design, and interactive user experiences without requiring external API keys.

---

# 💡 Problem Statement

Travelers and aviation enthusiasts often need a quick and intuitive way to view flight information and route details.

Traditional systems may:

- Require complex booking platforms
- Depend on paid APIs
- Lack visual route representation
- Provide limited user interaction

This project provides a lightweight solution that focuses on flight information visualization and route mapping.

---

# 🎯 Project Goals

The Flight Status Tracker aims to:

- Provide an intuitive flight search experience
- Visualize routes on interactive maps
- Improve user engagement through responsive design
- Demonstrate navigation and mapping technologies
- Showcase frontend development capabilities

---

# ✨ Core Features

## 🔎 Flight Search

Users can search using a flight number to view:

- Flight Number
- Airline Name
- Flight Status
- Departure Airport
- Arrival Airport

---

## 🗺️ Interactive Live Map

Built using:

- Leaflet.js
- OpenStreetMap

Features include:

- Departure marker
- Arrival marker
- Route visualization
- Automatic zoom adjustment

---

## ✈️ Flight Listings Page

Dedicated flights page displaying:

- Air India
- IndiGo
- Emirates
- Vistara
- British Airways
- SpiceJet
- Lufthansa
- Qantas

Presented in a clean and organized table format.

---

## 📞 Contact Page

Separate contact section displaying:

- Email
- Phone
- Address

Designed with a modern dark-themed layout.

---

## 🎨 Modern User Interface

Features:

- Background image
- Navigation bar
- Overlay effects
- Attractive typography
- Hover animations

---

## 📱 Responsive Design

Optimized for:

- Desktop
- Tablet
- Mobile Devices

---

# 🏗️ System Architecture

## Application Architecture

```text
User
 │
 ▼
Flight Search Interface
 │
 ▼
JavaScript Processing
 │
 ├── Flight Lookup
 ├── Flight Information
 ├── Route Rendering
 └── Map Updates
 │
 ▼
Interactive Flight Display
```

---

## Flight Tracking Workflow

```text
Search Flight Number
         │
         ▼
Retrieve Flight Data
         │
         ▼
Display Flight Details
         │
         ▼
Locate Airports
         │
         ▼
Render Route on Map
```

---

# 📂 Project Structure

```text
Flight-Status-Tracker/
│
├── index.html
│   └── Homepage
│
├── flights.html
│   └── Flight Listings
│
├── contact.html
│   └── Contact Information
│
├── style.css
│   └── Styling & Responsive Design
│
├── script.js
│   └── Flight Tracking Logic
│
├── assets/
│   ├── images/
│   └── icons/
│
└── README.md
```

---

# 🧰 Technology Stack

## Frontend

| Technology | Purpose |
|------------|----------|
| HTML5 | Page Structure |
| CSS3 | Styling |
| JavaScript ES6 | Interactivity |

---

## Mapping Technologies

| Technology | Purpose |
|------------|----------|
| Leaflet.js | Interactive Maps |
| OpenStreetMap | Map Data |

---

## Development Tools

| Technology | Purpose |
|------------|----------|
| Visual Studio Code | Development Environment |
| Git | Version Control |
| GitHub | Repository Hosting |

---

# 🔄 Application Workflow

## Step 1: Enter Flight Number

```text
User Searches Flight
```

---

## Step 2: Display Flight Details

```text
Airline
Status
Departure
Arrival
```

---

## Step 3: Map Visualization

```text
Departure Marker
        │
        ▼
 Flight Route
        │
        ▼
Arrival Marker
```

---

## Step 4: Explore Additional Pages

Users can navigate to:

- Flights Page
- Contact Page

through the navigation menu.

---

# 🚀 Running the Project

## Clone Repository

```bash
git clone https://github.com/parveen1234567/Flight-Status-Tracker.git
```

---

## Navigate to Project

```bash
cd Flight-Status-Tracker
```

---

## Launch Application

Open:

```text
index.html
```

in any modern browser.

Alternatively, use:

```text
VS Code Live Server
```

for development.

---

# 📸 Application Screens

## Home Page

Features:

- Flight Search
- Route Visualization
- Flight Details
- Interactive Map

---

## Flights Page

Displays:

- Available Flights
- Airline Information
- Organized Flight Table

---

## Contact Page

Displays:

- Email Address
- Contact Number
- Location Details

---

# 🚀 Deployment

## Live Application

🌐 YOUR_DEPLOY_LINK

## Hosting Platform

Netlify / Vercel / GitHub Pages

## Deployment Architecture

```text
GitHub Repository
        │
        ▼
 Hosting Platform
        │
        ▼
 Flight Status Tracker
```

The application can be deployed on Netlify, Vercel, or GitHub Pages and accessed directly through a web browser.

---

# 🧩 Challenges Faced

## Interactive Map Integration

Connecting flight data with map visualization.

### Learning

Geolocation data can significantly improve user experience.

---

## Responsive User Interface

Ensuring consistent design across devices.

### Learning

Responsive layouts are essential for modern web applications.

---

## Route Visualization

Fitting departure and arrival locations within a single view.

### Learning

Map libraries provide powerful tools for location-based applications.

---

## Dynamic Flight Search

Displaying relevant information immediately after search.

### Learning

JavaScript DOM manipulation enables interactive user experiences.

---

# 📈 Future Enhancements

Future versions could include:

- ✈️ Real-Time Flight APIs
- 🛰️ Live Aircraft Tracking
- 🌎 International Airport Database
- 📊 Flight Analytics Dashboard
- 🔔 Flight Delay Notifications
- 👤 User Accounts
- ❤️ Favorite Flights
- 🌙 Dark Mode
- 📱 Progressive Web App (PWA)
- 🤖 AI Travel Assistant

---

# 📚 What I Learned

This project helped me gain practical experience in:

- JavaScript Development
- DOM Manipulation
- Interactive Maps
- Leaflet.js Integration
- OpenStreetMap Usage
- Responsive Design
- User Interface Development
- Frontend Architecture
- GitHub Project Management

---

# 🎯 Why This Project?

The Flight Status Tracker demonstrates how mapping technologies and frontend development can be combined to create interactive travel and aviation applications.

The project focuses on delivering a user-friendly experience while visualizing flight routes and airline information in an engaging way.

> **Search Flights. Track Routes. Explore Destinations.**

---

# 📌 Project Highlights

- ✅ Flight Search Functionality
- ✅ Interactive Map Integration
- ✅ Route Visualization
- ✅ Leaflet.js Implementation
- ✅ OpenStreetMap Integration
- ✅ Responsive Design
- ✅ Flight Listings Page
- ✅ Contact Page
- ✅ Modern User Interface
- ✅ Recruiter-Friendly Frontend Project

---

# 🔗 Links

| Resource | Link |
|-----------|------|
| 🌐 Live Application | YOUR_DEPLOY_LINK |
| 💻 GitHub Repository | https://github.com/parveen1234567/Flight-Status-Tracker |
| 👨‍💻 GitHub Profile | https://github.com/parveen1234567 |
| 💼 LinkedIn | https://linkedin.com/in/shaik-chinthapalli-parveen-983668257 |

---

# 🙌 Final Note

The Flight Status Tracker project represents my experience in building interactive, location-based web applications using JavaScript and mapping technologies.

This project strengthened my knowledge of frontend development, user-centered design, data visualization, and map integrations while creating a practical travel-focused application.

> **Flight Status Tracker — Navigate Smarter. Visualize Better. Travel Further.**
