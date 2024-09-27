const express = require('express');
const dotenv = require('dotenv').config();
const {handleError} = require('./middleware/handleError')
const port = process.env.PORT || 5000

const App = express();

App.use(express.json());
App.use(express.urlencoded({extended:false}))
App.use('/api/goals', require('./routes/goalsRoutes'))
App.use(handleError)

App.listen(port, ()=>console.log(`server started on port ${port}`))

