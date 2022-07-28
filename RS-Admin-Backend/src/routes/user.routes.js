const jwt= require ( '../middleware/auth');
const Router = require ("express");
const userRouter = Router();
const userController = require('../controllers/user.controller');

// Retrieve All data
userRouter.get('/list', jwt, userController.findAll);

// Retrieve data with pagination
userRouter.get('/', jwt, userController.findPagination);

// Find one by ID
userRouter.get('/:id', jwt, userController.findOne);

// Create
userRouter.post('/', jwt, userController.create);

// Update
userRouter.put('/:id', jwt, userController.update);

// Delete
userRouter.delete('/:id', jwt, userController.delete);

module.exports=userRouter;
