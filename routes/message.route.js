const express = require('express');
const messageController = require('../controllers/message.controller');

const messageRouter = express.Router();

messageRouter.get('/', messageController.get);
messageRouter.post('/', messageController.post);

module.exports = messageRouter;