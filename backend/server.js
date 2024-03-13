const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
// parse requests of content-type - application/json

let dbConnect = require("./dbConnect")
let userRoutes = require('./routes/userRoutes')
let postRoutes = require('./routes/postRoutes')

app.use(express.json());

app.use(cors());

app.use('/api/users', userRoutes)

app.use('/api/posts', postRoutes)

app.use('/uploads', express.static('uploads'))



app.get("/", (req, res) => {
res.json({ message: "Welcome to my Anime Streamer." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
console.log(`Server is running on port
${PORT}.`);
});

