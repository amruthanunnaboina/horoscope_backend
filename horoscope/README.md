

# Features

- User Signup and Login (JWT-based Authentication)
- Daily Horoscope API based on user's birth date
- User Horoscope History tracking
- Rate Limiting for abuse prevention
- MongoDB for persistence
- Access via Postman and also swagger page has been built but can be accessible only after running this project

---

# Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- bcryptjs (for password hashing)
- dotenv
- express-rate-limit

---

# Folder Structure

horoscope/
├── controllers/
├── middleware/
├── models/
├── routes/
├── data/
├── .env
├── server.js
├── config.js
└── package.json


# running commands

npm install

# Create a .env file:

PORT=3000
MONGO_URI=mongodb://localhost:27017/horoscope
JWT_SECRET=yourSecretKey

# If using local MongoDB start server in local:

mkdir -p /data/db
sudo chown -R `id -un` /data/db
mongod

# start the project

npm start

# for accessing swagger page 

http://localhost:3000/api-docs 

or directly hit the api in postman after running




