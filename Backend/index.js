const express = require('express')
const app = express()
const cors = require ('cors')
const authRoutes = require('./Routes/AuthRoutes')
const destinationRoutes = require('./Routes/DestinationRoutes')
const userRoutes = require('./Routes/UserRoutes')

// * Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/api/users', userRoutes);

const port = 5000

app.listen(port, () => console.log(`App listening on port ${port}!`))