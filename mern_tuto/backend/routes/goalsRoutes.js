const express = require('express');

const {getGoal, setGoal, updateGoal, deleteGoal} = require('../controllers/goalsController')

const router = express.Router();

router.route('/').get(getGoal).post(setGoal);
router.route('/:id').put(updateGoal).delete(deleteGoal);



module.exports=router