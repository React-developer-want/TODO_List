const taskModel = require('../db/task-model');
const { Types } = require('mongoose');

exports.createTask = async (req, res) => {
  const body = req.body;
  try {
    body.userName = body.userName.toLowerCase();
    const alreadyExistingUser = await taskModel.find({userName: body.userName});
    if(!!alreadyExistingUser.length){
      const userTasks = alreadyExistingUser[0].tasks;
      alreadyExistingUser[0].tasks = [ ...userTasks, { ...body.task } ];
      await alreadyExistingUser[0].save();
    }else {
      await taskModel.create({
        userName: body.userName,
        tasks: [
          {...body.task}
        ]
      })
    }
    res.status(201).json({
      status: 'SUCCESS',
      message: 'Successfully created a task'
    })
  } catch (error) {
    res.status(403).json({
        status: 'FAILED',
        message: error.message,
    })
  }
};

exports.userTasks = async (req, res) => {
  const { username } = req.body;
  try{
    const data = await taskModel.find({userName: username.toLowerCase()}).select('-__v -_id');
    res.status(200).json({
      status: 'SUCCESS',
      response: data[0]
      
    })
  }catch(error) {
    res.status(404).json({
      status: 'FAILED',
      message: error.message
    })
  }
};

exports.deleteUserTask = async (req, res) => {
  const { username, id:taskIdToBeDeleted } = req.body;
  try{
    const user = await taskModel.find({userName: username.toLowerCase()});
    const userTasks = user[0]?.tasks?.filter(task => String(task?._id) !== taskIdToBeDeleted);
    user[0].tasks = userTasks;
    await user[0].save();
    res.status(201).json({
      status: 'SUCCESS',
      message: 'successfully deleted the task with id: '+taskIdToBeDeleted
    })
  }catch(error){
    res.status(404).json({
      status: 'FAILED',
      message: error.message
    })
  }
};