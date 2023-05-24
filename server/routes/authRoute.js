const express = require('express');
const multer = require("multer");
const {
  signupValidator,
  loginValidator,
} = require('../utils/validators/authValidator');

const {
  signup,
  login,
  getAllUsers,
  setAvatar,
  
  uploadCategoryImage,
  logOut
} = require('../services/authService');




const router = express.Router();





router.post('/signup', signupValidator, signup);
router.post('/login', loginValidator, login);
router.post("/setAvatar",setAvatar);
router.get('/getAllUsers', getAllUsers);
router.get('/getAllUsers/:id', getAllUsers);
router.get("/logout/:id", logOut);
module.exports = router;
