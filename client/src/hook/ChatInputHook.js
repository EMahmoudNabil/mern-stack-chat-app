import React, { useState, useEffect, useRef } from "react";


const ChatInputHook = ({handleSendMsg}) => {
 
  const [msg, setMsg] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (event, emojiObject) => {
    let message = msg;
    message += emojiObject.emoji;
    setMsg(message);
  };

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  
  return [handleEmojiPickerhideShow,handleEmojiClick,showEmojiPicker,sendChat,setMsg,msg];
};

export default ChatInputHook;
