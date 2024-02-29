const express = require('express')
const app = express();
const PORT = 8000

// Routes 
const userRoutes = Require('./routes/userRoutes')

app.use(express.json());

// defining end points 
app.use('/api/users', userRoutes)

app.use('/', (req, res) => {
    res.send({ status: 200, message: "Welcome to my capstone Page" })
});

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT},')
});
