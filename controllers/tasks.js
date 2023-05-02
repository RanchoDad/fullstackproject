const Task = require('../models/tasks');


const tasksController = {
    index: async (req, res) => {
        const tasks = await Task.find({});
        console.log('you are at the index');
        res.render('tasks/index', {
            tasks
        })
    }
}
module.exports = tasksController;