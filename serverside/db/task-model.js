const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: true,
    required: true
  },
  tasks: [
    {
      // Key can be of any name and the value we assign according to the type
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      created_at: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});
// First argument is document's name, and second is our schema
module.exports = mongoose.model('tasks', taskSchema);