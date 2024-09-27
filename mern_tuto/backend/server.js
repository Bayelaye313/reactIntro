const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors')
const {handleError} = require('./middleware/handleError')
const connectDb = require('./config/db')
const port = process.env.PORT || 5001
connectDb()
const App = express();

App.use(express.json());
App.use(express.urlencoded({extended:false}))
App.use('/api/goals', require('./routes/goalsRoutes'))
App.use(handleError)

App.listen(port, ()=>console.log(`server started on port ${port}`))

