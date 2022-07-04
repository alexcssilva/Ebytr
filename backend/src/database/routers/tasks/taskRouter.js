const express = require('express');
const taskController = require('../../controllers/taskController');

const taskRouter = express.Router();

taskRouter.get('/', taskController.getAllTask);

module.exports = taskRouter;
