const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tasksSchema = new Schema({
    title: String,
    description: String,
    completionDateGoal: { 
        type: Date,  
        min: Date.now // Set the minimum value to the current date and time
      },
    new: Boolean,
    inProgress: Boolean,
    complete: Boolean,
    tabled: Boolean,
    createdAt: { 
        type: Date, 
        required: true,
        default: function () {
            return new Date().toLocaleString(); // Set the current date and time to the users local timezone
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

  })
    

  module.exports = mongoose.model('Tasks', tasksSchema);