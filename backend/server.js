const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000

const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use('/api/goals', require('./routes/goalRoutes'))














app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))