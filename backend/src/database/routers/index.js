const express = require('express');
const taskRouter = require('./tasks/taskRouter');

const router = express();

router.use('/', taskRouter);

module.exports = router;
