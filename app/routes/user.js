import express from "express";
const router = express.Router();
import userController from '../controllers/user';

router.get('/users', userController.allUsers)
router.get('/user/:id', userController.findById)
router.post('/user', userController.create)
router.put('/user/:id', userController.edit)
router.delete('/user/:id', userController._delete)

module.exports = router;
