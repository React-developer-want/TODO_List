const taskModel = require('../db/task-model');

exports.createTask = async (req, res) => {
  const body = req.body;
  console.log('body', body);
  try {
    await taskModel.create(body)
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