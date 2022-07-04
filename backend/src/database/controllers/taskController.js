const { getAllTasks } = require('../services/taskService');

const getAllTask = async (_req, res) => {
  
  try {
    const task = await getAllTasks();
    return res.status(200).json(task);
    
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: 'Invalid request' });
  }
};

module.exports = {
  getAllTask,
};