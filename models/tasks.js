const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tasksSchema = new Schema({
    name: String,
    description: String,
    goal: 
    new: Boolean,
    inProgress: Boolean,
    complete: Boolean,
    tabled: Boolean,
    createdAt: { 
        type: Date, default: Date.now 
    },
    date: { 
        type: Date,  
        min: Date.now // Set the minimum value to the current date and time
      },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

  })
    

  module.exports = mongoose.model('Tasks', tasksSchema);