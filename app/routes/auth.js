import express from "express";
const router = express.Router();
import Auth from '../controllers/auth.js';

router.get('/auth', Auth.findUser)
// router.get('/task/:id', taskController.findById)
// router.post('/task', taskController.create)
// router.put('/task/:id', taskController.edit)
// router.delete('/task/:id', taskController._delete)

module.exports = router;
