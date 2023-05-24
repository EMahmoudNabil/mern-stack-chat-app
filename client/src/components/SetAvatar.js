// SetAvatar.js
import React from 'react';
import styled from 'styled-components';
import loader from '../assets/loader.gif';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SetAvatarHook from '../hook/SetAvatarHooks';

export default function SetAvatar() {
  const  [handleSubmit, avatars, selectedAvatar, isLoading, setSelectedAvatar] = SetAvatarHook();

  return (
    <>
      {isLoading ? (
        <Container>
          <img src={loader} alt="loader" className="loader" />
        </Container>
      ) : (
        <Container>
          <div className="title-container">
            <h1>حدد صورة البروفيل الخاصة بك</h1>
          </div>
          <div className="avatars">
            {avatars.map((avatar, index) => (
              <div className={`avatar ${selectedAvatar === index ? 'selected' : ''}`} key={avatar}>
                <img
                  src={`data:image/svg+xml;utf8,${encodeURIComponent(avatar)}`}
                  alt="avatar"
                  onClick={() => setSelectedAvatar(index)}
                />
              </div>
            ))}
          </div>
          <button onClick={handleSubmit} className="submit-btn">
            اختيار صورة البروفيل
          </button>
          <ToastContainer />
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  background-color: #131324;
  height: 100vh;
  width: 100vw;

  .loader {
    max-inline-size: 100%;
  }

  .title-container {
    h1 {
      color: white;
    }
  }
  .avatars {
    display: flex;
    gap: 2rem;

    .avatar {
      border: 0.4rem solid transparent;
      padding: 0.4rem;
      border-radius: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s ease-in-out;
      img {
        height: 6rem;
        transition: 0.5s ease-in-out;
      }
    }
    .selected {
      border: 0.4rem solid #4e0eff;
    }
  }
  .submit-btn {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
`;