import React, { useState, useEffect, useRef } from "react";

import { createMassages, getAllMessages } from "../redux/actions/chatAction";

const ChatContainerHook = ({ socket,currentChat }) => {
 
    const [messages, setMessages] = useState([]);
    const scrollRef = useRef();
    const [arrivalMessage, setArrivalMessage] = useState(null);
  
    useEffect(async () => {
      const data = await JSON.parse(
          localStorage.getItem('user')
      );
      const response = await getAllMessages({
        sender: data._id,
        receiver: currentChat._id})
    
      setMessages(response.data);
    }, [currentChat]);
  
    useEffect(() => {
      const getCurrentChat = async () => {
        if (currentChat) {
          await JSON.parse(
              localStorage.getItem('user')
          )._id;
        }
      };
      getCurrentChat();
    }, [currentChat]);
  
    const handleSendMsg = async (msg) => {
      const data = await JSON.parse(
          localStorage.getItem('user')
      );
      socket.current.emit("send-msg", {
        receiver: currentChat._id,
        sender: data._id,
        msg,
      });

      await createMassages(
        {from: data._id,
        to: currentChat._id,
        message: msg})
    
  
      const msgs = [...messages];
      msgs.push({ fromSelf: true, message: msg });
      setMessages(msgs);
    };
  
    useEffect(() => {
      if (socket.current) {
        socket.current.on("msg-recieve", (msg) => {
          setArrivalMessage({ fromSelf: false, message: msg });
        });
      }
    }, []);
  
    useEffect(() => {
      arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage]);
  
    useEffect(() => {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
  
  return [messages,scrollRef,handleSendMsg];
};

export default ChatContainerHook;
