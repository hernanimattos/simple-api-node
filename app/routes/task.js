const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.js');

router.get('/tasks', taskController.alltasks)
router.get('/task/:id', taskController.findById)
router.post('/task', taskController.create)
router.put('/task/:id', taskController.edit)
router.delete('/task/:id', taskController.delete)

module.exports = router;
