const express = require('express');
const friendsController = require('../controllers/friend.controller');

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
    console.log('Middleware only for friends router');
    next();
})

friendsRouter.get('/', friendsController.get);
friendsRouter.post('/', friendsController.post);
friendsRouter.get('/:friendId', friendsController.view);

module.exports = friendsRouter;