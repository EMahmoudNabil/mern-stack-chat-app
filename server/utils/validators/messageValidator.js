const slugify = require('slugify');
const { check } = require('express-validator');
const validatorMiddleware = require('../../middlewares/validatorMiddleware');
const User = require('../../models/userModel');

exports.getMessagesvalidator = [
  check("sender").isMongoId().withMessage("Invalid Massage id format"),
  validatorMiddleware,
];

exports.addMessagevalidator = [
  check('message')
  .notEmpty()
  .withMessage('write massage  is required')
  .isLength({ max: 2000 })
  .withMessage('Too long description'),
  check("sender").isMongoId().withMessage("Invalid sender id format"),
  

  validatorMiddleware,
];
