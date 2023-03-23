const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  userName: String,
  tasks: [
    {
      // Key can be of any name and the value we assign according to the type
      name: String,
      level: String,
      status: String,
      created_at: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});
// First argument is document's name, and second is our schema
module.exports = mongoose.model('tasks', taskSchema);