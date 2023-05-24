import React, { useState, useEffect } from "react";


const ContactsUseHooks = ({handleChatChange}) => {
    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentSelected, setCurrentSelected] = useState(undefined);
    useEffect(async () => {
      const data = await JSON.parse(
       localStorage.getItem('user')
      );
      setCurrentUserName(data.username);
      setCurrentUserImage(data.avatarImage);
    }, []);
    const changeCurrentChat = (index, contact) => {
      setCurrentSelected(index);
      handleChatChange(contact);
    };
  return [currentUserImage,currentUserName,currentSelected,changeCurrentChat];
};

export default ContactsUseHooks;
