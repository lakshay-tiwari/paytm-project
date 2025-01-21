# Full Stack Application

## Overview
This is a full stack application featuring a React-based frontend styled with Tailwind CSS and a backend powered by Node.js and Express.js. The application includes authentication using JSON Web Tokens (JWT) and utilizes MongoDB as the database with Mongoose for object modeling. Schema validation is implemented using Zod.

## Prerequisites
1. [Node.js](https://nodejs.org/) (v14.x or later recommended)
2. [MongoDB](https://www.mongodb.com/) (self-hosted or a cloud database)

## Installation Guide
Follow the steps below to set up and run the application:

### 1. Clone the Repository
```bash
git clone https://github.com/lakshay-tiwari/paytm-project
```

### 2. Install Node.js
Ensure you have Node.js installed on your system. Check by running:
```bash
node -v
npm -v
```
If not installed, download and install it from [Node.js official site](https://nodejs.org/).

### 3. Set Up the Frontend
Navigate to the frontend folder and install dependencies:
```bash
cd frontend
npm install
```
Before running the development server, ensure that the frontend has the correct URL to communicate with the backend. This might involve updating a configuration file. Ensure config.js is correct. 

Run the development server:
```bash
npm run dev
```
This will start the frontend server. Typically, it runs on `http://localhost:5173/`.

### 4. Set Up the Backend
Navigate to the backend folder:
```bash
cd ../backend
```
Set up environment variables by copying the `sample.env.txt` file to `.env` and updating the values as needed:
```bash
cp sample.env.txt .env
```
Install backend dependencies:
```bash
npm install
```
Run the backend server:
```bash
npm run dev
```
This will start the backend server. Typically, it runs on `http://localhost:3000/`.

### 5. Verify the Application
Once both the frontend and backend servers are running, open your browser and navigate to `http://localhost:5173/` to use the application.

## Technologies Used
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Authentication:** JWT (JSON Web Token)
- **Database:** MongoDB (with Mongoose for object modeling)
- **Validation:** Zod for schema validation

## Additional Notes
- Ensure your MongoDB instance is running and accessible by the backend.
- Update the `.env` file with correct database connection strings and other configurations before starting the backend server.

## Contribution
Feel free to fork the repository and submit pull requests for improvements or new features.

## License
This project is licensed under the MIT License.

