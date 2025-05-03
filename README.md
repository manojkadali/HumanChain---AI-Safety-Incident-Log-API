HumanChain AI Safety Incident Log API

This repository contains a simple RESTful API for logging and managing AI safety incidents, built as a take‑home assignment for a Backend Developer Intern role at Sparkelhood (HumanChain AI Safety). The backend is implemented in Node.js with Express and MongoDB, and a minimal frontend is provided using plain HTML, CSS, and JavaScript.

![image](https://github.com/user-attachments/assets/667cde00-0310-4706-ac74-f87b385e9eb9)

VIDEO EXPLANATIONS:
Local setup Video for HumanChain Project:
https://drive.google.com/file/d/1TG9c5JdXTtdS45OdyUzDqaWtlH_25ne6/view?usp=sharing
Project Overview video:
https://drive.google.com/file/d/1EbEbMy3MDzWL9CZGFA90haIfPEIQk33k/view?usp=sharing
PostMan API Testing:
https://drive.google.com/file/d/1EbEbMy3MDzWL9CZGFA90haIfPEIQk33k/view?usp=sharing

Prerequisites
1. install Node.js v14 or higher( install from nodejs.org).
2. npm usally comes with nodejs,if not install it
3. install mongoDB Community edition with compass(GUI), or mongoDB Atlas connection string.

Installation & Running Locally
1. Clone the repository or download the zip file
 ![image](https://github.com/user-attachments/assets/fa7a20c7-528a-4efa-8d4c-78909bd7070a)

2.install dependencies : 
   ->open terminal for that project folder
   ->npm install

3.Configure environment variables : 
  ->create .env file in the Humanchain folder.
  ->PORT: Port on which the server will listen (default: 3000).
  ->MongoDB connection string. For Atlas, use your cluster URI.
 
  1.PORT=3000.
  2.MONGODB_URI=mongodb://localhost:27017/incident-log.
  ![image](https://github.com/user-attachments/assets/ca5c27da-ba1e-4f42-ae2c-af2f98bd1263)


4. Establish connection with mongodb compass by giving the same URI in mongoDB
![image](https://github.com/user-attachments/assets/925ad8c5-7171-45f2-aee7-d84f79d49837)

5.Start the server : 
  ->npm run rev 

6: Open the browser and go to localhost:3000
![image](https://github.com/user-attachments/assets/ed80b825-270e-4ab1-bef3-bd90c53a4b0e)



