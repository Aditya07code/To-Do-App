MERN ToDo List App
This is a ToDo List application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The app allows users to create, read, update, and delete tasks, with all task data stored in a MongoDB database. The app is deployed on Render.


Features
Add new tasks
Edit task titles
Delete tasks
Backend API to manage tasks
Technologies
Frontend
React.js: Client-side rendering.
Vite: Build tool used for React development.
Axios: HTTP client for API requests.
CSS: Styling for the application.
Backend
Node.js: Runtime environment for the backend.
Express.js: Web framework to handle routing and HTTP requests.
MongoDB: NoSQL database to store tasks.
Mongoose: ODM for MongoDB to interact with the database.
Render: Hosting service for both frontend and backend.
Setup Instructions
To run the app locally:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/todo-mern-app.git
cd todo-mern-app
Install dependencies for both frontend and backend:

Backend (inside the server folder):

bash
Copy code
cd server
npm install
Frontend (inside the client folder):

bash
Copy code
cd client
npm install
Create a .env file in the server directory to add your MongoDB connection string and other environment variables (refer to the Environment Variables section).

Start the development servers:

Start backend (from the server folder):

bash
Copy code
npm start
Start frontend (from the client folder):

bash
Copy code
npm run dev
Visit http://localhost:3000 in your browser for the frontend (or the port specified by Vite).

Deployment
This application is deployed on Render:

Frontend: URL of deployed frontend.
Backend: URL of deployed backend.
Steps to deploy on Render:
Create a MongoDB cluster on MongoDB Atlas.
Set up projects on Render for the frontend and backend.
Add the required environment variables (see below).
Deploy both frontend and backend, ensuring that they communicate with the database and each other correctly.
Environment Variables
Ensure the following environment variables are added in the .env file for the backend:

bash
Copy code
MONGO_URI=your-mongodb-connection-string
PORT=5000
CLIENT_URL=http://localhost:3000
For deployment on Render, add these to your environment settings on the dashboard.

API Endpoints
Base URL
The API is available at: http://localhost:5000/api/todos (or the deployed backend URL).

Endpoints
GET /api/get - Get all tasks
POST /api/save - Add a new task
PUT /api/update/:id - Update a task
DELETE /api/delete/:id - Delete a task

Project Demo Link - https://drive.google.com/file/d/18nlxFBrt4W4Vv5lduDImG79e-3M0Z_iA/view?usp=sharing
