# Football Matches API

A simple project to manage football teams and matches using **Node.js**, **Express**, and **MongoDB**.

---

## Features
- Add, update, and delete teams
- Add, update, and delete matches
- Upload a team logo and store its link in the database
- Organized API using Controllers and Routes
- MongoDB database integration

---

## Requirements
- Node.js
- MongoDB

---

## Installation
1. Download and extract the project
2. Open the project folder
3. Install dependencies:
   ```bash
   npm install
   ```
4. Put the db connection to connect with Atlas
   ```
   MONGO_URI=your_mongo_connection
   PORT=3000
   ```
5. Start the server:
   ```bash
   npm start
   ```

---

## Project Structure
- `server.js` → main server file
- `routes/` → API routes (teams, matches)
- `controllers/` → business logic for routes
- `models/` → Mongoose models (Team, Match)
- `uploads/` → stores uploaded team logos

---

## API Endpoints

### Teams
- `POST /teams` → Add a new team  
- `GET /teams` → Get all teams  
- `GET /teams/:id` → Get a specific team  
- `PUT /teams/:id` → Update a team  
- `DELETE /teams/:id` → Delete a team  

### Matches
- `POST /matches` → Add a new match  
- `GET /matches` → Get all matches  
- `GET /matches/:id` → Get a specific match  
- `PUT /matches/:id` → Update a match  
- `DELETE /matches/:id` → Delete a match  

---

## Notes
- Team logos are uploaded via the API and stored in the `uploads/` folder.  
- The logo link is saved in the database under the team’s data.  
- The project is structured to make it easy to add new features.  
