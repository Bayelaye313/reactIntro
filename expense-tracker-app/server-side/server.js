const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')

dotenv.config()

const PORT = process.env.PORT || 5002
const app = express();
const transactions = require('./routes/transactions')
const connectDB = require('./database/db')

connectDB()
app.use('/api/transactions', transactions)

app.listen(PORT,console.log(`server run in : ${process.env.NODE_ENV} mode 
    on Port :  ${process.env.PORT} `.cyan.bold)  )