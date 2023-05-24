const mongoose = require('mongoose');
const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/apiError");
const Messages = require("../models/messageModel");


exports.getMessages = asyncHandler(async (req, res, next) => {
    console.log(req.body); // log the request body
    const { sender, receiver } = req.body;
  
    const messages = await Messages.find({
      users: {
        $all: [sender, receiver],
      },
    }).sort({ updatedAt: 1 });
  
    const projectedMessages = messages.map((msg) => ({
      fromSelf: msg.sender.toString() === sender,
      message: msg.message.text,
    }));
  
    res.json(projectedMessages);
  });

exports.addMessage = asyncHandler(async (req, res, next) => {
    const { sender, receiver, message } = req.body;
    const data = await Messages.create({
      message: { text: message },
      users: [sender, receiver],
      sender: sender,
    });

    const successMsg = { msg: "Message added successfully." };
    const failureMsg = { msg: "Failed to add message to the database" };
  
    return data ? res.json(successMsg) : res.json(failureMsg);
  });