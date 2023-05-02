const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensure-logged-in')
const tasksController = require('../controllers/tasks')

router.get('/', tasksController.index);

module.exports = router;
