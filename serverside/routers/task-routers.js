const express= require('express');
const taskControllers = require('../controllers/task-controllers');
const router= express.Router();



router.route('/create-task').post(taskControllers.createTask);
// Passing child route into it


module.exports= router;