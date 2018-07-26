import express from "express";
const router = express.Router();
import taskController from '../controllers/task.js';

router.get('/tasks', taskController.alltasks)
router.get('/task/:id', taskController.findById)
router.post('/task', taskController.create)
router.put('/task/:id', taskController.edit)
router.delete('/task/:id', taskController._delete)

module.exports = router;
