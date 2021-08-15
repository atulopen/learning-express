const express = require('express');
const friendsController = require('../controllers/friend.controller');

const friendsRouter = express.Router();

friendsRouter.get('/', friendsController.get);
friendsRouter.post('/', friendsController.post);
friendsRouter.get('/:friendId', friendsController.view);

module.exports = friendsRouter;