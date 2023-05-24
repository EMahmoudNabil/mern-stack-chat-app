import React from "react";
import styled from "styled-components";
import ChatContainer from "../components/ChatContainer";
import Contacts from "../components/Contacts";
import Welcome from "../components/Welcome";
import ChatPageHook from "../hook/ChatPageHook";

export default function Chat() {
 const[handleChatChange,contacts,currentChat,socket]=ChatPageHook()

  return (
    <>
      <Container>
        <div className="container">
          <Contacts  contacts={contacts} handleChatChange={handleChatChange}/>
          {currentChat === undefined ? (
            <Welcome />
          ) : (
            <ChatContainer  currentChat={currentChat} socket={socket} />
          )}
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;