const express = require('express');
const {
  getMessagesvalidator,
  addMessagevalidator,
} = require('../utils/validators/messageValidator');

const {
  getMessages,
  addMessage,

} = require('../services/messageService');

const router = express.Router();

router.post('/getMessages', getMessagesvalidator, getMessages);
router.post('/addMessage', addMessagevalidator, addMessage);


module.exports = router;
