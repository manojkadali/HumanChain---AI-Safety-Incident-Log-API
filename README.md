HumanChain AI Safety Incident Log API

This repository contains a simple RESTful API for logging and managing AI safety incidents, built as a take‑home assignment for a Backend Developer Intern role at Sparkelhood (HumanChain AI Safety). The backend is implemented in Node.js with Express and MongoDB, and a minimal frontend is provided using plain HTML, CSS, and JavaScript.

📁 Project Structure
├── frontend
│   └── index.html         # Simple UI for testing
├── models
│   └── Incident.js        # Mongoose schema
├── routes
│   └── incidents.js       # Express route handlers
├── .env                   # Environment variables (not in Git)
├── server.js              # Entry point
├── package.json
└── README.md

Prerequisites
1. install Node.js v14 or higher( install from nodejs.org).
2. npm usally comes with nodejs,if not install it
3. install mongoDB Community edition with compass(GUI), or mongoDB Atlas connection string.

Installation & Running Locally
steps:-
1. Clone the repository or download the zip file
 ![image](https://github.com/user-attachments/assets/fa7a20c7-528a-4efa-8d4c-78909bd7070a)

2.install dependencies
open terminal for that project folder
npm install

3.Configure environment variables

create .env file in the Humanchain folder
PORT: Port on which the server will listen (default: 3000).
MongoDB connection string. For Atlas, use your cluster URI.
 
PORT=3000
MONGODB_URI=mongodb://localhost:27017/incident-log

4. Establish connection with mongodb compass by giving the same URI in mongoDB
![image](https://github.com/user-attachments/assets/925ad8c5-7171-45f2-aee7-d84f79d49837)

5.Start the server
npm run rev

Open the browser and go to localhost:3000
![image](https://github.com/user-attachments/assets/ed80b825-270e-4ab1-bef3-bd90c53a4b0e)


