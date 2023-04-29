const express= require('express');
const taskControllers = require('../controllers/task-controllers');
const router= express.Router();

router.route('/create-task').post(taskControllers.createTask);
router.route('/user-tasks').post(taskControllers.userTasks);
router.route('/delete-task').post(taskControllers.deleteUserTask);
// Passing child route into it

module.exports= router;