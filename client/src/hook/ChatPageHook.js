import React, { useEffect, useState, useRef } from "react";

import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

import baseUrl from "../Api/baseURL";
import { useDispatch, useSelector } from 'react-redux';
import { getAllMessages, getOneMessages } from "../redux/actions/chatAction";
import { GetAllUser } from "../redux/actions/authAction";

const ChatPageHook = () => {
    const navigate = useNavigate();
    const socket = useRef();
    const [contacts, setContacts] = useState([]);
    const [currentChat, setCurrentChat] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);

    const dispatch = useDispatch();

console.log(currentUser)
    useEffect(async () => {
      
      if (!localStorage.getItem('user')) {
        navigate("/login");
      } else {
        setCurrentUser(
          await JSON.parse(
            localStorage.getItem('user')
          )
        );
      }
    }, []);


    useEffect(() => {
      if (currentUser) {
        socket.current = io(baseUrl);
        socket.current.emit("add-user", currentUser._id);
      }
    }, [currentUser]);




    useEffect(async () => {
      if (currentUser) {
        if (currentUser.isAvatarImageSet) {
          const data = await dispatch(getOneMessages(currentUser._id));
          setContacts(data.data);
          console.log(data);
        } else {
          navigate("/setAvatar");
        }
      }
    }, [currentUser]);




    const handleChatChange = (chat) => {
      setCurrentChat(chat);
    };



    return [handleChatChange,contacts,currentChat,socket]
    
    
}

export default ChatPageHook