const taskModel = require('../db/task-model');


exports.createTask = async (req, res) => {
  const { body } = req;
  try {
    await taskModel.create(body)
    res.status(201).JSON({
        status: 'SUCCESS',
        message: 'Successfully created a task'
    })
  } catch (error) {
    res.status(403).JSON({
        status: 'FAILED',
        message: error.message,
    })
  }
};

